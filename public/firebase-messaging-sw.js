importScripts('https://www.gstatic.com/firebasejs/3.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.7.0/firebase-messaging.js');

const config = {
  messagingSenderId: '823384132241'
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  console.log('BACKGROUND MESSAGE', payload);

  const title = payload.title;
  const options = {
    body: payload.body,
    icon: payload.icon
  };

  self.registration.showNotification(title, options);
});
