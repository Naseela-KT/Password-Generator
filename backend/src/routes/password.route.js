import { Router } from 'express';
import { deletePassword, getAllPasswords, savePassword } from '../controllers/password.controller.js';
import { userAuth } from '../middlewares/auth.middleware.js';

const router = Router();

router.post("/add", savePassword)
router.get("/getPassword",getAllPasswords)
router.delete("/delete",deletePassword)

export default router;