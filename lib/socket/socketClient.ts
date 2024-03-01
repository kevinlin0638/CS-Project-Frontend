import {io, Socket} from 'socket.io-client'

const socketClient: Socket = io()
export default socketClient