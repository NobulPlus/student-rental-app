import express from 'express';
import { createResidency, getAllResidencies, getResidency } from '../controller/residencyController.js';
import { checkUserRole } from '../middleware/rbac.js';
import jwtCheck from '../config/authConfig.js';
const router = express.Router();

router.post("/create-residency", jwtCheck, createResidency)
router.get("/all-residence", getAllResidencies)
router.get("/:id", getResidency)

export {router as residencyRoute}  