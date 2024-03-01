import {MongoClient} from 'mongodb'

let client
let clientPromise: Promise<MongoClient>

if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local")
}
const uri = process.env.MONGODB_URI
const options = {
}

client = new MongoClient(uri, options as any)
clientPromise = client.connect()

export default clientPromise
