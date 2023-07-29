import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyC0WJ26ArCQcIWG3OeK_4wSHWtGubvRf2w',
  authDomain: 'lot-to-do-272b1.firebaseapp.com',
  projectId: 'lot-to-do-272b1',
  storageBucket: 'lot-to-do-272b1.appspot.com',
  messagingSenderId: '226413003015',
  appId: '1:226413003015:web:47588dd036290443c5c5a2'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const storage = getStorage(app)
const db = getFirestore(app)

export { app, auth, db, storage }
