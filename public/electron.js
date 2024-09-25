const { app, BrowserWindow, dialog } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Optional
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL || `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Trigger auto-updater check after window is created
  autoUpdater.checkForUpdatesAndNotify();
}

// Handle auto-update events
autoUpdater.on('checking-for-update', () => {
  console.log('Checking for updates...');
});

autoUpdater.on('update-available', () => {
  console.log('Update available, downloading...');
  dialog.showMessageBox({
    type: 'info',
    title: 'Update Available',
    message: 'A new version is available. The update is being downloaded.'
  });
});

autoUpdater.on('update-not-available', () => {
  console.log('No updates available.');
  dialog.showMessageBox({
    type: 'info',
    title: 'No Updates',
    message: 'No new updates are available.'
  });
});

autoUpdater.on('error', (err) => {
  console.error('Error during update:', err);
  dialog.showErrorBox('Error', 'Error during update: ' + err);
});

autoUpdater.on('download-progress', (progress) => {
  console.log(`Download speed: ${progress.bytesPerSecond} - Downloaded ${progress.percent}%`);
});

autoUpdater.on('update-downloaded', () => {
  console.log('Update downloaded, installing...');
  dialog.showMessageBox({
    type: 'info',
    title: 'Update Ready',
    message: 'Updates downloaded. The application will now restart to install the update.'
  }).then(() => {
    autoUpdater.quitAndInstall();
  });
});

// App lifecycle events
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
