import { Router } from "express";
import loginController from "../controllers/login.js";
import registerController from "../controllers/register.js";
const router = Router();
router.post('/register', registerController);
router.post('/login', loginController);
export default router;