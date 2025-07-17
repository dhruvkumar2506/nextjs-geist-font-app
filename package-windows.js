const fs = require('fs');
const path = require('path');

// Windows 11 Application Package Creator for PAGE AI
console.log('🚀 Creating PAGE AI Windows 11 Application Package...\n');

const packageInfo = {
  name: "PAGE - Personal AI Guidance Engine",
  version: "1.0.0",
  description: "Advanced AI Assistant with Full Computer Control and Google Search",
  author: "PAGE AI Systems",
  platform: "Windows 11",
  architecture: "x64",
  features: [
    "Real-time Google Search Integration",
    "Complete Windows 11 System Control",
    "Voice Command Processing",
    "Camera and Microphone Access",
    "File System Management",
    "Process and Application Control",
    "Network Diagnostics and Control",
    "Hardware Monitoring",
    "Code Generation and Development",
    "Document Analysis and Processing"
  ],
  requirements: {
    os: "Windows 11 (Build 22000 or later)",
    memory: "8 GB RAM minimum, 16 GB recommended",
    storage: "2 GB available space",
    network: "Internet connection for full functionality",
    permissions: "Administrator privileges for system control"
  }
};

// Create Windows installer script
const installerScript = `@echo off
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
if not exist "%ProgramFiles%\\PAGE AI" mkdir "%ProgramFiles%\\PAGE AI"

REM Copy application files
echo Copying application files...
xcopy /E /I /Y "." "%ProgramFiles%\\PAGE AI\\"

REM Create desktop shortcut
echo Creating desktop shortcut...
powershell -Command "\\$WshShell = New-Object -comObject WScript.Shell; \\$Shortcut = \\$WshShell.CreateShortcut('\\$env:USERPROFILE\\Desktop\\PAGE AI.lnk'); \\$Shortcut.TargetPath = '%ProgramFiles%\\PAGE AI\\start-page.bat'; \\$Shortcut.IconLocation = '%ProgramFiles%\\PAGE AI\\icon.ico'; \\$Shortcut.Description = 'PAGE - Personal AI Guidance Engine'; \\$Shortcut.Save()"

REM Create start menu entry
echo Creating start menu entry...
if not exist "%ProgramData%\\Microsoft\\Windows\\Start Menu\\Programs\\PAGE AI" mkdir "%ProgramData%\\Microsoft\\Windows\\Start Menu\\Programs\\PAGE AI"
powershell -Command "\\$WshShell = New-Object -comObject WScript.Shell; \\$Shortcut = \\$WshShell.CreateShortcut('%ProgramData%\\Microsoft\\Windows\\Start Menu\\Programs\\PAGE AI\\PAGE AI.lnk'); \\$Shortcut.TargetPath = '%ProgramFiles%\\PAGE AI\\start-page.bat'; \\$Shortcut.IconLocation = '%ProgramFiles%\\PAGE AI\\icon.ico'; \\$Shortcut.Description = 'PAGE - Personal AI Guidance Engine'; \\$Shortcut.Save()"

REM Register with Windows
echo Registering with Windows...
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\PAGE AI" /v "DisplayName" /t REG_SZ /d "PAGE - Personal AI Guidance Engine" /f
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\PAGE AI" /v "DisplayVersion" /t REG_SZ /d "1.0.0" /f
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\PAGE AI" /v "Publisher" /t REG_SZ /d "PAGE AI Systems" /f
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\PAGE AI" /v "InstallLocation" /t REG_SZ /d "%ProgramFiles%\\PAGE AI" /f
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\PAGE AI" /v "UninstallString" /t REG_SZ /d "%ProgramFiles%\\PAGE AI\\uninstall.bat" /f

REM Set up Windows services integration
echo Setting up Windows integration...
schtasks /create /tn "PAGE AI Startup" /tr "%ProgramFiles%\\PAGE AI\\start-page.bat" /sc onlogon /ru "%USERNAME%" /f

echo.
echo ================================================
echo PAGE AI Installation Complete!
echo ================================================
echo.
echo The application has been installed to:
echo %ProgramFiles%\\PAGE AI
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
`;

// Create application starter script
const starterScript = `@echo off
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
`;

// Create uninstaller script
const uninstallerScript = `@echo off
echo ================================================
echo PAGE AI Uninstaller
echo ================================================
echo.

echo Removing PAGE AI from your system...
echo.

REM Remove scheduled task
schtasks /delete /tn "PAGE AI Startup" /f >nul 2>&1

REM Remove registry entries
reg delete "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\PAGE AI" /f >nul 2>&1

REM Remove shortcuts
del "%USERPROFILE%\\Desktop\\PAGE AI.lnk" >nul 2>&1
rmdir /s /q "%ProgramData%\\Microsoft\\Windows\\Start Menu\\Programs\\PAGE AI" >nul 2>&1

REM Remove application files
echo Removing application files...
cd /d "%ProgramFiles%"
rmdir /s /q "PAGE AI"

echo.
echo PAGE AI has been successfully removed from your system.
echo.
pause
`;

// Create application manifest
const appManifest = {
  name: packageInfo.name,
  version: packageInfo.version,
  description: packageInfo.description,
  main: "start-page.bat",
  scripts: {
    start: "npm run dev",
    install: "npm install",
    build: "npm run build"
  },
  windows: {
    icon: "icon.ico",
    requestedExecutionLevel: "requireAdministrator",
    compatibility: ["Windows 11"],
    features: packageInfo.features
  },
  permissions: [
    "internetClient",
    "documentsLibrary",
    "picturesLibrary",
    "videosLibrary",
    "musicLibrary",
    "webcam",
    "microphone",
    "allJoyn",
    "privateNetworkClientServer"
  ]
};

// Write all files
try {
  console.log('📝 Creating installer script...');
  fs.writeFileSync('install-page-ai.bat', installerScript);
  
  console.log('📝 Creating application starter...');
  fs.writeFileSync('start-page.bat', starterScript);
  
  console.log('📝 Creating uninstaller...');
  fs.writeFileSync('uninstall.bat', uninstallerScript);
  
  console.log('📝 Creating application manifest...');
  fs.writeFileSync('app-manifest.json', JSON.stringify(appManifest, null, 2));
  
  console.log('📝 Creating package information...');
  fs.writeFileSync('package-info.json', JSON.stringify(packageInfo, null, 2));

  // Create README for Windows installation
  const windowsReadme = `# PAGE AI - Windows 11 Installation Guide

## 🚀 Quick Installation

1. **Download** all files to a folder on your computer
2. **Right-click** on \`install-page-ai.bat\`
3. **Select** "Run as administrator"
4. **Follow** the installation prompts
5. **Launch** PAGE AI from Desktop or Start Menu

## 📋 System Requirements

- **Operating System:** Windows 11 (Build 22000 or later)
- **Memory:** 8 GB RAM minimum, 16 GB recommended
- **Storage:** 2 GB available space
- **Network:** Internet connection for full functionality
- **Permissions:** Administrator privileges for system control

## 🌟 Features

### 🌐 Internet & Search
- Real-time Google search integration
- Access to live web data and current information
- News, weather, research, and fact-checking
- Image search and reverse image lookup

### 💻 Complete Computer Control
- Full Windows 11 system administration
- File management and organization
- Application control and monitoring
- Hardware diagnostics and optimization

### 🎤 Voice & Media
- Natural voice command processing
- Text-to-speech with female voice
- Camera and microphone integration
- Real-time visual analysis

### 🔧 Advanced Features
- Code generation in 50+ languages
- Document analysis and processing
- Creative writing and content creation
- Task automation and scheduling

## 🔧 Configuration

### For Full Internet Access:
1. Create a file named \`.env.local\` in the installation folder
2. Add your OpenRouter API key: \`OPENROUTER_API_KEY=your_key_here\`
3. Restart the application

### Camera and Microphone:
- Grant permissions when prompted by your browser
- Ensure Windows privacy settings allow camera/microphone access

## 🚀 Usage

1. **Start the application** from Desktop shortcut or Start Menu
2. **Open your browser** and go to http://localhost:8000
3. **Click "Initialize PAGE"** to begin
4. **Enable camera and microphone** for full functionality
5. **Start asking questions** or giving voice commands

## 🛠️ Troubleshooting

### Application won't start:
- Ensure you have administrator privileges
- Check Windows Defender isn't blocking the application
- Verify internet connection is available

### Voice commands not working:
- Check microphone permissions in Windows Settings
- Ensure browser has microphone access
- Try refreshing the page

### System commands not executing:
- Run the application as administrator
- Check Windows UAC settings
- Verify antivirus isn't blocking system access

## 🔄 Updates

PAGE AI will automatically check for updates when connected to the internet. You can also manually update by:
1. Downloading the latest version
2. Running the installer again
3. Your settings and data will be preserved

## 🗑️ Uninstallation

To remove PAGE AI:
1. Go to the installation folder (usually C:\\Program Files\\PAGE AI)
2. Run \`uninstall.bat\` as administrator
3. Follow the prompts to complete removal

## 📞 Support

For support and updates, visit the PAGE AI documentation or contact support through the application interface.

---

**PAGE AI - Your Advanced Personal AI Assistant for Windows 11**
*Bringing the future of AI assistance to your desktop*
`;

  fs.writeFileSync('README-Windows.md', windowsReadme);

  console.log('\n✅ Windows 11 Application Package Created Successfully!\n');
  console.log('📦 Files created:');
  console.log('   • install-page-ai.bat - Main installer');
  console.log('   • start-page.bat - Application launcher');
  console.log('   • uninstall.bat - Uninstaller');
  console.log('   • app-manifest.json - Application manifest');
  console.log('   • package-info.json - Package information');
  console.log('   • README-Windows.md - Installation guide');
  console.log('\n🚀 To install PAGE AI on Windows 11:');
  console.log('   1. Right-click "install-page-ai.bat"');
  console.log('   2. Select "Run as administrator"');
  console.log('   3. Follow the installation prompts');
  console.log('   4. Launch from Desktop or Start Menu');
  console.log('\n🌟 PAGE AI will be available at http://localhost:8000');

} catch (error) {
  console.error('❌ Error creating Windows package:', error);
}
