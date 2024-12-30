import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyCn3_4pSh8Jkkq7s8FlygRAJQ0t3I4HbME',
  authDomain: 'custodiavault.firebaseapp.com',
  projectId: 'custodiavault',
  storageBucket: 'custodiavault.appspot.com',
  messagingSenderId: '55253419836',
  appId: '1:55253419836:web:319d38747e65f628670039',
  measurementId: 'G-ZT3MMGLNL2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
auth.useDeviceLanguage();
const database = getDatabase(app)

export { auth, database }
