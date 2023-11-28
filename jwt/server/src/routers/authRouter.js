import { Router } from 'express';
import * as AuthController from '../controllers/authController.js';
import * as ValidateRequest from '../middlewares/validateRequest.js';
const router = Router();

router.post('/login', ValidateRequest.validateLoginRequest, AuthController.login);

export default router;
