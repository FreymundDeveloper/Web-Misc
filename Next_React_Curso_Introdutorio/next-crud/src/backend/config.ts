import firebase from 'firebase';
import 'firebase/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_API_FIREBASE_KEY,
        authDomain: process.env.NEXT_PUBLIC_AUTH_FIREBASE_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_PROJECT_FIREBASE_ID
    })
}

export default firebase