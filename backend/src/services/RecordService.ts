import Record, { RecordType} from '../models/Record.js';
import { selectedTimestampFormat } from '../utils/selectedTimestampFormat.js';

export async function registerEntry(employeeId: string, selectedDate?: Date) {
  const selectedTimestamp = selectedTimestampFormat(selectedDate);
  const lastEntry = await Record.findOne({
    employeeId,
    type: RecordType.ENTRY,
  }).sort({ actualTimestamp: -1 });

  const exitAfterwards = await Record.findOne({
    employeeId,
    type: RecordType.EXIT,
    selectedDate: { $gt: selectedTimestamp }
  });
  
  if (lastEntry && !exitAfterwards) {
    throw new Error('El empleado ya está dentro de la compañía.');
  }

  const newEntry = await Record.create({
    employeeId,
    type: RecordType.ENTRY,
    actualTimestamp: new Date(),
    selectedTimestamp: selectedTimestamp
  });

  return newEntry;
}

export async function registerExit(employeeId: string, selectedDate?: Date) {
  const selectedTimestamp = selectedTimestampFormat(selectedDate);
  const entryPending = await Record.findOne({
    employeeId,
    type: RecordType.ENTRY,
    selectedTimestamp: { $lte: selectedTimestamp }
  }).sort({ actualTimestamp: -1 });

  if (!entryPending) {
    throw new Error('No se encontró una entrada previa.');
  }
  const exitAfterwards = await Record.findOne({
    employeeId,
    type: RecordType.EXIT,
    selectedTimestamp: { $gt: entryPending.selectedTimestamp }
  });
  if (exitAfterwards) {
    throw new Error('El empleado ya fue egresado.');
  }

  const timeMs = selectedDate ? new Date(selectedDate).getTime() - new Date(entryPending.selectedTimestamp).getTime() : 0;
  const hours = timeMs / (1000 * 60 * 60);

  const newExit = await Record.create({
    employeeId,
    type: RecordType.EXIT,
    actualTimestamp: new Date(),
    selectedTimestamp: selectedTimestamp
  });

  return {
    record: newExit,
    message: hours > 8 ? 'El tiempo dentro de la compañía excede las 8 horas.' : null,
    hours: Math.round(hours * 100) / 100
  };
}
