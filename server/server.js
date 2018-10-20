const express = require('express');
const WebSocket = require('ws');

const spotsArray = [
  {
    id: 1,
    latitude: 51.0478,
    longitude: -114.0593,
    title: 'title',
    description: "description",
    price: 1
  },
  {
    id : 2,
    latitude: 51.0278,
    longitude: -114.0493,
    title: 'title',
    description: "description",
    price: 2
  },
  {
    id: 3,
    latitude: 51.0538,
    longitude: -114.0123,
    "title": 'title',
    "description": "description",
    price: 1.25
  },
  {
    id: 4,
    latitude: 51.0522,
    longitude: -114.0519,
    title: 'title',
    description: "description",
    price: 1.75
  }
];

// Set the port to 3001
const PORT = 8000;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new WebSocket.Server({ server });

// Broadcast to all users function
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

function getSpots() {
  wss.broadcast(JSON.stringify(spotsArray));
}

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  // Get all markers
  getSpots();

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected')
  });
});
