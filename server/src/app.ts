import express, { Application } from 'express'
import cors from 'cors';
import mongoose, { } from 'mongoose';
import dotenv from 'dotenv';
import routerProject from './routes/project.route';
import routerLogin from './routes/login.route';

//setup Dotenv
dotenv.config();


const app: Application = express();

// Accept post 
app.use(express.json());

//CORS
app.use(cors({ origin: "http://localhost:4200" }));

//MoogoDB connect

mongoose.connect(process.env.MONGO_URI!)
    .then((res) => {
        console.log(
            'Connected to MongoDB - Initial Connection'
        );
    })
    .catch((err) => {
        console.log(
            `Initial  API Database connection error occured -`,
            err
        );
    });

//Routes
app.use("/api/project", routerProject);
app.use("/api/login", routerLogin)

//SERVER LISTENNING
app.listen(process.env.PORT, (): void => {
    console.log(`Server listenning on http://localhost:${process.env.PORT}`);
})
