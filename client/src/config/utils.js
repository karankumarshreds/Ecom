import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  getDoc,
  setDoc,
  doc,
  collection,
  query,
  where,
  getFirestore,
  documentId,
} from 'firebase/firestore';
// our custom config
import { firebaseConfig } from './firebase';

const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const signinWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const creds = GoogleAuthProvider.credentialFromResult(result);
    // const token = creds.accessToken;
  } catch (error) {
    console.log('Unable to login...', error);
  }
};

/**
 *
 * @param {{}} userData
 * @returns boolean
 */
export const handleUserProfile = async (userData) => {
  let handled = false;
  const db = getFirestore(app);
  try {
    if (!userData) return;
    const usersRef = doc(db, `users/${userData.uid}`);
    const snap = await getDoc(usersRef);
    if (!snap.exists) {
      console.log('Creating new user');
      await setDoc(usersRef, {
        username: userData.displayName,
        email: userData.email,
        uid: userData.uid,
      });
      handled = true;
    } else handled = true;
  } catch (error) {
    console.log(error);
    handled = false;
  }
  return handled;
};
