import React from 'react';
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: "Ventas Hoy", value: "L. 8,420.00", icon: "💊", color: "text-green-600", path: null },
    { label: "Productos", value: "312", icon: "📦", color: "text-blue-600", path: "/inventario" },
    { label: "Vencimientos", value: "5", icon: "⚠️", color: "text-red-600", path: "/inventario" },
    { label: "Recetas", value: "14", icon: "📑", color: "text-purple-600", path: null },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-32">
        {/* Encabezado con saludo */}
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Panel de Control</h1>
            <p className="text-gray-500 mt-1 font-medium">Bienvenido a FarmaControl, sucursal Tegucigalpa.</p>
          </div>
          <div className="hidden md:block text-right text-sm font-bold text-gray-400">
            {new Date().toLocaleDateString('es-HN', { weekday: 'long', day: 'numeric', month: 'long' })}
          </div>
        </div>

        {/* Grid de Métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              onClick={() => stat.path && navigate(stat.path)}
              className={`bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm transition-all ${
                stat.path ? "cursor-pointer hover:border-green-300 hover:shadow-md" : ""
              }`}
            >
              <div className="text-3xl mb-4 bg-gray-50 w-14 h-14 flex items-center justify-center rounded-2xl">
                {stat.icon}
              </div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
              <p className={`text-2xl font-black mt-1 ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Sección de Actividad Reciente */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Tabla de Ventas (2 columnas) */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Últimas Dispensaciones</h2>
              <button className="text-green-600 font-bold text-sm hover:underline">Ver historial</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50/50 text-gray-400 text-[10px] uppercase font-black tracking-widest">
                  <tr>
                    <th className="px-8 py-4">Medicamento</th>
                    <th className="px-8 py-4">Hora</th>
                    <th className="px-8 py-4">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { med: "Ibuprofeno 600mg", time: "14:20", price: "L. 120.00" },
                    { med: "Vitamina C (Z-C)", time: "13:45", price: "L. 250.00" },
                    { med: "Amoxicilina Suspensión", time: "12:10", price: "L. 410.00" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-green-50/30 transition-colors">
                      <td className="px-8 py-5 font-bold text-gray-700">{row.med}</td>
                      <td className="px-8 py-5 text-gray-400 text-sm">{row.time}</td>
                      <td className="px-8 py-5 font-black text-gray-900">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Alertas de Inventario (1 columna) */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-red-100 shadow-sm shadow-red-100/20">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-red-500">⚠️</span> Alertas Críticas
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                <p className="text-xs font-bold text-red-400 uppercase">Vencimiento Próximo</p>
                <p className="font-bold text-gray-800">Insulina Humana</p>
                <p className="text-xs text-red-600 mt-1 italic text-right">Exp: 20/05/2026</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                <p className="text-xs font-bold text-orange-400 uppercase">Stock Agotado</p>
                <p className="font-bold text-gray-800">Paracetamol 1g</p>
                <p className="text-xs text-orange-600 mt-1 text-right">0 unidades</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}