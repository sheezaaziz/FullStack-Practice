const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
const cors = require("cors")({ origin: true });

// auth trigger (new user signup)
exports.newUserSignUp = functions.auth.user().onCreate((user) => {
  // for background triggers we must return a value/promise
  return admin.firestore().collection("users").doc(user.uid).set({
    username: "",
    colour: "",
    imgURL: "",
  });
});

// http callable fcn
exports.addUsername = functions.https.onCall(async (data, context) => {
  // get refs for user doc
  const user = admin.firestore().collection("users").doc(context.auth.uid);
  // update username
  return user.update({
    username: data.username,
  });
});

// auth trigger (user deleted)
exports.userDeleted = functions.auth.user().onDelete((user) => {
  // for background triggers we must return a value/promise
  const doc = admin.firestore().collection("users").doc(user.uid);
  return doc.delete();
});

// http callable fcn
// exports.updateUserColour = functions.https.onCall(async (data, context) => {
//   // get refs for user doc
//   const user = admin.firestore().collection("users").doc(context.auth.uid);
//   // update colour
//   return user.update({
//     colour: data.newColour,
//   });
// });

// http request fcn
exports.updateUserColour = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    // get refs for new colour & user id
    const { newColour, id } = req.body;
    // update colour
    return db.collection('users').doc(id).update({
      colour: newColour
    });
  });
});

// exports.testing = functions.https.onRequest((req, res) => {
//   return cors(req, res, () => {
//     console.log('made it!');
//     // console.log('req.data: ', req.data);
//     console.log('req.body.data: ', req.body.data);
//     // console.log('req.body.fruit: ', req.body.fruit);
//     res.send('hello there!');
//   });
// });

// http request fcn
exports.getUserColours = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    db.collection('users').onSnapshot((snapshot) => {
      let selectedColours = [];
      snapshot.forEach(doc => {
        let selectedColour = doc.data().colour;
        selectedColours.push(selectedColour);
      })
      return res.send(selectedColours);
    });
  });
});
