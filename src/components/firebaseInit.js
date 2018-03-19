import Firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

const firebaseApp = Firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()