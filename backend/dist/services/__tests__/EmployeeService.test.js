import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Record, { RecordType } from '../../models/Record';
import Employee from '../../models/Employee';
import { getAllEmployees, getEmployeesInside } from '../EmployeeService';
let mongo;
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
