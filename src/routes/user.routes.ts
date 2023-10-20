import express from 'express';
import * as userController from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:userId', userController.getUserByID);
userRouter.put('/giveadmin',userController.giveUserAdmin);

export default userRouter;
