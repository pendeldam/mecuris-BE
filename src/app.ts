import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

class App {
    private app: express.Application;

    constructor() {
        this.app = express();
        dotenv.config();
        this.initializeMiddlewares();
        this.connectDB();
    }

    public listen(): void {
        this.app.listen(process.env.NODE_LOCAL_PORT, () => {
            console.log(`App listening on the port ${process.env.NODE_LOCAL_PORT}`);
        });
    }

    private initializeMiddlewares(): void {
        this.app.disable('x-powered-by');
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }


    private connectDB() {
        mongoose
            .connect(`${process.env.MONGODB_CONNECT_URI}`)
            .then(() => console.log('MongoDB Connected'))
            .catch((error) => console.log(error));
    }
}

const app = new App();
app.listen();
