import React, { useState, useEffect } from 'react';

export default function Clientes() {
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState("");
  
  const [lista, setLista] = useState(() => {
    const saved = localStorage.getItem('clientes_farma');
    return saved ? JSON.parse(saved) : [{ id: 1, nombre: 'Meyli Avila', rtn: '0801-2000-123456' }];
  });

  const [form, setForm] = useState({ nombre: '', rtn: '' });

  useEffect(() => {
    localStorage.setItem('clientes_farma', JSON.stringify(lista));
  }, [lista]);

  const showAlert = (msg) => {
    setAlert(msg);
    setTimeout(() => setAlert(""), 4000);
  };

  const guardar = (e) => {
    e.preventDefault();
    const cleanRTN = form.rtn.replace(/-/g, '');
    if(cleanRTN.length < 14) return alert("RTN incompleto (se requieren 14 dígitos)");
    
    if (editId) {
      setLista(lista.map(c => c.id === editId ? { ...form, id: editId } : c));
      showAlert("✅ Registro actualizado");
    } else {
      setLista([...lista, { id: Date.now(), ...form }]);
      showAlert("✅ Paciente registrado");
    }
    setShowModal(false);
    setEditId(null);
    setForm({ nombre: '', rtn: '' });
  };

  const handleEdit = (c) => {
    setEditId(c.id);
    setForm(c);
    setShowModal(true);
  };

  const formatRTN = (input) => {
    let valor = input.replace(/\D/g, ''); 
    if (valor.length > 14) valor = valor.slice(0, 14);
    let formateado = "";
    if (valor.length > 0) {
      formateado = valor.substring(0, 4);
      if (valor.length > 4) formateado += "-" + valor.substring(4, 8);
      if (valor.length > 8) formateado += "-" + valor.substring(8, 14);
    }
    return formateado;
  };

  return (
    /* pt-[40px] para mantener el centímetro de espacio exacto */
    <div className="min-h-screen bg-[#FBFBFE] relative overflow-hidden pt-[40px] px-6 pb-12 flex justify-center">
      
      {/* Fondos Decorativos */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-100/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Alerta Compacta */}
      {alert && (
        <div className="fixed top-4 right-8 z-[110] bg-slate-900 text-white px-6 py-3 rounded-xl shadow-2xl animate-in slide-in-from-right-5 fade-in duration-300 border border-slate-700 flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
          <span className="text-[10px] font-black uppercase tracking-widest">{alert}</span>
        </div>
      )}

      <div className="max-w-6xl w-full relative z-10">
        
        {/* Header Compacto y Alineado */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 animate-in fade-in duration-700">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter italic leading-none">
              Directorio <span className="text-blue-600">Pacientes</span>
            </h2>
            <p className="text-slate-400 font-black uppercase text-[8px] tracking-[0.4em] mt-2">Base de Datos Fiscal HN</p>
          </div>
          
          <button 
            onClick={() => setShowModal(true)} 
            className="group relative p-[1px] rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/10 mt-6 md:mt-0"
          >
            <div className="bg-slate-900 group-hover:bg-transparent text-white px-6 py-3 rounded-[0.7rem] font-black text-[10px] uppercase tracking-widest transition-all">
              + Nuevo Registro
            </div>
          </button>
        </div>

        {/* Grid de Pacientes con Tarjetas más Legibles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {lista.map((c, index) => (
            <div 
              key={c.id} 
              style={{ animationDelay: `${index * 50}ms` }}
              className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group animate-in fade-in zoom-in-95 fill-mode-both"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center text-lg font-black border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  {c.nombre.charAt(0)}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(c)} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-100">
                    <span className="text-xs">✏️</span>
                  </button>
                  <button onClick={() => { setLista(lista.filter(x => x.id !== c.id)); showAlert("Registro eliminado"); }} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors border border-slate-100">
                    <span className="text-xs">🗑️</span>
                  </button>
                </div>
              </div>
              
              <h3 className="font-black text-slate-900 text-base tracking-tight leading-tight mb-3 group-hover:text-blue-600 transition-colors truncate">
                {c.nombre}
              </h3>
              
              <div className="pt-3 border-t border-slate-50">
                <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">RTN FISCAL</p>
                <p className="text-[11px] font-bold text-slate-600 font-mono bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 inline-block w-full text-center">
                  {c.rtn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Optimizado */}
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-[2.5rem] p-10 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-300 border border-slate-100">
              <h3 className="text-2xl font-black mb-8 text-slate-900 tracking-tighter italic text-center">
                {editId ? 'Actualizar' : 'Nuevo'} <span className="text-blue-600">Paciente</span>
              </h3>
              
              <form onSubmit={guardar} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Nombre del Paciente</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Juan Pérez..."
                    value={form.nombre} 
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-blue-500 transition-all font-bold text-slate-700 text-sm" 
                    onChange={(e) => setForm({...form, nombre: e.target.value})} 
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-end px-1">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">RTN (14 Dígitos)</label>
                    <span className="text-[9px] font-bold text-blue-500 font-mono">
                      {form.rtn.replace(/-/g, '').length}/14
                    </span>
                  </div>
                  <input 
                    type="text" 
                    placeholder="0000-0000-000000" 
                    required 
                    value={form.rtn} 
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none font-mono font-bold text-slate-700 text-sm focus:bg-white focus:border-blue-500 transition-all" 
                    onChange={(e) => setForm({...form, rtn: formatRTN(e.target.value)})} 
                  />
                </div>
                
                <div className="pt-4 space-y-3">
                  <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 transition-all shadow-lg">
                    {editId ? 'Guardar Cambios' : 'Confirmar Registro'}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => { setShowModal(false); setEditId(null); setForm({nombre:'', rtn:''}); }} 
                    className="w-full text-slate-400 font-black text-[9px] uppercase tracking-widest hover:text-red-500 transition-colors"
                  >
                    Descartar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}