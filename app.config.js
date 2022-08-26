import 'dotenv/config';

export default {
  expo: {
    name: 'Conexão Arte - SP',
    owner: 'arte-ensaio',
    slug: 'conexao-arte-sp',
    version: '3.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.arteensaio.sp.conexaoarte',
    },
    android: {
      package: 'com.arteensaio.sp.conexaoarte',
      versionCode: 2,
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/images/favicon.png',
    },
    extra: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
    },
    plugins: [
      [
        'expo-image-picker',
        {
          photosPermission: 'custom photos permission',
          cameraPermission: 'Allow $(PRODUCT_NAME) to open the camera',

          '//': 'Disables the microphone permission',
          microphonePermission: false,
        },
      ],
    ],
  },
};
