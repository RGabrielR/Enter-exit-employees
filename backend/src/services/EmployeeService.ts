import Record, { RecordType } from '../models/Record.js';
import Employee from '../models/Employee.js';

export async function getEmployeesInside() {
  const now = new Date();

  const lastEntries = await Record.aggregate([
    { $match: { type: RecordType.ENTRY } },
    { $sort: { selectedTimestamp: -1 } },
    {
      $group: {
        _id: '$employeeId',
        selectedTimestamp: { $first: '$selectedTimestamp' }
      }
    }
  ]);

  const inside = [];
  for (const rec of lastEntries) {
    const exit = await Record.findOne({
      employeeId: rec._id,
      type: RecordType.EXIT,
      selectedTimestamp: { $gte: rec.selectedTimestamp, $lte: now }
    }).sort({ selectedTimestamp: -1 });

    if (!exit) inside.push(rec);
  }

  const ids = inside.map(r => r._id);
  const tsMap = new Map(inside.map(r => [r._id.toString(), r.selectedTimestamp]));

  const employees = await Employee.find({ _id: { $in: ids } }).lean();

  return employees.map(e => ({
    ...e,
    selectedTimestamp: tsMap.get(e._id.toString())
  }));
}

export async function getAllEmployees() {
  const employees = await Employee.find();
  return employees;
}