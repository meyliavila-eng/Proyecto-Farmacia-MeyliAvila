import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/menu');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center p-6 font-sans overflow-hidden relative">
      
      {/* Fondo con Manchas de Color Orgánicas (Aura Design) */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200/50 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-100/60 rounded-full blur-[130px]"></div>
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-purple-100/40 rounded-full blur-[100px]"></div>

      <div className="w-full max-w-[450px] relative">
        
        {/* Tarjeta de Cristal (Glassmorphism) */}
        <div className="bg-white/70 backdrop-blur-2xl rounded-[3.5rem] p-12 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-white/80 relative overflow-hidden">
          
          {/* Brillo en la parte superior del cristal */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-100"></div>

          {/* Header */}
          <div className="text-center mb-12 relative">
            <div className="w-20 h-20 bg-slate-900 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-slate-900/20 transform -rotate-3 hover:rotate-0 transition-all duration-500">
              <span className="text-white text-3xl font-black italic">FC</span>
            </div>
            
            <h1 className="text-4xl font-black text-slate-800 tracking-tighter mb-2">
              Farma<span className="text-blue-600">control</span>
            </h1>
            <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em]">
              Portal de Gestión • 2026
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 relative">
            {/* Input Estilo Minimalista Soft */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-5 tracking-widest">Cuenta de Usuario</label>
              <input 
                type="email" 
                required
                placeholder="admin@farmacontrol.hn"
                className="w-full px-7 py-5 bg-white/50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-700 font-bold placeholder:text-slate-300 shadow-sm"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-5 tracking-widest">Contraseña Segura</label>
              <input 
                type="password" 
                required
                placeholder="••••••••"
                className="w-full px-7 py-5 bg-white/50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-700 font-bold placeholder:text-slate-300 shadow-sm"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Botón con Gradiente Azul */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "Acceder al Panel"
              )}
            </button>
          </form>

          {/* Footer del Formulario */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-3 opacity-30">
                <span className="w-8 h-[1px] bg-slate-400"></span>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Honduras Tech</p>
                <span className="w-8 h-[1px] bg-slate-400"></span>
            </div>
          </div>
        </div>

        {/* Info extra bajo el panel */}
        <div className="mt-10 flex justify-center gap-10 text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-60">
            <span className="hover:text-blue-500 cursor-pointer transition-colors">Términos</span>
            <span className="hover:text-blue-500 cursor-pointer transition-colors">Privacidad</span>
            <span className="hover:text-blue-500 cursor-pointer transition-colors">Soporte</span>
        </div>
      </div>
    </div>
  );
}