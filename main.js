const { app, BrowserWindow, globalShortcut } = require('electron');
const fs = require('fs');

// Create a window
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load the index.html file
    mainWindow.loadFile('index.html');

    // Register global shortcuts to capture keyboard events
    globalShortcut.register('CommandOrControl+K', () => {
        logKey('CommandOrControl+K');
    });

    globalShortcut.register('CommandOrControl+L', () => {
        logKey('CommandOrControl+L');
    });
});

// Function to log pressed keys to a file
function logKey(key) {
    let logFilePath = './keylog.txt';
    let logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
    logStream.write(key + '\n');
}

// Quit the app when all windows are closed
app.on('window-all-closed', () => {
    app.quit();
});
