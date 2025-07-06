import { getEmployeesInside, getAllEmployees } from '../services/EmployeeService';
export async function handleGetEmployeesInside(req, res) {
    try {
        const employees = await getEmployeesInside();
        res.status(200).json({ data: employees });
    }
    catch (error) {
        res.status(500).json({ error: error.message ?? 'Error en obtener empleados dentro.' });
    }
}
export async function handleGetAllEmployees(req, res) {
    try {
        const employees = await getAllEmployees();
        res.status(200).json({ data: employees });
    }
    catch (error) {
        res.status(500).json({ error: error.message ?? 'Error en obtener todos los empleados.' });
    }
}
