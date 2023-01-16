import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyA_Sd_SRUnzmf5zzhHN6KyPM1wLLQ9Bbdw',
	authDomain: 'minest-snap-cam.firebaseapp.com',
	projectId: 'minest-snap-cam',
	storageBucket: 'minest-snap-cam.appspot.com',
	messagingSenderId: '612867914014',
	appId: '1:612867914014:web:f273693aecf6b96915f10f'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
