import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MenuPrincipal() {
  const navigate = useNavigate();

  const modulos = [
    { title: 'Inventario', desc: 'Control total de existencias, alertas de stock bajo y gestión de productos.', icon: '📦', path: '/inventario', border: 'from-blue-500 to-cyan-400', iconColor: 'text-blue-600', bgColor: 'bg-blue-50/50' },
    { title: 'Nueva Venta', desc: 'Sistema de facturación rápida con soporte para múltiples métodos de pago.', icon: '📑', path: '/facturacion', border: 'from-emerald-500 to-teal-400', iconColor: 'text-emerald-600', bgColor: 'bg-emerald-50/50' },
    { title: 'Clientes', desc: 'Gestión de base de datos, historial de compras y registros fiscales RTN.', icon: '👥', path: '/clientes', border: 'from-indigo-500 to-purple-400', iconColor: 'text-indigo-600', bgColor: 'bg-indigo-50/50' },
    { title: 'Cierre de Caja', desc: 'Generación de reportes diarios, arqueos y cumplimiento con normativas SAR.', icon: '💰', path: '/caja', border: 'from-amber-500 to-orange-400', iconColor: 'text-amber-600', bgColor: 'bg-amber-50/50' },
    { title: 'Ajustes', desc: 'Configuración general del sistema, perfiles de usuario y seguridad.', icon: '⚙️', path: '/ajustes', border: 'from-slate-400 to-slate-600', iconColor: 'text-slate-600', bgColor: 'bg-slate-100/50' },
    { title: 'Salir', desc: 'Finalizar la sesión actual de forma segura del sistema FarmaControl.', icon: '🚪', path: '/', border: 'from-red-500 to-rose-400', iconColor: 'text-red-600', bgColor: 'bg-red-50/50' },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFE] relative overflow-hidden flex flex-col items-center py-6">
      
      {/* Fondo decorativo */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl w-full px-6 relative z-10 flex flex-col flex-grow">
        
        {/* Header */}
        <header className="mb-6 bg-white/40 backdrop-blur-md p-6 px-10 rounded-[2.5rem] border border-white/60 shadow-sm flex flex-col sm:flex-row justify-between items-center animate-in fade-in slide-in-from-top-4 duration-700">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter italic">Farma<span className="text-blue-600 font-bold">Control</span></h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Operations Center</p>
          </div>
          <div className="flex items-center gap-4 bg-white/80 p-2 px-5 rounded-2xl border border-slate-100 shadow-inner mt-4 sm:mt-0">
             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Sistema en línea</p>
          </div>
        </header>

        {/* Rejilla de Módulos - Cartas Alargadas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
          {modulos.map((m, index) => (
            <button 
              key={m.title}
              onClick={() => navigate(m.path)}
              style={{ animationDelay: `${index * 100}ms` }}
              className={`relative p-[1.2px] rounded-[2.2rem] bg-gradient-to-br ${m.border} shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group animate-in fade-in zoom-in-95 fill-mode-both`}
            >
              {/* Contenedor con min-height para alargar la carta verticalmente */}
              <div className="bg-white rounded-[2.1rem] p-8 h-full min-h-[240px] flex flex-col relative overflow-hidden text-left">
                
                {/* Brillo dinámico al hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 translate-x-[-100%] group-hover:translate-x-[100%] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${m.bgColor} ${m.iconColor} w-14 h-14 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner`}>
                      {m.icon}
                    </div>
                    <div className="bg-slate-50 px-3 py-1 rounded-full text-[9px] font-black text-slate-300 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                      {m.title === 'Salir' ? 'Logout' : 'Active'}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-black text-slate-900 text-xl tracking-tight mb-2">{m.title}</h3>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-50">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${m.iconColor} opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-1`}>
                      Ingresar al módulo
                    </span>
                    <div className={`w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-gradient-to-br group-hover:${m.border} group-hover:text-white transition-all duration-500 shadow-sm`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer Ajustado y Pegado */}
        <footer className="mt-6 bg-white/40 backdrop-blur-md p-5 px-10 rounded-[2rem] border border-white/60 shadow-sm flex flex-col md:flex-row justify-between items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-4">
            <p className="text-sm font-black text-slate-900 tracking-tighter">MEYLI AVILA</p>
            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Honduras 2026</p>
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
             <div className="text-right">
                <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Build Version</p>
                <p className="text-[10px] font-bold text-blue-500">v1.0.4-stable</p>
             </div>
             <div className="w-[1px] h-6 bg-slate-100"></div>
             <div className="text-right">
                <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Security</p>
                <p className="text-[10px] font-bold text-emerald-500 uppercase">AES-256</p>
             </div>
          </div>
        </footer>
      </div>
    </div>
  );
}