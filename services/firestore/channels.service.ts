import {firestoreAdmin} from "../../src/config/firebase";
import {DB_NAME} from "../../src/config/firebase.constant";

export const firestoreGetListOfChannels = async () => {
  let channels: any[] = [];
  // refs: https://firebase.google.com/docs/firestore/query-data/get-data
  const querySnapshot = await firestoreAdmin.collection(DB_NAME.CHANNELS).get()
  querySnapshot.forEach((doc: any) => {
    channels.push({
      id: doc.id,
      ...doc.data()
    })
  })
  return channels;
}