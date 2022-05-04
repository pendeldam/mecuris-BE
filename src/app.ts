import express from 'express';
import fs from 'fs';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Model } from './model/model.schema';

class App {
    private app: express.Application;

    constructor() {
        this.app = express();
        dotenv.config();
        this.initializeMiddlewares();
        this.connectDB();
        this.seedDB();
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

    private async seedDB() {
        const models = JSON.parse(fs.readFileSync(`${__dirname}/utils/seeder.json`, 'utf-8'));
        await Model.create(models);
    }
}

const app = new App();
app.listen();
