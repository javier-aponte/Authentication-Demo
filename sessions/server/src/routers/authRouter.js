import { Router } from 'express';
import * as AuthController from '../controllers/authController.js';
import * as ValidateRequest from '../middlewares/validateRequest.js';
import { authenticateSession } from '../middlewares/authenticateSession.js';

const router = Router();

router.post('/login', ValidateRequest.validateLoginRequest, AuthController.login);
router.post('/logout', authenticateSession, AuthController.logout);

export default router;