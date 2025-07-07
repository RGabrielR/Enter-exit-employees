import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Record, { RecordType } from '../../models/Record';
import Employee from '../../models/Employee';
import { getAllEmployees, getEmployeesInside } from '../EmployeeService';

let mongo: MongoMemoryServer;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

beforeEach(async () => {
  await Record.deleteMany({});
  await Employee.deleteMany({});
});

describe('getEmployeesInside', () => {
  it('returns only employees whose last record is entry', async () => {
    const emp1 = await Employee.create({
      fullName: 'Juan Perez',
      email: 'juan@empresa.com',
      dni: '12345678'
    });

    const emp2 = await Employee.create({
      fullName: 'Ana López',
      email: 'ana@empresa.com',
      dni: '87654321'
    });

    // Emp1 entra
    await Record.create({
      employeeId: emp1._id,
      type: RecordType.ENTRY,
      selectedTimestamp: new Date('2025-07-05T08:00:00Z'),
      actualTimestamp: new Date()
    });

    // Emp2 entra y luego sale
    await Record.create({
      employeeId: emp2._id,
      type: RecordType.ENTRY,
      selectedTimestamp: new Date('2025-07-05T09:00:00Z'),
      actualTimestamp: new Date()
    });

    await Record.create({
      employeeId: emp2._id,
      type: RecordType.EXIT,
      selectedTimestamp: new Date('2025-07-05T18:00:00Z'),
      actualTimestamp: new Date()
    });

    const result = await getEmployeesInside();

    expect(result).toHaveLength(1);
    expect(result[0]._id.toString()).toBe(emp1._id.toString());
    expect(result[0]).toHaveProperty('selectedTimestamp');
  });

  it('should return employees currently inside (ignoring future exits)', async () => {
  const emp = await Employee.create({ fullName: 'Test User', email: 't@test.com', dni: '123', _id: new mongoose.Types.ObjectId() });

  const now = new Date();
  const pastEntry = new Date(now.getTime() - 2 * 60 * 60 * 1000);
  const futureExit = new Date(now.getTime() + 2 * 60 * 60 * 1000);

  await Record.create({ employeeId: emp._id, type: RecordType.ENTRY, actualTimestamp: now, selectedTimestamp: pastEntry });
  await Record.create({ employeeId: emp._id, type: RecordType.EXIT, actualTimestamp: now, selectedTimestamp: futureExit });

  const inside = await getEmployeesInside();

  expect(inside).toHaveLength(1);
  expect(inside[0]._id.toString()).toEqual(emp._id.toString());
  expect(new Date(inside[0].selectedTimestamp).toISOString()).toEqual(pastEntry.toISOString());
});

  it('should not include employees who exited correctly', async () => {
    const emp = await Employee.create({ fullName: 'Out User', email: 'o@test.com', dni: '456', _id: new mongoose.Types.ObjectId() });

    const entry = new Date(Date.now() - 5 * 60 * 60 * 1000);
    const exit = new Date(Date.now() - 1 * 60 * 60 * 1000);

    await Record.create({ employeeId: emp._id, type: RecordType.ENTRY, actualTimestamp: entry, selectedTimestamp: entry });
    await Record.create({ employeeId: emp._id, type: RecordType.EXIT, actualTimestamp: exit, selectedTimestamp: exit });

    const inside = await getEmployeesInside();

    expect(inside).toHaveLength(0);
  });
});




describe('getAllEmployees', () => {
  it('returns all employees', async () => {
    await Employee.create({
      fullName: 'Carlos Santana',
      email: 'carlos@empresa.com',
      dni: '11111111'
    });

    await Employee.create({
      fullName: 'Lucía Méndez',
      email: 'lucia@empresa.com',
      dni: '22222222'
    });

    const result = await getAllEmployees();

    expect(result).toHaveLength(2);
    const dniList = result.map((e) => e.dni);
    expect(dniList).toContain('11111111');
    expect(dniList).toContain('22222222');
  });
});