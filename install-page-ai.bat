@echo off
echo ================================================
echo PAGE - Personal AI Guidance Engine Installer
echo Windows 11 Advanced AI Assistant
echo ================================================
echo.

echo Checking system requirements...
ver | findstr /i "10.0.22000" >nul
if %errorlevel% neq 0 (
    echo ERROR: Windows 11 Build 22000 or later required
    pause
    exit /b 1
)

echo System requirements met!
echo.

echo Installing PAGE AI Assistant...
echo.

REM Create application directory
if not exist "%ProgramFiles%\PAGE AI" mkdir "%ProgramFiles%\PAGE AI"

REM Copy application files
echo Copying application files...
xcopy /E /I /Y "." "%ProgramFiles%\PAGE AI\"

REM Create desktop shortcut
echo Creating desktop shortcut...
powershell -Command "\$WshShell = New-Object -comObject WScript.Shell; \$Shortcut = \$WshShell.CreateShortcut('\$env:USERPROFILE\Desktop\PAGE AI.lnk'); \$Shortcut.TargetPath = '%ProgramFiles%\PAGE AI\start-page.bat'; \$Shortcut.IconLocation = '%ProgramFiles%\PAGE AI\icon.ico'; \$Shortcut.Description = 'PAGE - Personal AI Guidance Engine'; \$Shortcut.Save()"

REM Create start menu entry
echo Creating start menu entry...
if not exist "%ProgramData%\Microsoft\Windows\Start Menu\Programs\PAGE AI" mkdir "%ProgramData%\Microsoft\Windows\Start Menu\Programs\PAGE AI"
powershell -Command "\$WshShell = New-Object -comObject WScript.Shell; \$Shortcut = \$WshShell.CreateShortcut('%ProgramData%\Microsoft\Windows\Start Menu\Programs\PAGE AI\PAGE AI.lnk'); \$Shortcut.TargetPath = '%ProgramFiles%\PAGE AI\start-page.bat'; \$Shortcut.IconLocation = '%ProgramFiles%\PAGE AI\icon.ico'; \$Shortcut.Description = 'PAGE - Personal AI Guidance Engine'; \$Shortcut.Save()"

REM Register with Windows
echo Registering with Windows...
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\PAGE AI" /v "DisplayName" /t REG_SZ /d "PAGE - Personal AI Guidance Engine" /f
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\PAGE AI" /v "DisplayVersion" /t REG_SZ /d "1.0.0" /f
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\PAGE AI" /v "Publisher" /t REG_SZ /d "PAGE AI Systems" /f
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\PAGE AI" /v "InstallLocation" /t REG_SZ /d "%ProgramFiles%\PAGE AI" /f
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\PAGE AI" /v "UninstallString" /t REG_SZ /d "%ProgramFiles%\PAGE AI\uninstall.bat" /f

REM Set up Windows services integration
echo Setting up Windows integration...
schtasks /create /tn "PAGE AI Startup" /tr "%ProgramFiles%\PAGE AI\start-page.bat" /sc onlogon /ru "%USERNAME%" /f

echo.
echo ================================================
echo PAGE AI Installation Complete!
echo ================================================
echo.
echo The application has been installed to:
echo %ProgramFiles%\PAGE AI
echo.
echo You can now:
echo - Launch from Desktop shortcut
echo - Find in Start Menu under "PAGE AI"
echo - Run automatically on Windows startup
echo.
echo For full functionality, ensure you have:
echo - Internet connection for Google search
echo - Administrator privileges for system control
echo - Camera and microphone permissions
echo.
echo Visit http://localhost:8000 after starting the application
echo.
pause
