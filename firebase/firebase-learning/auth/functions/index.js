const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
  // check request is made by an admin
  if (context.auth.token.admin != true) {
    return { error: 'only admins can add other admins lol' };
  }

  // get user and add custom claim (admin)
  return admin.auth().getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `success! ${data.email} has been successfully added as admin`,
      }
    })
    .catch((err) => {
      return err;
    })
})
