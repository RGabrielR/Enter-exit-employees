# 🧑‍💼 Enter-Exit Employees

Aplicación para registrar ingresos y egresos de empleados en una compañía.

## 🏗 Estructura del Proyecto

Este repositorio es un **monorepo** que contiene dos aplicaciones:

- 📦 `frontend/` → Aplicación web en React + Vite + TailwindCSS
- 🔧 `backend/` → API REST construida en Node.js + Express + MongoDB

---

## 🚀 Instalación

### Requisitos

- Node.js v18 o superior
- MongoDB (local o en la nube, por ejemplo MongoDB Atlas)

### Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/enter-exit-employees.git
cd enter-exit-employees

⚙️ Backend
Variables de entorno
Crear un archivo .env dentro de /backend:

PORT=4000
MONGO_URI=mongodb://localhost:27017/enter-exit-db
Instalar dependencias y correr servidor

cd backend
npm install
npm run dev
El servidor quedará corriendo en http://localhost:4000.

🖥 Frontend
Instalar dependencias y correr la app

cd frontend
npm install
npm run dev

La aplicación quedará corriendo en http://localhost:5173.

Asegurate de que el backend esté levantado para que las peticiones funcionen.

🧪 Tests
Los tests del backend están escritos con Jest y usan una base de datos en memoria.

Para ejecutarlos:


cd backend
npm run test


✨ Funcionalidades

Registrar ingreso y egreso de empleados.

Validación de horarios.

Alerta cuando un empleado supera las 8 horas dentro.

Cronómetro en tiempo real para empleados que aún no salieron.

API RESTful separada y reutilizable.

🧑‍💻 Autor
Desarrollado por Gabriel Alabi
Con ❤️ y una cantidad generosa de console.log
