import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// our custom config
import { firebaseConfig } from './firebase';

const provider = new GoogleAuthProvider();
initializeApp(firebaseConfig);
export const auth = getAuth();

export const signinWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const creds = GoogleAuthProvider.credentialFromResult(result);
    const token = creds.accessToken;
  } catch (error) {
    console.log('Unable to login...', error);
  }
};
