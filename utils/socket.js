import {io} from 'socket.io-client'

const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:5000';

export const socket = io(URL);

export function sendMessage (username, message){
    socket.emit("message", {"username": username, "message": message})
}