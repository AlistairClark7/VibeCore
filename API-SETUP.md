# API Setup Summary

## What Was Added

### Backend (ASP.NET Core)

1. **API Controller**: `Areas/Api/Controllers/TodosController.cs`
   - Full CRUD operations for TodoItems
   - Endpoints: GET, POST, PUT, DELETE, PATCH /api/Todos
2. **Entity Model**: `Models/TodoItem.cs`
   - Properties: Id, Title, IsCompleted, CreatedAt, CompletedAt
3. **Database**: Updated `ApplicationDbContext.cs`
   - Added `DbSet<TodoItem> Todos`
   - Migration created and applied

4. **Swagger/OpenAPI**: Updated `Program.cs`
   - Added Swashbuckle.AspNetCore (v10.1.4)
   - Swagger UI available at `/swagger` in development
   - JSON spec at `/swagger/v1/swagger.json`

### Frontend (React + Vite)

1. **Tanstack Query**: Added for data fetching
   - `@tanstack/react-query` + devtools
   - Provider in `src/providers/QueryProvider.jsx`
2. **Todo Component**: `src/components/TodoList.jsx`
   - Real-time updates (refetches every 5 seconds)
   - Add, complete, delete todos
   - Integrated into Home page

3. **OpenAPI Client Generation**:
   - Script: `npm run generate-client`
   - Auto-generates TypeScript client from swagger.json

## How It Works

### Automatic Swagger → TypeScript Client Generation

When running `dotnet watch`:

1. On each rebuild, PostBuild hook runs (see `.csproj`)
2. `generate-swagger.sh` script executes:
   - Reads port from `launchSettings.json` dynamically
   - Fetches `/swagger/v1/swagger.json` from running app
   - Saves to `ClientApp/swagger.json`
   - Runs `npm run generate-client` to generate TypeScript types
   - Result: `ClientApp/src/api/` folder with typed client

### The Flow

```
Code Change → dotnet watch rebuild → App restarts →
PostBuild hook → fetch swagger.json → generate TS client →
React auto-reloads with new types
```

## Testing It Out

1. **Start the backend**:

   ```bash
   cd EasyAspCoreReactTemplate
   dotnet watch
   ```

2. **Start the API watcher** (in a new terminal):

   ```bash
   cd ClientApp
   npm run watch-api
   ```

   This watches for changes to:
   - `Areas/Api/**` - API controllers
   - `Models/**` - Data models
   - `Program.cs` - Configuration

   When any of these change, it automatically fetches the new swagger.json and regenerates the TypeScript client.

3. **Start the frontend dev server** (in another terminal):

   ```bash
   cd ClientApp
   npm run dev
   ```

4. **Open the app**: Navigate to http://localhost:5036/app
   - You'll see the TodoList on the home page
   - Add, complete, and delete todos
   - Data persists in SQLite database

5. **View Swagger UI**: http://localhost:5036/swagger
   - Test API endpoints directly

## Workflow

When developing:

1. Make changes to a controller in `Areas/Api/Controllers/`
2. `dotnet watch` rebuilds the backend
3. `npm run watch-api` detects the changes
4. Swagger JSON is automatically fetched and client is regenerated
5. React dev server hot-reloads with new API types

## Manual Commands

If you want to update the API client manually:

- `npm run fetch-swagger` - Download swagger.json from running app
- `npm run generate-client` - Generate TypeScript client
- `npm run update-api` - Both in one command

## Next Steps

Once `swagger.json` is generated, you can replace the manual fetch calls in `TodoList.jsx` with the auto-generated client:

```jsx
import { TodosService } from "../api";

// Instead of manual fetch:
const { data: todos } = useQuery({
  queryKey: ["todos"],
  queryFn: () => TodosService.getTodos(),
});
```

## Port Configuration

The port is read dynamically from `Properties/launchSettings.json`, so each developer can use their own port without conflicts.
