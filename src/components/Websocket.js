// websocket.js
const socket = new WebSocket('ws://localhost:3000/primus');

socket.addEventListener('open', function (event) {
  console.log('connected');
});

export default socket;