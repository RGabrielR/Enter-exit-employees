import { handleGetEmployeesInside, handleGetAllEmployees } from "../controllers/EmployeeController.ts";
import express from "express";

const router = express.Router();

router.get('/inside', handleGetEmployeesInside);
router.get('/all', handleGetAllEmployees);


export default router;