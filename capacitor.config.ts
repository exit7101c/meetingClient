import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cmdg.navy.client',
  appName: 'App',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    "Keyboard": {
      "resize": "ionic",
      "style": "DARK",
      "resizeOnFullScreen": true
    },
    "PushNotifications": {
      "presentationOptions": ["badge", "sound"]
    },
    CapacitorSQLite: {
      "iosDatabaseLocation": "Library/CapacitorDatabase"
    }
  },
};

export default config;
