import * as FirebaseAdmin from "firebase-admin";

const credentialAuth = require("./slack-ffd4f-firebase-adminsdk-o4zq7-2f94168295.json");

try {
  FirebaseAdmin.initializeApp({
    credential: FirebaseAdmin.credential.cert(credentialAuth)
  });
  console.log("Firebase admin initialized")
} catch (err: any){
  console.error("Firebase admin initialization error: ")
}

const firestoreAdmin = FirebaseAdmin.firestore();

export {FirebaseAdmin, firestoreAdmin}