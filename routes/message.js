import { Router } from "express";
import authMiddleWare from "../middleware/auth.js";
import createMsgController from "../controllers/createMsg.js";
import getMsgController from "../controllers/getMsg.js";
import likeController from "../controllers/like.js";
import getMsgByIdController from "../controllers/getMsgById.js";
const router = Router();
// create msg
router.post('/',authMiddleWare, createMsgController);
// like and dislike msg
router.post('/like/:id',authMiddleWare,likeController)
// get msg
router.get('/', getMsgController);
// get msg by messageId
router.get('/:id',getMsgByIdController);
export default router;