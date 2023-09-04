<<<<<<< HEAD
import express from 'express';
import { bookResidence, cancelBooking, createUser, getAllBookings } from '../controller/userController.js';
import jwtCheck from '../config/authConfig.js';
const router = express.Router();

router.post("/register", jwtCheck, createUser)
router.post("/rentResidence/:id", bookResidence)
router.post("/getAllBookings", getAllBookings)
router.post("/removeBooking/:id", jwtCheck, cancelBooking)

export {router as userRoute}
=======
import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFavorites,
  toFav,
} from "../controllers/userCntrl.js";
import jwtCheck from "../config/auth0Config.js";
const router = express.Router();

router.post("/register", jwtCheck, createUser);
router.post("/bookVisit/:id", jwtCheck, bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", jwtCheck, cancelBooking);
router.post("/toFav/:rid", jwtCheck, toFav);
router.post("/allFav/", jwtCheck, getAllFavorites);
export { router as userRoute };
>>>>>>> acd2b1619f4fe6148513cb100f8928a68281feca
