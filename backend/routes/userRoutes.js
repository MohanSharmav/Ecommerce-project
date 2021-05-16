import express from 'express';
// import { get } from 'mongoose';
// import { getProductsById } from '../controllers/productController.js';
const router = express.Router();
import {getUserProfile,registerUser,authUser,updateUserProfile} from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'


router.post('/login',authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/').post(registerUser)

export default router;  