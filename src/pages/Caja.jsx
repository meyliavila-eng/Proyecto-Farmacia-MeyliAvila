import React, { useState, useEffect } from 'react';

export default function Caja() {
  const [alertMsg, setAlertMsg] = useState("");
  const [procesando, setProcesando] = useState(false);
  
  const [totalVentas, setTotalVentas] = useState(0);
  const [isv, setIsv] = useState(0);

  useEffect(() => {
    // Simulación de carga de datos reales
    const ventasReales = 5840.50; 
    setTotalVentas(ventasReales);
    setIsv(ventasReales * 0.15);
  }, []);

  const ejecutarCierre = () => {
    setProcesando(true);
    
    setTimeout(() => {
      setTotalVentas(0);
      setIsv(0);
      setAlertMsg("📊 Cierre Z enviado al SAR correctamente");
      setProcesando(false);
      
      setTimeout(() => setAlertMsg(""), 4000);
    }, 2000);
  };

  return (
    <div className="h-screen bg-[#FBFBFE] relative overflow-hidden flex flex-col items-center justify-center p-6">
      
      {/* Fondos Decorativos */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] bg-blue-100/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-indigo-100/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Alerta con Animación Slide */}
      {alertMsg && (
        <div className="fixed top-24 right-8 z-[110] bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl animate-in slide-in-from-right-10 fade-in duration-500 font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-4 border border-slate-700">
          <div className="flex flex-col">
             <span className="text-emerald-400">Transacción Exitosa</span>
             <span className="text-white/60">{alertMsg}</span>
          </div>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
        </div>
      )}

      <div className="max-w-md w-full relative z-10 animate-in fade-in zoom-in-95 duration-700">
        
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter italic">
            Cierre de <span className="text-blue-600">Caja</span>
          </h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-1">Reporte Operativo Diario</p>
        </div>

        <div className="relative p-[1.5px] rounded-[3rem] bg-gradient-to-br from-slate-200 via-white to-slate-200 shadow-2xl shadow-blue-900/5">
          <div className="bg-white/90 backdrop-blur-md p-10 rounded-[2.9rem] text-center">
            
            {/* Espacio superior limpio antes de los datos */}
            <div className="pt-2"></div>

            {/* Pantalla de Datos Reales */}
            <div className={`rounded-[2.5rem] p-8 mb-8 relative overflow-hidden transition-all duration-1000 shadow-xl border-t border-white/20 ${totalVentas === 0 ? 'bg-emerald-950' : 'bg-slate-900'}`}>
               <div className="absolute top-0 right-0 p-6 opacity-5 text-white text-5xl font-black italic">SAR</div>
               
               <div className="text-left mb-6">
                 <p className="text-blue-400 text-[9px] font-black uppercase tracking-[0.3em] mb-1">Estado de Facturación</p>
                 <p className="text-white/40 text-[8px] font-bold uppercase tracking-widest">Fecha: {new Date().toLocaleDateString()}</p>
               </div>

               <div className="flex flex-col items-center justify-center py-4">
                 <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Ventas Totales</p>
                 <div className="flex items-baseline gap-2">
                   <span className="text-blue-500 text-xl font-bold italic">L.</span>
                   <p className="text-5xl font-black text-white tracking-tighter tabular-nums transition-all">
                      {totalVentas.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                   </p>
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-4 mt-6 border-t border-white/5 pt-6">
                  <div className="text-left border-r border-white/5">
                    <p className="text-[7px] font-black text-white/30 uppercase tracking-widest mb-1">Impuestos (15%)</p>
                    <p className="text-xs font-black text-emerald-500">L. {isv.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[7px] font-black text-white/30 uppercase tracking-widest mb-1">Subtotal</p>
                    <p className="text-xs font-black text-white/80">L. {(totalVentas - isv).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                  </div>
               </div>
            </div>

            {/* Botón de Cierre */}
            <button 
              onClick={ejecutarCierre}
              disabled={procesando || totalVentas === 0}
              className={`w-full relative overflow-hidden py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 active:scale-95 shadow-lg
                ${procesando || totalVentas === 0
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200' 
                  : 'bg-blue-600 text-white hover:bg-slate-900 hover:shadow-blue-500/20'}`}
            >
              {procesando ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                  <span>Comunicando con SAR...</span>
                </div>
              ) : totalVentas === 0 ? (
                'Cierre Completado'
              ) : (
                'Ejecutar Cierre Z'
              )}
            </button>

            {/* Footer de la tarjeta */}
            <div className="mt-8 flex justify-between items-center px-2">
               <div className="flex flex-col items-start">
                  <span className="text-[7px] font-black text-slate-300 uppercase tracking-widest">Admin</span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase">M. Avila</span>
               </div>
               <div className="flex flex-col items-end">
                  <span className="text-[7px] font-black text-slate-300 uppercase tracking-widest">ID Terminal</span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase">HN-POS-01</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}