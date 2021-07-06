import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCOubHM5bpAxUZ4cuYkY0gWPCrTSPwIZaY',
  databaseURL:
    'https://chatfirebaseapp-b77fd-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'chatfirebaseapp-b77fd',
  appId: '1:862938422123:android:7882cb0460ae977a74ca2e',
};

export default Firebase.initializeApp(firebaseConfig);
// AIzaSyCOubHM5bpAxUZ4cuYkY0gWPCrTSPwIZaY - android
// AIzaSyCu9JMynRcUs0sv6JuIDlhlgbq6Z_uPUZw - iOS
