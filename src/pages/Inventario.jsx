import React, { useState, useEffect } from 'react';

export default function Inventario() {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(null);
  const [alert, setAlert] = useState("");
  
  const categorias = ["Analgésicos", "Antibióticos", "Suplementos", "Cuidado Personal", "Otros"];

  const [medicamentos, setMedicamentos] = useState(() => {
    const saved = localStorage.getItem('inventario_farma');
    const datosGuardados = saved ? JSON.parse(saved) : [];
    
    if (datosGuardados.length <= 1) {
      return [
        { id: 1, nombre: 'Amoxicilina 500mg', stock: 15, precio: 15.50, categoria: 'Antibióticos', icono: '💊', color: 'bg-blue-50 text-blue-600' },
        { id: 2, nombre: 'Paracetamol 500mg', stock: 45, precio: 5.00, categoria: 'Analgésicos', icono: '🤒', color: 'bg-red-50 text-red-600' },
        { id: 3, nombre: 'Ibuprofeno 600mg', stock: 20, precio: 12.00, categoria: 'Analgésicos', icono: '🦴', color: 'bg-orange-50 text-orange-600' },
        { id: 4, nombre: 'Loratadina 10mg', stock: 50, precio: 8.00, categoria: 'Otros', icono: '🤧', color: 'bg-green-50 text-green-600' },
        { id: 5, nombre: 'Vitamina C 1000mg', stock: 30, precio: 25.00, categoria: 'Suplementos', icono: '🍊', color: 'bg-yellow-50 text-yellow-600' }
      ];
    }
    return datosGuardados;
  });

  const [form, setForm] = useState({ nombre: '', stock: '', precio: '', categoria: 'Otros' });

  useEffect(() => {
    localStorage.setItem('inventario_farma', JSON.stringify(medicamentos));
  }, [medicamentos]);

  const showAlert = (msg) => {
    setAlert(msg);
    setTimeout(() => setAlert(""), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const idItem = editMode || Date.now();
    const existente = medicamentos.find(m => m.id === idItem);
    
    const nuevoItem = { 
      ...form, 
      id: idItem,
      precio: Number(form.precio),
      stock: Number(form.stock),
      icono: existente ? existente.icono : '📦',
      color: existente ? existente.color : 'bg-slate-50 text-slate-600'
    };

    if (editMode) {
      setMedicamentos(medicamentos.map(m => m.id === editMode ? nuevoItem : m));
      showAlert("✅ Cambios guardados");
    } else {
      setMedicamentos([...medicamentos, nuevoItem]);
      showAlert("✅ Producto añadido");
    }
    closeModal();
  };

  const openEdit = (prod) => {
    setEditMode(prod.id);
    setForm({ 
      nombre: prod.nombre, 
      stock: prod.stock, 
      precio: prod.precio, 
      categoria: prod.categoria || 'Otros' 
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditMode(null);
    setForm({ nombre: '', stock: '', precio: '', categoria: 'Otros' });
  };

  return (
    <div className="min-h-screen bg-[#FBFBFE] relative overflow-hidden pt-[40px] px-6 pb-12 flex justify-center">
      
      {/* Fondo Decorativo */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-100/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Alerta */}
      {alert && (
        <div className="fixed top-4 right-8 z-[110] bg-slate-900 text-white px-6 py-3 rounded-xl shadow-2xl animate-in slide-in-from-right-5 fade-in duration-300 border border-slate-700 flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></div>
          <span className="text-[10px] font-black uppercase tracking-widest">{alert}</span>
        </div>
      )}

      <div className="max-w-6xl w-full relative z-10">
        
        {/* Header Optimizado */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-8 animate-in fade-in duration-500">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter italic leading-none">
              Control de <span className="text-blue-600">Inventario</span>
            </h2>
            <p className="text-slate-400 font-black uppercase text-[8px] tracking-[0.4em] mt-2">Gestión de Stock FarmaControl</p>
          </div>
          
          <button 
            onClick={() => setShowModal(true)} 
            className="group relative p-[1px] rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/10 mt-6 md:mt-0"
          >
            <div className="bg-slate-900 group-hover:bg-transparent text-white px-6 py-3 rounded-[0.7rem] font-black text-[10px] uppercase tracking-widest transition-all">
              + Nuevo Medicamento
            </div>
          </button>
        </header>

        {/* Tabla con Diseño Limpio y Legible */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50/50 text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] border-b border-slate-100">
                <tr>
                  <th className="px-8 py-5">Medicamento</th>
                  <th className="px-8 py-5">Estado Stock</th>
                  <th className="px-8 py-5">Precio Venta</th>
                  <th className="px-8 py-5 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {medicamentos.map((m) => (
                  <tr key={m.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <span className={`${m.color} w-11 h-11 rounded-2xl flex items-center justify-center text-xl shadow-inner border border-white group-hover:scale-110 transition-transform`}>
                          {m.icono}
                        </span>
                        <div>
                          <p className="font-black text-slate-800 text-sm tracking-tight">{m.nombre}</p>
                          <p className="text-[9px] font-black text-blue-500 uppercase tracking-widest">{m.categoria}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${m.stock <= 5 ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`}></div>
                        <span className={`px-3 py-1 rounded-lg font-black text-[11px] font-mono ${m.stock <= 5 ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-600'}`}>
                          {m.stock} UNIDADES
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <p className="font-black text-slate-900 text-base tracking-tighter">
                        <span className="text-blue-500 text-xs mr-1 italic">L.</span>
                        {Number(m.precio).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </p>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <div className="flex justify-center gap-4">
                        <button onClick={() => openEdit(m)} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">Editar</button>
                        <button onClick={() => { if(window.confirm("¿Eliminar?")) { setMedicamentos(medicamentos.filter(x => x.id !== m.id)); showAlert("Registro eliminado"); } }} className="text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-red-500 transition-colors">Eliminar</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal de Detalle */}
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-300">
              <h3 className="text-2xl font-black mb-8 text-center text-slate-900 tracking-tighter italic">
                {editMode ? 'Editar' : 'Nuevo'} <span className="text-blue-600">Medicamento</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Nombre Comercial</label>
                  <input type="text" required value={form.nombre} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-blue-500 transition-all font-bold text-slate-700 text-sm" onChange={(e) => setForm({...form, nombre: e.target.value})} />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Categoría</label>
                  <select 
                    value={form.categoria} 
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-slate-600 font-bold text-sm appearance-none focus:bg-white focus:border-blue-500 transition-all"
                    onChange={(e) => setForm({...form, categoria: e.target.value})}
                  >
                    {categorias.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Stock</label>
                    <input type="number" required value={form.stock} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-blue-500 transition-all font-bold text-slate-700 text-sm" onChange={(e) => setForm({...form, stock: e.target.value})} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Precio Unitario</label>
                    <input type="number" step="0.01" required value={form.precio} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-blue-500 transition-all font-bold text-slate-700 text-sm" onChange={(e) => setForm({...form, precio: e.target.value})} />
                  </div>
                </div>
                
                <div className="pt-4 space-y-3">
                  <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 transition-all shadow-xl">
                    {editMode ? 'Guardar Cambios' : 'Confirmar Ingreso'}
                  </button>
                  <button type="button" onClick={closeModal} className="w-full text-slate-400 font-black text-[9px] uppercase tracking-widest hover:text-red-500 transition-colors">Cancelar</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}