import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
      <div className="animate-fadeIn">
        <h1 className="text-9xl font-black text-slate-200">404</h1>
        <p className="text-2xl font-bold text-slate-900 -mt-8 mb-4 tracking-tighter">Módulo no encontrado</p>
        <p className="text-slate-500 mb-8 max-w-xs mx-auto">La página que intentas acceder no existe en el sistema FarmaControl.</p>
        <Link to="/menu" className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black shadow-xl uppercase text-xs tracking-widest">
          Regresar al Inicio
        </Link>
      </div>
    </div>
  );
}