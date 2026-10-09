// FastSatta.live Official Firebase Configuration & Realtime Sync Engine

const firebaseConfig = {
  apiKey: "AIzaSyBK5Toa7whB9P9leaxDrXTHuhCEm5KdvtM",
  authDomain: "fastsatta-live.firebaseapp.com",
  databaseURL: "https://fastsatta-live-default-rtdb.firebaseio.com",
  projectId: "fastsatta-live",
  storageBucket: "fastsatta-live.firebasestorage.app",
  messagingSenderId: "914026110185",
  appId: "1:914026110185:web:2b682428ecc13baf2ce478",
  measurementId: "G-LF3G115RLP"
};

// Initialize Firebase App
if (typeof firebase !== 'undefined') {
  if (!firebase.apps || !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  if (firebase.analytics) {
    try { firebase.analytics(); } catch(e) {}
  }
  console.log("🔥 Firebase initialized for fastsatta-live!");
}
