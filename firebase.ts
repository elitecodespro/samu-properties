// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-builder-x-storage.firebaseapp.com",
  projectId: "ai-course-builder-x-storage",
  storageBucket: "ai-course-builder-x-storage.appspot.com",
  messagingSenderId: "669268257465",
  appId: "1:669268257465:web:5a23a9df928d78a1678968",
  measurementId: "G-GFC73L1BD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);