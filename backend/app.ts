// src/app.ts
import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';

import recordRoutes from './routes/RecordRoute.ts';
import employeeRoutes from './routes/EmployeeRoute.ts';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('✅ API is running');
});

app.use('/api/records', recordRoutes);
app.use('/api/employees', employeeRoutes);

export default app;
