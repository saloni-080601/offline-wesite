const { app, BrowserWindow, dialog, net } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Ensure context isolation is disabled for using Node APIs in React
    },
  });

  // Load React build index.html
  mainWindow.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Open DevTools for debugging
  mainWindow.webContents.openDevTools();

  // Check for updates after window is created, but only if there is an internet connection
  checkForUpdates();
}

// Function to check for internet connection
function checkForUpdates() {
  const online = net.isOnline(); // Check if internet connection is available

  if (online) {
    console.log('Internet connection available, checking for updates...');
    autoUpdater.checkForUpdatesAndNotify();
  } else {
    console.log('No internet connection, skipping update check.');
    dialog.showMessageBox({
      type: 'info',
      title: 'Offline Mode',
      message: 'You are offline. The application cannot check for updates.',
    });
  }
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
    message: 'A new version is available. The update is being downloaded.',
  });
});

autoUpdater.on('update-not-available', () => {
  console.log('No updates available.');
  dialog.showMessageBox({
    type: 'info',
    title: 'No Updates',
    message: 'No new updates are available.',
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
    message: 'Updates downloaded. The application will now restart to install the update.',
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
