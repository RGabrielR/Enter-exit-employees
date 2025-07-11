import express from 'express';
import cors from 'cors';
import recordRoutes from './routes/RecordRoute.js';
import employeeRoutes from './routes/EmployeeRoute.js';
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('✅ API is running');
});
app.use('/api/records', recordRoutes);
app.use('/api/employees', employeeRoutes);
export default app;
