import type { ExpoConfig } from "expo/config";

// Expo CLI が .env を自動読み込みし、この設定評価時に process.env へ反映する
// (ビルド前提: GOOGLE_MAPS_API_KEY_ANDROID / GOOGLE_MAPS_API_KEY_IOS。詳細は .env.example)
const config: ExpoConfig = {
  name: "Memorixia",
  slug: "memorixia",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "memorixia",
  userInterfaceStyle: "automatic",
  ios: {
    bundleIdentifier: "com.monigairu.memorixia",
    icon: "./assets/expo.icon",
    config: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY_IOS,
    },
  },
  android: {
    package: "com.monigairu.memorixia",
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./assets/images/android-icon-foreground.png",
      backgroundImage: "./assets/images/android-icon-background.png",
      monochromeImage: "./assets/images/android-icon-monochrome.png",
    },
    predictiveBackGestureEnabled: false,
    config: {
      googleMaps: {
        apiKey: process.env.GOOGLE_MAPS_API_KEY_ANDROID,
      },
    },
  },
  web: {
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        backgroundColor: "#208AEF",
        image: "./assets/images/splash-icon.png",
        imageWidth: 76,
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: {
    eas: {
      projectId: "f5374865-4da0-4e23-af67-9404b86c95c5",
    },
  },
};

export default config;
