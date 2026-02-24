import { readFile, writeFile } from "fs/promises";
import { join } from "path";

async function generateSwagger() {
  try {
    // Read launchSettings.json to get the port
    const launchSettingsPath = join(
      process.cwd(),
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
            signal: AbortSignal.timeout(5000),
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
    return false;
  }
}

generateSwagger().then((success) => {
  process.exit(success ? 0 : 1);
});
