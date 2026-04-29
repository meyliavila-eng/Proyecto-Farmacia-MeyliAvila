import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// Iconos corregidos (Sin errores de sintaxis)
const Icons = {
  Dashboard: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
    </svg>
  ),
  Inventario: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  Facturacion: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  )
};

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Icons.Dashboard },
    { name: 'Inventario', path: '/inventario', icon: Icons.Inventario },
    { name: 'Facturación', path: '/facturacion', icon: Icons.Facturacion },
  ];

  return (
    <div className="fixed top-6 w-full flex justify-center z-50 px-6">
      <nav className="max-w-7xl w-full bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-[2rem] px-8 py-3 flex justify-between items-center transition-all duration-300">
        
        {/* Identidad Visual con Micro-interacción */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-green-600 text-white w-10 h-10 rounded-2xl flex items-center justify-center font-black shadow-lg shadow-green-200 group-hover:rotate-[15deg] transition-all duration-500">
            <span className="text-xl">+</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-black text-gray-900 tracking-tighter">
              Farma<span className="text-green-600">Control</span>
            </span>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Honduras</span>
          </div>
        </Link>

        {/* Navegación Intuitiva (Clase 3: Clean Design) */}
        <div className="hidden md:flex bg-gray-100/50 p-1.5 rounded-2xl gap-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path}
                to={item.path} 
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  isActive 
                    ? "bg-white text-green-700 shadow-sm ring-1 ring-black/5" 
                    : "text-gray-500 hover:text-gray-900 hover:bg-white/50"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Botón de Acción Principal (Seguridad - Clase 4) */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/login')}
            className="group relative flex items-center gap-2 bg-gray-900 text-white px-7 py-3 rounded-2xl text-sm font-black hover:bg-green-600 transition-all duration-300 shadow-xl shadow-gray-200 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Acceder</span>
            <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </button>
        </div>
      </nav>
    </div>
  );
}