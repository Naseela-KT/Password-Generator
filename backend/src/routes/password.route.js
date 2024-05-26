import { Router } from 'express';
import { deletePassword, getAllPasswords, savePassword } from '../controllers/password.controller.js';
import { userAuth } from '../middleware/authMiddleware.js';

const router = Router();

router.post("/add",userAuth, savePassword)
router.get("/get",userAuth,getAllPasswords)
router.delete("/delete",userAuth,deletePassword)

export default router;