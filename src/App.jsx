import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MenuPrincipal from './components/MenuPrincipal';
import Login from './pages/Login';
import Inventario from './pages/Inventario'; // Nombre actualizado a español
import Facturacion from './pages/Facturacion';
import Clientes from './pages/Clientes';
import Caja from './pages/Caja';
import Ajustes from './pages/Ajustes';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();
  // El Navbar y Footer no se muestran en el Login ("/")
  const mostrarLayout = location.pathname !== '/';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {mostrarLayout && <Navbar />}
      
      <main className={`flex-grow ${mostrarLayout ? 'pt-24 pb-12' : ''}`}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<MenuPrincipal />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/facturacion" element={<Facturacion />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/caja" element={<Caja />} />
          <Route path="/ajustes" element={<Ajustes />} />
          
          {/* Captura cualquier error de escritura en la URL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {mostrarLayout && <Footer />}
    </div>
  );
}

export default App;