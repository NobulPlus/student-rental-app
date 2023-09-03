import express from 'express';
import { bookResidence, cancelBooking, createUser, getAllBookings } from '../controller/userController.js';
import jwtCheck from '../config/authConfig.js';
const router = express.Router();

router.post("/register", jwtCheck, createUser)
router.post("/rentResidence/:id", bookResidence)
router.post("/getAllBookings", getAllBookings)
router.post("/removeBooking/:id", jwtCheck, cancelBooking)

export {router as userRoute}