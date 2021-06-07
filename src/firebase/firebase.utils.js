import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDt75CyGMb2ErWQ8g8s9XtOcrUYk0fnH1o',
	authDomain: 'e-clothing-47fb7.firebaseapp.com',
	projectId: 'e-clothing-47fb7',
	storageBucket: 'e-clothing-47fb7.appspot.com',
	messagingSenderId: '255911555901',
	appId: '1:255911555901:web:b036f2201702715e344b54',
	measurementId: 'G-S7EQ2NGDTZ'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
