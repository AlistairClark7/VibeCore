#!/usr/bin/env pwsh
# Start ASP.NET Core and Vite dev server for development

Write-Host "Starting React + ASP.NET Core Development Environment..." -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "Node.js version: $nodeVersion" -ForegroundColor Cyan
} catch {
    Write-Host "ERROR: Node.js is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Navigate to ClientApp and check for node_modules
$clientAppPath = Join-Path $PSScriptRoot "ClientApp"
$nodeModulesPath = Join-Path $clientAppPath "node_modules"

if (-not (Test-Path $nodeModulesPath)) {
    Write-Host "Installing npm dependencies..." -ForegroundColor Yellow
    Set-Location $clientAppPath
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Failed to install npm dependencies" -ForegroundColor Red
        exit 1
    }
    Set-Location $PSScriptRoot
}

Write-Host ""
Write-Host "==============================================================" -ForegroundColor Green
Write-Host "Starting ASP.NET Core + Vite dev server..." -ForegroundColor Green
Write-Host "==============================================================" -ForegroundColor Green
Write-Host ""
Write-Host "✨ Vite dev server will be started and stopped with this script" -ForegroundColor Cyan
Write-Host "✨ Hot Module Replacement (HMR) is enabled" -ForegroundColor Cyan
Write-Host "✨ React Fast Refresh is configured" -ForegroundColor Cyan
Write-Host "✨ API watcher will auto-generate TypeScript client on changes" -ForegroundColor Cyan
Write-Host ""
Write-Host "React App will be available at: https://localhost:XXXX/app" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop all servers" -ForegroundColor Yellow
Write-Host "==============================================================" -ForegroundColor Green
Write-Host ""

# Start Vite dev server in background
Write-Host ""
Write-Host "Starting Vite dev server..." -ForegroundColor Cyan
Set-Location $clientAppPath
$viteProcess = Start-Process -FilePath "npm" -ArgumentList "run", "dev" -PassThru

Start-Sleep -Seconds 2

# Start API watcher in background
Write-Host ""
Write-Host "Starting API watcher for TypeScript client generation..." -ForegroundColor Cyan
$apiWatcherProcess = Start-Process -FilePath "npm" -ArgumentList "run", "watch-api" -PassThru

Start-Sleep -Seconds 1

# Start ASP.NET Core app
Write-Host ""
Write-Host "Starting ASP.NET Core application..." -ForegroundColor Cyan
Set-Location $PSScriptRoot

$dotnetExitCode = 0
try {
    dotnet watch run
    $dotnetExitCode = $LASTEXITCODE
} finally {
    Write-Host ""
    Write-Host "Stopping API watcher..." -ForegroundColor Yellow
    if ($apiWatcherProcess -and -not $apiWatcherProcess.HasExited) {
        Stop-Process -Id $apiWatcherProcess.Id -Force -ErrorAction SilentlyContinue
        $apiWatcherProcess.WaitForExit(3000) | Out-Null
    }
    Write-Host "Stopping Vite dev server..." -ForegroundColor Yellow
    if ($viteProcess -and -not $viteProcess.HasExited) {
        Stop-Process -Id $viteProcess.Id -Force -ErrorAction SilentlyContinue
        $viteProcess.WaitForExit(3000) | Out-Null
    }
    Write-Host "Cleanup complete" -ForegroundColor Green
}

if ($dotnetExitCode -ne 0) {
    exit $dotnetExitCode
}
