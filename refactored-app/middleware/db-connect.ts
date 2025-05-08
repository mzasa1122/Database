// middleware/db-connect.ts
import WeatherModel from "../mongoose/weather/model";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let cached = { conn: null as typeof mongoose | null, promise: null as Promise<typeof mongoose> | null };

export default async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    cached.promise = mongoose.connect(uri);
  }

  const conn = await cached.promise!;
  cached.conn = conn;
// one-time seed: only runs on first connect
await WeatherModel.create([
  { zip:"96814", weather:"rainy", tempC:"20C", tempF:"68F", friends:["96815","96826"] },
  { zip:"96815", weather:"sunny", tempC:"25C", tempF:"70F", friends:["96814","96826"] },
  { zip:"96826", weather:"sunny", tempC:"30C", tempF:"86F", friends:["96814","96815"] },
]);
  return conn;
}