import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import Record, { RecordType } from '../../models/Record';
import { registerEntry, registerExit } from '../RecordService';
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
});
describe('registerEntry', () => {
    it('creates a new entry when none exists', async () => {
        const rec = await registerEntry('6869439f15a32310efc3097e', new Date('2025-07-05T10:00:00Z'));
        expect(rec.type).toBe(RecordType.ENTRY);
        expect(rec.selectedTimestamp.toISOString()).toBe('2025-07-05T10:00:00.000Z');
    });
    it('throws if already inside without exit', async () => {
        await registerEntry('6869439f15a32310efc3097e', new Date('2025-07-05T09:00:00Z'));
        await expect(registerEntry('6869439f15a32310efc3097e', new Date('2025-07-05T11:00:00Z'))).rejects.toThrow('El empleado ya está dentro de la compañía.');
    });
});
describe('registerExit', () => {
    it('throws if there is no prior entry', async () => {
        await expect(registerExit('6869439f15a32310efc3097e', new Date())).rejects.toThrow('No se encontró una entrada previa.');
    });
    it('registers exit correctly', async () => {
        await registerEntry('6869439f15a32310efc3097e', new Date('2025-07-05T08:00:00Z'));
        const res = await registerExit('6869439f15a32310efc3097e', new Date('2025-07-05T17:00:00Z'));
        expect(res.record.type).toBe(RecordType.EXIT);
        expect(res.hours).toBeCloseTo(9);
        expect(res.message).toBe('El tiempo dentro de la compañía excede las 8 horas.');
    });
});
