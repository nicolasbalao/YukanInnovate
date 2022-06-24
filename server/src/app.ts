import express, { Application, Request, Response } from 'express'
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routerProject from './routes/project.route';
import routerLogin from './routes/login.route';
import jwt, { JwtPayload } from 'jsonwebtoken';

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


interface tokenPayload {
    username: string;
    isAdmin: boolean;
    iat: number;
    exp: number;
}

//Interesting
app.post("/api/admin", (req: Request, res: Response) => {
    const token = req.body.token;
    const decodeToken = jwt.verify(token, `${process.env.KEY_JWT}`) as tokenPayload;


    if (decodeToken.isAdmin) {
        return res.status(200).json({ message: "an Admin flag{jwt_1s_so_g00d}" });
    }

    res.status(200).json({ message: "not an Admin" });


})

//SERVER LISTENING
app.listen(process.env.PORT, (): void => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
})
