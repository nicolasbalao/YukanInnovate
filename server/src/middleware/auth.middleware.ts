import express, { Request, Response } from 'express';


//check if the user have a JWT token for going to project page
export const validAuth = (req: Request, res: Response) => {

    if (!req.cookies) {
        res.status(401).send("need to login first");
    }
    res.status(200).redirect("/");
}