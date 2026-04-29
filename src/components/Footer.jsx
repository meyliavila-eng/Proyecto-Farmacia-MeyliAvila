import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-green-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-black text-green-600 tracking-tighter">
              Farma<span className="text-gray-900">Control</span>
            </Link>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Tecnología de precisión para la gestión de farmacias y droguerías en Honduras.
            </p>
          </div>

          {/* Enlaces a Plataforma - Conectados a tus rutas reales */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Plataforma</h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link to="/inventario" className="hover:text-green-600 transition-colors font-medium">Gestión de Lotes</Link></li>
              <li><Link to="/dashboard" className="hover:text-green-600 transition-colors font-medium">Control de Vencimientos</Link></li>
              <li><Link to="/facturacion" className="hover:text-green-600 transition-colors font-medium">Punto de Venta (SAR)</Link></li>
            </ul>
          </div>

          {/* Enlaces de Usuario */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Cuenta</h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link to="/login" className="hover:text-green-600 transition-colors font-medium">Acceso Administrativo</Link></li>
              <li><Link to="/registro" className="hover:text-green-600 transition-colors font-medium">Registro de Sucursal</Link></li>
              <li><Link to="/precios" className="hover:text-green-600 transition-colors font-medium">Planes y Precios</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Soporte Local</h3>
            <div className="space-y-4 text-sm text-gray-500">
              <p className="flex items-center gap-2">📍 Tegucigalpa, Honduras</p>
              <p className="flex items-center gap-2">📞 +504 2200-0000</p>
              <p className="flex items-center gap-2 font-bold text-green-700">📧 soporte@farmacontrol.hn</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-[10px] font-black uppercase tracking-widest">
          <span>© 2026 FarmaControl Honduras.</span>
          <div className="flex gap-6">
            <span className="hover:text-gray-600 cursor-pointer">Cumplimiento ARSA</span>
            <span className="hover:text-gray-600 cursor-pointer">Privacidad Pacientes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}