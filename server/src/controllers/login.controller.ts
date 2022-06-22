import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()

export const generateJWT = (req: Request, res: Response) => {

    const username: string = req.body.username;


    if (username) {
        const token = jwt.sign({ username: username }, `${process.env.KEY_JWT}`, { expiresIn: "24h" });
        res.status(200).cookie("token", token).send(token).redirect("/");
    }

}