#!/bin/bash

# Read the HTTP port from launchSettings.json
PORT=$(grep -A 10 '"http":' Properties/launchSettings.json | grep 'applicationUrl' | sed 's/.*localhost:\([0-9]*\).*/\1/' | head -1)

if [ -z "$PORT" ]; then
  echo "⚠️  Could not determine port from launchSettings.json, using default 5036"
  PORT=5036
fi

echo "📡 Fetching swagger from http://localhost:$PORT/swagger/v1/swagger.json..."

# Try to fetch swagger.json with retries
for i in {1..3}; do
  if curl -s "http://localhost:$PORT/swagger/v1/swagger.json" -o ClientApp/swagger.json --max-time 5; then
    if [ -s ClientApp/swagger.json ]; then
      echo "✓ Swagger JSON downloaded successfully"
      
      # Generate TypeScript client
      if [ -d "ClientApp/node_modules" ]; then
        echo "🔧 Generating TypeScript client..."
        cd ClientApp && npm run generate-client
        echo "✓ TypeScript client generated!"
      else
        echo "⚠️  node_modules not found, skipping client generation"
      fi
      exit 0
    fi
  fi
  
  if [ $i -lt 3 ]; then
    echo "⏳ Attempt $i failed, retrying in 2 seconds..."
    sleep 2
  fi
done

echo "⚠️  Could not fetch swagger.json - server may not be ready yet"
exit 0
