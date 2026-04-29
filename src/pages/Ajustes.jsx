import React, { useState } from 'react';

export default function Ajustes() {
  const [datos, setDatos] = useState({
    nombre: 'FarmaControl Honduras',
    sucursal: 'Tegucigalpa, M.D.C.',
    rtn: '0801-1995-123456',
    isv: '15'
  });

  const guardarAjustes = (e) => {
    e.preventDefault();
    alert("✅ Configuración guardada correctamente.");
  };

  return (
    /* h-screen + flex + items-center: Esto logra el centrado vertical absoluto */
    <div className="h-screen bg-[#FBFBFE] relative overflow-hidden flex flex-col items-center justify-center p-6">
      
      {/* Fondos Decorativos */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl w-full relative z-10 animate-fadeIn">
        
        {/* Título más compacto */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter italic">
            Configuración <span className="text-blue-600">Global</span>
          </h2>
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] mt-1">Panel de Control Administrativo</p>
        </div>
        
        {/* Formulario Centrado */}
        <div className="relative p-[1.5px] rounded-[2.5rem] bg-gradient-to-br from-slate-200 via-white to-slate-200 shadow-2xl shadow-blue-900/5">
          <form 
            onSubmit={guardarAjustes} 
            className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-[2.4rem] space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Inputs con estilo coherente */}
              {[
                { label: 'Nombre de la Empresa', val: datos.nombre, key: 'nombre', icon: '🏢' },
                { label: 'Sucursal', val: datos.sucursal, key: 'sucursal', icon: '📍' },
                { label: 'RTN (Registro Fiscal)', val: datos.rtn, key: 'rtn', icon: '📄' },
                { label: 'Impuesto ISV (%)', val: datos.isv, key: 'isv', icon: '💰', type: 'number' }
              ].map((field) => (
                <div key={field.key} className="group">
                  <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 ml-1 group-focus-within:text-blue-600 transition-colors">
                    {field.label}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 text-lg">{field.icon}</span>
                    <input 
                      type={field.type || 'text'}
                      value={field.val}
                      onChange={(e) => setDatos({...datos, [field.key]: e.target.value})}
                      className="w-full pl-12 p-3.5 bg-slate-50/50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 outline-none transition-all font-bold text-slate-700 text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full relative p-[1.2px] rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 group transition-all active:scale-95"
              >
                <div className="bg-slate-900 group-hover:bg-transparent text-white py-4 rounded-[0.9rem] font-black uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-3">
                  Guardar Configuración
                </div>
              </button>
            </div>
          </form>
        </div>

        {/* Nota de Alerta - Pegada al formulario */}
        <div className="mt-6 p-5 bg-white/40 backdrop-blur-md rounded-[1.5rem] border border-amber-100/50 flex items-center gap-4 shadow-sm">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl">⚠️</div>
          <p className="text-[11px] font-bold text-slate-500 leading-tight italic">
            <span className="text-amber-600 font-black uppercase tracking-tighter mr-1 italic">Atención:</span>
            Cambios en el RTN afectan la validez legal de sus reportes fiscales ante el SAR.
          </p>
        </div>

      </div>
    </div>
  );
}