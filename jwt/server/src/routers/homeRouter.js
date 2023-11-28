import { Router } from 'express';
import * as HomeController from '../controllers/homeController.js';
import { authenticateAccessToken } from '../middlewares/authenticateRequest.js';

const router = Router();

router.get('/', authenticateAccessToken, HomeController.findUser);

export default router;
