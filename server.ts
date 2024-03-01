import {createServer} from 'http'
import next from 'next'
import {Server} from 'socket.io'
import cors from 'cors'
import express from 'express'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
app.prepare().then(() => {
    const app = express()
    app.use(cors())

    app.all('*', (req, res) => {
        return handle(req, res);
    });
    const server = createServer(app)

    const io = new Server( {
        maxHttpBufferSize: 1e6 * 40,
        cors: {
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
            credentials: true,
        }
    })
    io.attach(server)
    // io.use(async (socket, next) => {
    //     const req = socket.request
    //     const user: any = await getUserFromReq(req)
    //
    //     if( !user && (
    //         !socket.handshake.auth.licenseKey ||
    //         socket.handshake.auth.licenseKey !== process.env.APP_VERSION)) {
    //         next(new Error("Unauthenticated!"))
    //     } else {
    //         next();
    //     }
    // });

    io.on('connection',  async socket => {
        console.log('a user connected')
        socket.on('hello', (data) => {
            socket.emit('hello', 'world')
        })
    })

    // dbConnect().then(() => {
    //     console.log('> DB connected')
    // })

    server.listen(port)

    console.log(
        `> Server listening at http://localhost:${port} as ${
            dev ? 'development' : process.env.NODE_ENV
        }`
    )
})