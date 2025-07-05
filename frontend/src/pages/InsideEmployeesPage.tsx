import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { SpinnerRoundFilled } from 'spinners-react';
import type { EmployeeInside } from '../types/EmployeeInside';
import { formatDuration } from '../utils/formatDuration';

export default function InsideListPage() {
  const [employees, setEmployees] = useState<EmployeeInside[]>([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setNow] = useState(Date.now());

  useEffect(() => {
    axios
      .get('/api/employees/inside')
      .then((res) => {
        setEmployees(res.data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const employeeList =
    employees.length === 0 ? (
      <div className="flex items-center justify-center">
        <SpinnerRoundFilled size={150} color="blue" />
      </div>
    ) : (
      <ul className="max-h-96 space-y-2 overflow-y-auto pr-2">
        {employees.map((e) => (
          <li key={e._id} className="rounded-md border p-3 shadow-sm">
            <p className="font-semibold text-gray-600">{e.fullName}</p>
            <p className="text-sm text-gray-600">DNI: {e.dni}</p>
            <p className="text-sm text-gray-600">Email: {e.email}</p>
            <p className="font-mono text-sm text-blue-600">
              Tiempo dentro: {formatDuration(e.selectedTimestamp)}
            </p>
          </li>
        ))}
      </ul>
    );

  return (
    <div className="min-w-screen">
      <div className="mx-auto mt-10 max-w-xl space-y-4 rounded-2xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-gray-950">Empleados actualmente dentro</h2>
        {loading ? (
          <p className="animate-pulse text-gray-500">Cargando empleados...</p>
        ) : (
          employeeList
        )}
      </div>
    </div>
  );
}
