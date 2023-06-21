import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDi-9Q2w_1rONzZrdeUUrcNaYQbeWvKLfU",
  authDomain: "voosh-ae579.firebaseapp.com",
  projectId: "voosh-ae579",
  storageBucket: "voosh-ae579.appspot.com",
  messagingSenderId: "490413375267",
  appId: "1:490413375267:web:05a742f643c1e8749bd696",
  measurementId: "G-GD0LPPHWFB"
};

export default firebaseConfig;

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

export const SignInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};