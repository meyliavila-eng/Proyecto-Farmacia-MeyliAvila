import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-20 max-w-5xl mx-auto w-full px-6">
      {/* -mt-12: Sube el footer con fuerza para eliminar el espacio en blanco.
        py-5: Relleno vertical para que las letras tengan aire.
      */}
      <div className="bg-white/60 backdrop-blur-md py-5 px-10 -mt-12 mb-10 rounded-[2.5rem] border border-white shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Información de Marca - Letras más grandes */}
        <div className="flex items-center gap-4">
          <div className="bg-slate-900 text-white w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm italic shadow-lg">
            FC
          </div>
          <div className="text-left">
            <p className="text-sm font-black text-slate-900 tracking-tight">FarmaControl Honduras</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">&copy; 2026 Reservados todos los derechos</p>
          </div>
        </div>

        {/* Información Técnica y Dev - Letras claras (text-xs) */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="flex flex-col items-center md:items-end">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Ubicación</span>
            <p className="text-xs font-bold text-slate-600">Tegucigalpa, M.D.C.</p>
          </div>
          
          <div className="h-8 w-[1px] bg-slate-200 hidden md:block"></div>
          
          <div className="flex flex-col items-center md:items-end">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Sistema</span>
            <p className="text-xs font-bold text-blue-600">Versión 1.0.4 Estable</p>
          </div>

          <div className="h-8 w-[1px] bg-slate-200 hidden md:block"></div>

          <div className="flex flex-col items-center md:items-end">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Desarrollado por</span>
            <p className="text-xs font-black text-slate-900">Meyli Avila</p>
          </div>
        </div>

      </div>
    </footer>
  );
}