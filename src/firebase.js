import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB2aVfBJaX2SW_eBcwnbydIaMA3s5ktmKc",
  authDomain: "twitter-clone-ed54b.firebaseapp.com",
  projectId: "twitter-clone-ed54b",
  storageBucket: "twitter-clone-ed54b.appspot.com",
  messagingSenderId: "675305079303",
  appId: "1:675305079303:web:cca07fec47fa12ca5960a2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

const storage =firebase.storage();

export default db;
export {auth,provider, storage}