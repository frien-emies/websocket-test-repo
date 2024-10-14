import { io } from 'socket.io-client';

// const URL = process.env.NODE_ENV === 'production'
//   ? 'https://your-production-server.com'  // Replace this with your actual production server URL
//   : 'http://localhost:5000';  // Local server URL for development
 export const socket = io.connect('http://localhost:5001');
//   transports: ['websocket'],  // Ensure WebSocket is used
//   withCredentials: false,      
// });



socket.on('connect', () => {
  console.log('Connected to WebSocket server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from WebSocket server');
});