import { Router } from 'express';
import * as AuthController from '../controllers/authController.js';
import * as ValidateRequest from '../middlewares/validateRequest.js';
import { authenticateAccessToken } from '../middlewares/authenticateRequest.js';

const router = Router();

router.post('/login', ValidateRequest.validateLoginRequest, AuthController.login);
router.post('/logout', authenticateAccessToken, AuthController.logout);
router.post('/check-session', authenticateAccessToken, AuthController.checkSession)

export default router;
