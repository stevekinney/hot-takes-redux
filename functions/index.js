const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.shushYellers = functions.database.ref('/messages/{message}/content').onWrite(event => {
  const data = event.data;
  const content = data.val();
  if (content && content === content.toUpperCase()) {
    data.ref.set(content.toLowerCase());
  }
});
