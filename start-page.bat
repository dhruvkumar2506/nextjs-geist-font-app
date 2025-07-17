@echo off
title PAGE - Personal AI Guidance Engine
echo ================================================
echo Starting PAGE AI Assistant...
echo ================================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Installing Node.js...
    powershell -Command "Invoke-WebRequest -Uri 'https://nodejs.org/dist/v20.10.0/node-v20.10.0-x64.msi' -OutFile 'node-installer.msi'"
    msiexec /i node-installer.msi /quiet
    del node-installer.msi
)

REM Install dependencies if needed
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
)

REM Start the application
echo Starting PAGE AI on port 8000...
echo.
echo ================================================
echo PAGE AI is now running!
echo ================================================
echo.
echo Open your web browser and go to:
echo http://localhost:8000
echo.
echo Features available:
echo - Real-time Google Search
echo - Complete Windows 11 Control
echo - Voice Commands and Recognition
echo - Camera and Visual Analysis
echo - File and System Management
echo.
echo Press Ctrl+C to stop the application
echo ================================================
echo.

npm run dev
