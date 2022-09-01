export default {
  expo: {
    name: 'Conexão Arte - SP',
    owner: 'arte-ensaio',
    slug: 'conexao-arte-sp',
    version: '5.0.0',
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
      versionCode: 19,
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/images/favicon.png',
    },
    extra: {
      eas: {
        projectId: '791687e1-d48f-409d-9c65-1fb5aa2452dc',
      },
    },
    plugins: [
      [
        'expo-image-picker',
        {
          photosPermission: 'custom photos permission',
          cameraPermission: 'Allow $(PRODUCT_NAME) to open the camera',
          microphonePermission: false,
        },
      ],
    ],
  },
};
