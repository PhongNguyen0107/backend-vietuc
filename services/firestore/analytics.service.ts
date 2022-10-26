import {firestoreGetListOfUsers} from "services/firestore/users.service";
import {firestoreGetListOfChannels} from "services/firestore/channels.service";
import {firestoreGetListOfRoles} from "services/firestore/roles.service";
import {firestoreAdmin} from "../../src/config/firebase";
import {DB_NAME} from "../../src/config/firebase.constant";

export const firestoreGetDataAnalytics = async () => {
  let users = await firestoreGetListOfUsers();
  let channels = await firestoreGetListOfChannels();
  let roles = await firestoreGetListOfRoles();
  let messages = await firestoreGetMessageMetric(channels);

  let resp: any = {
    users: users.length || 0,
    channels: channels.length || 0,
    roles: roles.length || 0,
    totalMessage: messages
  }

  return resp;
}


const firestoreGetMessageMetric = async (channels: any[]) => {
  let total = 0;
  for await (let c of channels) {
    const subMessageCollection = await firestoreAdmin.collection(DB_NAME.CHANNELS)
      .doc(c.id)
      .collection(DB_NAME.MESSAGES)
      .get();

    total = total + subMessageCollection.size;

    // subMessageCollection.forEach(m => {
    //
    // })
  }

  return total
}