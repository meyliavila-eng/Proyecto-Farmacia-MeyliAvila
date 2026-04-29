import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; // <--- 1. Asegúrate de importar el Login
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} /> {/* <--- 2. Ruta del Login */}
      <Route path="/registro" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inventario" element={<Inventory />} />
      <Route path="/facturacion" element={<Checkout />} />
    </Routes>
  );
}

export default App;