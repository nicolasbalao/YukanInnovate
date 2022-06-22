import express from 'express'
import { generateJWT } from '../controllers/login.controller';

const router = express.Router({ mergeParams: true });


router.post("/", generateJWT);


export default router;