# 🧑‍💼 Enter-Exit Employees

Aplicación para registrar ingresos y egresos de empleados en una compañía.

---

## 🏗 Estructura del Proyecto

Este repositorio es un **monorepo** que contiene dos aplicaciones:

- 📦 `frontend/` → Aplicación web en React + Vite + TailwindCSS
- 🔧 `backend/` → API REST construida en Node.js + Express + MongoDB

---

## 🚀 Instalación

### ✅ Requisitos

- Node.js v18 o superior
- MongoDB (local o en la nube, por ejemplo MongoDB Atlas)

### 📥 Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/enter-exit-employees.git
cd enter-exit-employees
```

---

## ⚙️ Backend

### Variables de entorno

Crear un archivo `.env` dentro de `/backend` con el siguiente contenido:

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/enter-exit-db
```

### Instalación y ejecución

```bash
cd backend
npm install
npm run dev
```

El servidor quedará corriendo en `http://localhost:4000`.

---

## 🖥 Frontend

### Instalación y ejecución

```bash
cd frontend
npm install
npm run dev
```

La aplicación quedará corriendo en `http://localhost:5173`.

🔗 Asegúrate de que el backend esté levantado para que las peticiones funcionen correctamente.

---

## 🧪 Tests

Los tests del backend están escritos con Jest y utilizan una base de datos en memoria para simular el entorno real sin afectar datos reales.

### Ejecutar tests

```bash
cd backend
npm run test
```

---

## ✨ Funcionalidades

- Registrar ingreso y egreso de empleados
- Alerta automática si un empleado estuvo dentro por más de 8 horas
- Cronómetro en tiempo real para empleados dentro de la empresa
- API RESTful reutilizable y separada del frontend

---

## 🧠 Lógica de Negocio

Para mantener coherencia lógica, los empleados que hayan registrado una salida con fecha futura **siguen apareciendo como "dentro de la empresa"** hasta que dicha hora haya pasado. Esto permite evitar inconsistencias donde un empleado no puede volver a registrar ingreso por haber "salido" en un horario aún no alcanzado. De esta forma, el sistema asume que siguen dentro hasta que el horario de salida sea efectivamente superado.

---

## 👤 Autor

Desarrollado por **Gabriel Alabi**

Con ❤️ y una cantidad generosa de `console.log`
