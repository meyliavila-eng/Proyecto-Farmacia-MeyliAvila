import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  // Estilo de los links mejorado para combinar con los módulos
  const linkStyle = (path) => 
    `flex items-center gap-2 px-6 py-2.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
      location.pathname === path 
      ? 'bg-slate-900 text-white shadow-[0_10px_20px_-5px_rgba(15,23,42,0.3)] scale-105' 
      : 'text-slate-500 hover:bg-white/60 hover:text-slate-900 hover:shadow-sm border border-transparent hover:border-white'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white/40 backdrop-blur-xl border-b border-white/60 z-50 px-10 flex items-center justify-between">
      
      {/* Logo: Estilo coherente con Login/Menu */}
      <Link to="/menu" className="flex items-center gap-3 group">
        <div className="bg-slate-900 w-11 h-11 rounded-[1rem] flex items-center justify-center text-white font-black text-xl italic group-hover:rotate-[15deg] transition-all duration-500 shadow-lg shadow-slate-900/20">
          FC
        </div>
        <div className="hidden sm:block">
          <span className="text-2xl font-black text-slate-900 block tracking-tighter leading-none italic">
            Farma<span className="text-blue-600">Control</span>
          </span>
          <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em] mt-1">Terminal Honduras</p>
        </div>
      </Link>

      {/* Navegación Central: Estilo de "Píldora" */}
      <div className="hidden lg:flex items-center gap-2 bg-slate-100/30 p-1.5 rounded-[2rem] border border-white/40 shadow-inner">
        <Link to="/menu" className={linkStyle('/menu')}>
          <span className="text-base">🏠</span> Inicio
        </Link>
        <Link to="/inventario" className={linkStyle('/inventario')}>
          <span className="text-base">📦</span> Inventario
        </Link>
        <Link to="/facturacion" className={linkStyle('/facturacion')}>
          <span className="text-base">📑</span> Facturación
        </Link>
        <Link to="/clientes" className={linkStyle('/clientes')}>
          <span className="text-base">👥</span> Clientes
        </Link>
      </div>

      {/* Perfil del Usuario: Diseño Premium */}
      <div className="flex items-center gap-5">
        <div className="text-right hidden md:block border-r border-slate-200 pr-5">
          <p className="text-sm font-black text-slate-900 leading-none">Meyli Avila</p>
          <div className="flex items-center justify-end gap-1.5 mt-1">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Admin Global</p>
          </div>
        </div>
        
        {/* Avatar con borde de gradiente sutil */}
        <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-11 h-11 bg-slate-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center font-black text-slate-400 group-hover:text-slate-900 transition-colors">
                MA
            </div>
        </div>
      </div>
    </nav>
  );
}