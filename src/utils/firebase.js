import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const initializeFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDi-9Q2w_1rONzZrdeUUrcNaYQbeWvKLfU",
    authDomain: "voosh-ae579.firebaseapp.com",
    projectId: "voosh-ae579",
    storageBucket: "voosh-ae579.appspot.com",
    messagingSenderId: "490413375267",
    appId: "1:490413375267:web:05a742f643c1e8749bd696",
    measurementId: "G-GD0LPPHWFB"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return { app, analytics };
};
