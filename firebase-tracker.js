//player counter using firebase
const firebaseConfig = {
  apiKey: "AIzaSyDtjmI-aZSz9WeBRVuSNPUEfTMGxPYHIpc",
  authDomain: "eyeq-game.firebaseapp.com",
  databaseURL: "https://eyeq-game-default-rtdb.firebaseio.com",
  projectId: "eyeq-game",
  storageBucket: "eyeq-game.firebasestorage.app",
  messagingSenderId: "40487120518",
  appId: "1:40487120518:web:8e7dc30b2ba2fbe6d86b07",
  measurementId: "G-71F62PG5F7"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function trackPlayer() {
  const playerId = localStorage.getItem('eyeq_player_id');

  if (!playerId) {
    const newId = 'player_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
    localStorage.setItem('eyeq_player_id', newId);

    db.ref('totalPlayers').transaction(count => (count || 0) + 1);

    db.ref('players/' + newId).set({
      firstVisit: new Date().toISOString(),
    });
  }
}