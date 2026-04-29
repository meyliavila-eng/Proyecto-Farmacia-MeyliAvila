import React, { useState } from 'react';
import Navbar from "../components/Navbar";

export default function Inventory() {
  // Datos simulados de una farmacia real
  const [medicamentos] = useState([
    { id: 1, nombre: "Amoxicilina 500mg", categoria: "Antibiótico", stock: 45, vencimiento: "2026-08-15", lote: "L-9923", estado: "Disponible" },
    { id: 2, nombre: "Paracetamol 1g", categoria: "Analgésico", stock: 12, vencimiento: "2026-12-01", lote: "L-4412", estado: "Bajo Stock" },
    { id: 3, nombre: "Insulina Humana", categoria: "Diabetes", stock: 5, vencimiento: "2026-05-20", lote: "L-0021", estado: "Crítico" },
    { id: 4, nombre: "Loratadina 10mg", categoria: "Antihistamínico", stock: 80, vencimiento: "2027-01-10", lote: "L-1156", estado: "Disponible" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-32">
        {/* Cabecera de Inventario */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Inventario de Medicamentos</h1>
            <p className="text-gray-500">Gestión de lotes y fechas de caducidad.</p>
          </div>
          <button className="px-6 py-3 bg-green-600 text-white font-bold rounded-2xl shadow-lg shadow-green-200 hover:bg-green-700 transition-all flex items-center gap-2">
            <span>+</span> Añadir Medicamento
          </button>
        </div>

        {/* Buscador y Filtros Rápidos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <input 
            type="text" 
            placeholder="Buscar por nombre o lote..." 
            className="col-span-2 p-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-green-500 outline-none bg-white shadow-sm"
          />
          <select className="p-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-green-500 outline-none bg-white shadow-sm font-bold text-gray-600 text-sm">
            <option>Todas las categorías</option>
            <option>Antibióticos</option>
            <option>Analgésicos</option>
            <option>Controlados</option>
          </select>
        </div>

        {/* Tabla de Productos */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-400 text-xs uppercase font-black tracking-widest">
                  <th className="px-8 py-5">Medicamento / Lote</th>
                  <th className="px-8 py-5">Categoría</th>
                  <th className="px-8 py-5">Stock Actual</th>
                  <th className="px-8 py-5">Vencimiento</th>
                  <th className="px-8 py-5 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {medicamentos.map((med) => (
                  <tr key={med.id} className="hover:bg-green-50/30 transition-colors group">
                    <td className="px-8 py-6">
                      <p className="font-bold text-gray-800">{med.nombre}</p>
                      <p className="text-xs text-gray-400 font-mono">{med.lote}</p>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-lg">{med.categoria}</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <span className={`text-lg font-black ${
                          med.stock < 10 ? 'text-red-600' : 'text-gray-900'
                        }`}>{med.stock}</span>
                        <span className="text-xs text-gray-400 font-bold uppercase">unidades</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-500">
                      {med.vencimiento}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-gray-400 hover:text-green-600 font-bold text-sm transition-colors">Editar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}