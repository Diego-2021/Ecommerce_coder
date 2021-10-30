import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0XCuOxO24s_zqIS6CojBxMwnuc6F6d1c",
  authDomain: "ecomercecoder.firebaseapp.com",
  projectId: "ecomercecoder",
  storageBucket: "ecomercecoder.appspot.com",
  messagingSenderId: "233339311871",
  appId: "1:233339311871:web:1ca48385452a9837e9deca"
};

const app = firebase.initializeApp(firebaseConfig)


export const getFirestore = () => {
    return firebase.firestore(app)
}

export const db = getFirestore()

