import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import InsideListPage from './pages/InsideEmployeesPage';

export default function App() {
  return (
    <Router>
      <div className="absolute top-0 flex w-full items-center justify-between bg-gray-900 p-4">
        <p className="cursor-default text-2xl font-bold text-gray-200">
          Control de acceso a la Compañia
        </p>
        <nav className="space-x-4">
          <Link
            to="/"
            className="rounded-md p-3 text-blue-600 hover:bg-gray-200 hover:text-gray-950 hover:underline"
          >
            Registro
          </Link>
          <Link
            to="/inside"
            className="rounded-md p-3 text-blue-600 hover:bg-gray-200 hover:text-gray-950 hover:underline"
          >
            Dentro de la empresa
          </Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/inside" element={<InsideListPage />} />
      </Routes>
    </Router>
  );
}
