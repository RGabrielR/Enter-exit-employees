import { handleGetEmployeesInside, handleGetAllEmployees } from "../controllers/EmployeeController.js";
import express from "express";
const router = express.Router();
router.get('/inside', handleGetEmployeesInside);
router.get('/all', handleGetAllEmployees);
export default router;
