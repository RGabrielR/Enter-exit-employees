import Record from '../models/Record.js';
import Employee from '../models/Employee.js';
export async function getEmployeesInside() {
    const lastRecords = await Record.aggregate([
        { $sort: { selectedTimestamp: -1 } },
        {
            $group: {
                _id: '$employeeId',
                lastType: { $first: '$type' },
                selectedTimestamp: { $first: '$selectedTimestamp' }
            }
        },
        { $match: { lastType: 'entry' } }
    ]);
    const employeeIds = lastRecords.map(r => r._id);
    const timestampMap = new Map(lastRecords.map(r => [r._id.toString(), r.selectedTimestamp]));
    const employees = await Employee.find({ _id: { $in: employeeIds } }).lean();
    return employees.map(e => ({
        ...e,
        selectedTimestamp: timestampMap.get(e._id.toString())
    }));
}
export async function getAllEmployees() {
    const employees = await Employee.find();
    return employees;
}
