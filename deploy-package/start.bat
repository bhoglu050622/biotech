@echo off
REM Sentient Biotech - Production Server Starter (Windows)

echo.
echo =====================================================
echo   Sentient Biotech Production Server
echo =====================================================
echo.

REM Check if node is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed.
    echo Please install Node.js 18+ from https://nodejs.org
    pause
    exit /b 1
)

REM Display Node version
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo [OK] Node.js %NODE_VERSION% detected
echo.

REM Set production environment
set NODE_ENV=production

REM Default port
if not defined PORT set PORT=3000

echo [INFO] Server starting on port %PORT%
echo [INFO] Access at: http://localhost:%PORT%
echo.
echo Press Ctrl+C to stop the server
echo -----------------------------------------------------
echo.

REM Start the server
node server.js

pause

