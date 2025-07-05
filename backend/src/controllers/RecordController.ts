import type { Request, Response } from 'express';
import { registerEntry, registerExit } from '../services/RecordService.ts';

export async function handleRegisterEntry(req: Request, res: Response): Promise<void> {
  try {
    const { employeeId, selectedTimestamp } = req.body;
    if (!employeeId) {
      res.status(400).json({ error: 'el id del empleado es requerido' });
      return;
    }

    const record = await registerEntry(employeeId, new Date(selectedTimestamp));
    res.status(201).json({ message: 'Entrada registrada con éxito', data: record });
  } catch (error: any) {
    res.status(400).json({ error: error.message ?? 'Error inesperado al registrar la entrada.' });
  }
}

export async function handleRegisterExit(req: Request, res: Response): Promise<void> {
  try {
    const { employeeId, selectedTimestamp } = req.body;

    if (!employeeId) {
      res.status(400).json({ error: 'el id del empleado es requerido' });
      return;
    }

    const { record, message, hours } = await registerExit(employeeId, new Date(selectedTimestamp));
    res.status(201).json({
      message: 'Salida registrada con éxito',
      data: record,
      alert: message,
      timeInside: hours
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message ?? 'Error inesperado al registrar la salida.' });
  }
}
