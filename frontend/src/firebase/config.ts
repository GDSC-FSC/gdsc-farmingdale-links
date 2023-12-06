import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY as string,
  authDomain: import.meta.env.VITE_AUTHDOMAIN as string,
  projectId: import.meta.env.VITE_PROJECTID as string,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET as string,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID as string,
  appId: import.meta.env.VITE_APPID as string,
  measurementId: import.meta.env.VITE_MEASUREMENTID as string
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);