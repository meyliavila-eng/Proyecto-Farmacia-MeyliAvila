import React, { useState, useEffect } from 'react';

export default function Facturacion() {
  const [carrito, setCarrito] = useState([]);
  const [alert, setAlert] = useState("");
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  
  const categorias = ["Todos", "Analgésicos", "Antibióticos", "Suplementos", "Cuidado Personal", "Otros"];

  useEffect(() => {
    const savedInv = localStorage.getItem('inventario_farma');
    if (savedInv) {
      const listaLimpia = JSON.parse(savedInv).map(p => ({
        ...p,
        categoria: p.categoria ? p.categoria.trim() : "Otros"
      }));
      setProductos(listaLimpia);
    }
  }, []);

  const showAlert = (msg) => {
    setAlert(msg);
    setTimeout(() => setAlert(""), 3000);
  };

  const agregarAlCarrito = (p) => {
    setCarrito([...carrito, { ...p, cartId: Date.now() }]);
    showAlert(`+ ${p.nombre}`);
  };

  const productosFiltrados = productos.filter(p => {
    const cumpleFiltro = filtro === "Todos" || p.categoria === filtro;
    const cumpleBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return cumpleFiltro && cumpleBusqueda;
  });

  const subtotal = carrito.reduce((acc, curr) => acc + Number(curr.precio), 0);
  const isv = subtotal * 0.15;
  const total = subtotal + isv;

  return (
    <div className="min-h-screen bg-[#FBFBFE] relative overflow-hidden pt-[40px] px-6 pb-6 flex justify-center">
      
      {/* Fondos Decorativos */}
      <div className="fixed top-0 right-0 w-[400px] h-[400px] bg-blue-100/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Alerta */}
      {alert && (
        <div className="fixed top-4 right-8 z-[110] bg-slate-900 text-white px-6 py-3 rounded-xl shadow-2xl animate-in slide-in-from-right-5 fade-in duration-300 border border-slate-700 flex items-center gap-3">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
          <span className="text-[10px] font-black uppercase tracking-widest">{alert}</span>
        </div>
      )}

      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row gap-8 relative z-10 justify-center">
        
        {/* SECCIÓN CATÁLOGO (TEXTOS MÁS LEGIBLES) */}
        <div className="flex-grow max-w-[950px] animate-in fade-in duration-500">
          <header className="mb-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl font-black text-slate-900 tracking-tighter italic">
              POS <span className="text-blue-600">FarmaControl</span>
            </h2>
            
            <div className="flex flex-wrap items-center gap-3 justify-center">
              <div className="relative group">
                <input 
                  type="text"
                  placeholder="Buscar medicamento..."
                  className="bg-white border border-slate-200 p-3 pl-10 rounded-xl text-xs font-bold outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-400 transition-all shadow-sm w-64"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 text-xs">🔍</span>
              </div>
              
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
                {categorias.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setFiltro(cat)}
                    className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border ${
                      filtro === cat 
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md' 
                      : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </header>

          {/* GRID DE PRODUCTOS (TARJETAS MÁS GRANDES) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {productosFiltrados.map((p) => (
              <button 
                key={p.id}
                onClick={() => agregarAlCarrito(p)}
                className="bg-white p-4 rounded-[1.8rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all text-left group flex items-center gap-4 relative overflow-hidden"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl shadow-inner border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {p.icono || '💊'}
                </div>
                <div className="overflow-hidden">
                  <p className="font-black text-slate-800 text-[14px] tracking-tight leading-tight truncate group-hover:text-blue-600">
                    {p.nombre}
                  </p>
                  <p className="text-lg font-black text-slate-900 tracking-tighter mt-1">
                    <span className="text-blue-500 text-xs mr-0.5">L.</span>
                    {Number(p.precio).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* PANEL TICKET (VISIBLE Y GRANDE) */}
        <div className="w-full lg:w-[380px] animate-in fade-in slide-in-from-right-4">
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 sticky top-[40px] overflow-hidden flex flex-col max-h-[85vh]">
            
            <div className="bg-slate-900 p-8 text-white relative">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 text-center mb-2 opacity-80">Total a Cobrar</h3>
              <div className="flex items-baseline gap-2 justify-center">
                <span className="text-blue-200 text-xl font-bold italic">L.</span>
                <p className="text-5xl font-black tracking-tighter tabular-nums">
                  {total.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>

            <div className="p-6 overflow-y-auto flex-grow space-y-4 no-scrollbar min-h-[200px]">
              {carrito.length === 0 ? (
                <div className="text-center py-12 opacity-20">
                  <p className="text-[10px] font-black uppercase tracking-widest italic">Esperando selección...</p>
                </div>
              ) : (
                carrito.map((item) => (
                  <div key={item.cartId} className="flex justify-between items-center border-b border-slate-50 pb-4 group animate-in slide-in-from-bottom-2">
                    <div className="flex flex-col max-w-[65%]">
                      <span className="text-[12px] font-black text-slate-800 uppercase leading-tight truncate">{item.nombre}</span>
                      <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">Unidad: L.{Number(item.precio).toFixed(2)}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-black text-slate-900 font-mono">L.{Number(item.precio).toFixed(2)}</span>
                      <button 
                        onClick={() => setCarrito(carrito.filter(c => c.cartId !== item.cartId))} 
                        className="text-slate-300 hover:text-red-500 transition-colors p-1"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-8 bg-slate-50 border-t border-dashed border-slate-200">
              <div className="space-y-2 mb-8">
                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-slate-400">
                  <span>Subtotal</span>
                  <span>L. {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-slate-400">
                  <span>ISV (15%)</span>
                  <span className="text-emerald-600">L. {isv.toFixed(2)}</span>
                </div>
              </div>
              <button 
                onClick={() => { showAlert("✅ Venta Realizada"); setCarrito([]); }}
                disabled={carrito.length === 0}
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-[11px] tracking-[0.3em] hover:bg-blue-600 transition-all shadow-xl disabled:opacity-20"
              >
                Confirmar y Cobrar
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}