import { Router } from "express";
import authRouter from './auth.js'
import messageRouter from './message.js'
const router = Router();
router.use('/auth',authRouter);
router.use('/message',messageRouter)
export default router;