/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_ORIGIN: string;
  readonly VITE_API_ORIGIN: string;
  readonly VITE_APP_EMAIL: string;
  readonly VITE_FIREBASE_APIKEY: string;
  readonly VITE_FIREBASE_AUTHDOMAIN: string;
  readonly VITE_FIREBASE_PROJECTID: string;
  readonly VITE_FIREBASE_STORAGEBUCKET: string;
  readonly VITE_FIREBASE_MESSAGINGSENDERID: string;
  readonly VITE_FIREBASE_APPID: string;
  readonly VITE_FIREBASE_MEASUREMENTID: string;
  readonly VITE_LINKS_API_KEY: string;
  readonly VITE_LINKS_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
