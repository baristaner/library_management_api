import express from 'express';
import * as authController from '../controllers/auth.controller';
import { requireAuth } from '../middleware/authMiddleware';

const authRouter = express.Router();



authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/createUser', authController.createAdmin);
authRouter.get('/protected',requireAuth,authController.protectedRoute);

export default authRouter;
