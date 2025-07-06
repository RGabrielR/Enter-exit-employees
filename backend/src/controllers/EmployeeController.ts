import type { Request, Response } from 'express';
import { getEmployeesInside, getAllEmployees } from '../services/EmployeeService.js';

export async function handleGetEmployeesInside(req: Request, res: Response): Promise<void> {
  try {
    const employees = await getEmployeesInside();
    res.status(200).json({ data: employees });
  } catch (error: any) {
    res.status(500).json({ error: error.message ?? 'Error en obtener empleados dentro.' });
  }
}

export async function handleGetAllEmployees(req: Request, res: Response): Promise<void> {
  try {
    const employees = await getAllEmployees();
    res.status(200).json({ data: employees });
  } catch (error: any) {
    res.status(500).json({ error: error.message ?? 'Error en obtener todos los empleados.' });
  }
}