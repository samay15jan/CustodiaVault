import { auth } from './firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, TotpMultiFactorGenerator } from "firebase/auth";

// Register
const firebaseRegister = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    localStorage.setItem('email', user.email)
    localStorage.setItem('userId', user.uid)
    return 
  } catch (error) {
    throw error.message
  }
}

// Login
const firebaseLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    localStorage.setItem('email', user.email)
    localStorage.setItem('userId', user.uid)
    return
  } 
  catch (error) {
    throw error.message
  }
}

const logout = async () => {
  try {
    const Logout = await signOut(auth)
    console.log('signed out')
    return
  } 
  catch (error) {
    throw error
  }
}

export {firebaseLogin, firebaseRegister, logout}