
import express, { Express } from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { userRouter } from './routes/user';
import { contentRouter } from './routes/content';

dotenv.config();

const port = process.env.PORT || 8000;
const mongoDB_uri:string = process.env.MONGODB_URI || ''
async function connectDB(): Promise<void>{

    try {
        await mongoose.connect(mongoDB_uri);
        console.log("Mongoose Connected")
    } catch (error) {
        console.error("Error connecting to the DB",error);
    }

}

const app: Express = express();
app.use(express.json());




app.use("/api/v1/user", userRouter)
app.use("/api/v1/content", contentRouter)

function main(): void{
    connectDB();
    app.listen(port)
    console.log(`listening on  http://localhost:${port}`);
}

main();