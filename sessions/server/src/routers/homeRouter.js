import { Router } from 'express';
import * as HomeController from '../controllers/homeController.js';
import { authenticateSession } from '../middlewares/authenticateSession.js';

const router = Router();

router.post('/', authenticateSession, HomeController.findUser);

export default router;