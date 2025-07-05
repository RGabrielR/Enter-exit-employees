import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { toast, Toaster } from 'sonner';
import type { Employee } from '../types/Employee';

export default function RegisterPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedId, setSelectedId] = useState('');
  const [time, setTime] = useState('');
  const [useNow, setUseNow] = useState(false);

  useEffect(() => {
    axios.get('/api/employees/all').then((res) => {
      setEmployees(res.data.data);
    });
  }, []);

  const handleSubmit = async (type: 'entry' | 'exit') => {
    if (!selectedId) return toast.info('Por favor selecciona un empleado');
    let selectedTimestamp;
    if (!useNow) {
      if (!time) return toast.info('Por favor selecciona hora');
      const [hours, minutes] = time.split(':').map(Number);
      const now = new Date();
      selectedTimestamp = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hours,
        minutes
      ).toISOString();
    } else {
      selectedTimestamp = new Date().toISOString();
    }
    toast.promise(
      axios.post(`/api/records/${type}`, {
        employeeId: selectedId,
        selectedTimestamp,
      }),
      {
        loading: 'Registrando...',
        success: (res) => {
          if (type === 'exit') {
            const { alert, message, timeInside } = res.data;
            if (alert) {
              setTimeout(() => toast.error(alert), 3000);
            }
            return `Egreso exitoso. Tiempo dentro: ${timeInside}h. ${message ?? ''}`;
          }
          return 'Ingreso exitoso';
        },
        error: (err) => err.response?.data?.error ?? 'Error inesperado',
      }
    );
  };
  return (
    <div className="min-w-screen">
      <div className="mx-auto my-auto mt-10 max-w-xl space-y-4 rounded-2xl bg-white p-6 shadow-md">
        <Toaster richColors />
        <h1 className="text-xl font-bold text-gray-900">Registrar Entrada / Salida</h1>

        <select
          className="w-full rounded border border-gray-300 p-2 text-gray-900"
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          <option className="space-y-2" value="">
            Seleccionar empleado
          </option>
          {employees.map((e) => (
            <option key={e._id} value={e._id}>
              {e.fullName} ({e.dni})
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2 text-gray-900">
          <input
            type="checkbox"
            checked={useNow}
            onChange={() => setUseNow(!useNow)}
            id="use-now-checkbox"
          />
          <label htmlFor="use-now-checkbox">Usar hora actual</label>
        </div>

        <input
          type="time"
          value={time}
          disabled={useNow}
          onChange={(e) => setTime(e.target.value)}
          className="w-full rounded border border-gray-300 p-2 text-gray-900"
        />

        <div className="flex gap-4">
          <button
            onClick={() => handleSubmit('entry')}
            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Registrar Ingreso
          </button>
          <button
            onClick={() => handleSubmit('exit')}
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Registrar Egreso
          </button>
        </div>
      </div>
    </div>
  );
}
