@echo off
echo ================================================
echo PAGE AI Uninstaller
echo ================================================
echo.

echo Removing PAGE AI from your system...
echo.

REM Remove scheduled task
schtasks /delete /tn "PAGE AI Startup" /f >nul 2>&1

REM Remove registry entries
reg delete "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\PAGE AI" /f >nul 2>&1

REM Remove shortcuts
del "%USERPROFILE%\Desktop\PAGE AI.lnk" >nul 2>&1
rmdir /s /q "%ProgramData%\Microsoft\Windows\Start Menu\Programs\PAGE AI" >nul 2>&1

REM Remove application files
echo Removing application files...
cd /d "%ProgramFiles%"
rmdir /s /q "PAGE AI"

echo.
echo PAGE AI has been successfully removed from your system.
echo.
pause
