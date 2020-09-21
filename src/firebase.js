import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW9EFq1xdGZmLhPwY5zpjv2xwo6AOVMQ4",
  authDomain: "test-6f721.firebaseapp.com",
  databaseURL: "https://test-6f721.firebaseio.com",
  projectId: "test-6f721",
  storageBucket: "test-6f721.appspot.com",
  messagingSenderId: "624623610961",
  appId: "1:624623610961:web:a15a61ebbae85f358e1c70",
  measurementId: "G-GEXP8Q41CN",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
