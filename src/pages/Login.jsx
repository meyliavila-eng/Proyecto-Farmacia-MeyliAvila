import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simulación de validación (Lógica de Negocio - Clase 3)
    if (email === 'admin@farmacia.hn' && password === '123456') {
      alert("Acceso concedido. Bienvenido al sistema.");
      navigate('/dashboard');
    } else {
      alert("Credenciales incorrectas. Intente con admin@farmacia.hn / 123456");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-green-100">
        <div className="p-10 md:p-12">
          {/* Logo y Encabezado */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-2xl text-white text-3xl font-black mb-4 shadow-lg shadow-green-200">
              +
            </div>
            <h1 className="text-3xl font-black text-gray-900">Farma<span className="text-green-600">Control</span></h1>
            <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-2">Acceso al Panel Administrativo</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-black text-gray-700 mb-2 ml-1">Correo Institucional</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="usuario@farmacia.hn"
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-green-500 focus:bg-white outline-none transition-all font-medium"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-black text-gray-700 mb-2 ml-1">Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-green-500 focus:bg-white outline-none transition-all font-medium"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-green-600 transition-all transform active:scale-95 shadow-xl shadow-gray-200"
            >
              ENTRAR AL SISTEMA
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link to="/" className="text-sm font-bold text-gray-400 hover:text-green-600 transition-colors">
              ← Volver al portal público
            </Link>
          </div>
        </div>
        
        <div className="bg-gray-50 py-6 text-center border-t border-gray-100">
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-tighter">
            Sistema de Gestión Farmacéutica Protegido v1.0
          </p>
        </div>
      </div>
    </div>
  );
}