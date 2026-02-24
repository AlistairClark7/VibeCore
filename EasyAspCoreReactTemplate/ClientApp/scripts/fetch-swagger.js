import { readFile, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

async function generateSwagger() {
  try {
    // Get the directory where this script is located
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    // Read launchSettings.json to get the port
    // scripts/ -> ClientApp/ -> EasyAspCoreReactTemplate/ -> Properties/
    const launchSettingsPath = join(
      __dirname,
      "..",
      "..",
      "Properties",
      "launchSettings.json",
    );

    const launchSettings = JSON.parse(
      await readFile(launchSettingsPath, "utf-8"),
    );

    const httpProfile =
      launchSettings.profiles.http || launchSettings.profiles.https;
    const applicationUrl =
      httpProfile?.applicationUrl || "http://localhost:5036";
    const port = applicationUrl.match(/localhost:(\d+)/)?.[1] || "5036";

    console.log(
      `📡 Fetching swagger from http://localhost:${port}/swagger/v1/swagger.json...`,
    );

    // Try to fetch swagger.json with retries
    for (let i = 1; i <= 3; i++) {
      try {
        const response = await fetch(
          `http://localhost:${port}/swagger/v1/swagger.json`,
          {
            signal: AbortSignal.timeout(10000),
          },
        );

        if (response.ok) {
          const swaggerJson = await response.text();
          await writeFile("swagger.json", swaggerJson, "utf-8");
          console.log("✓ Swagger JSON downloaded successfully");
          return true;
        }
      } catch (error) {
        if (i < 3) {
          console.log(`⏳ Attempt ${i} failed, retrying in 2 seconds...`);
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
      }
    }

    console.log(
      "⚠️  Could not fetch swagger.json - server may not be ready yet",
    );
    return false;
  } catch (error) {
    console.error("Error:", error.message);
    if (error.code === "ENOENT") {
      console.error(
        "Could not find launchSettings.json. Make sure you're in the ClientApp directory.",
      );
    }
    return false;
  }
}

generateSwagger().then((success) => {
  process.exit(success ? 0 : 1);
});
