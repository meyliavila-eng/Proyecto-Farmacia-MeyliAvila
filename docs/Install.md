# 🛠️ Guía de Instalación - FarmaControl

Este documento detalla los pasos necesarios para configurar el entorno de desarrollo y desplegar el sistema **FarmaControl** de manera local.

---

## 1. Requisitos del Sistema
Antes de comenzar, asegúrese de tener instaladas las siguientes herramientas:
* **Node.js**: Versión 18.0.0 o superior.
* **NPM**: Gestor de paquetes (incluido con Node).
* **Git**: Para la gestión de versiones y clonación.

---

## 2. Configuración del Entorno

### 2.1 Clonación del Repositorio
Ejecute el siguiente comando en su terminal para obtener el código fuente:
```bash
git clone [https://github.com/TU_USUARIO/farmacontrol-hn.git](https://github.com/TU_USUARIO/farmacontrol-hn.git)
cd farmacontrol-hn
```
---
### 2.2 Instalación de Dependencias
Instale los módulos necesarios de React y las librerías de diseño (Tailwind CSS, Lucide):
```bash
npm install
```
---

## 3. Ejecución y Despliegue

### 3.1 Modo de Desarrollo
Para iniciar el servidor local con Vite y visualizar los cambios en tiempo real:
```bash
npm run dev
   *Nota*: El sistema estará disponible en http://localhost:5173.
```

### 3.2 Construcción para Producción
Para generar los archivos finales optimizados (carpeta dist):
npm run build
