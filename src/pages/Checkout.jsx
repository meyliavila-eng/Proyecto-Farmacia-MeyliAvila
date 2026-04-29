import React, { useState } from 'react';
import Navbar from "../components/Navbar";

export default function Checkout() {
  // 1. Definimos el carrito inicial
  const [cart, setCart] = useState([
    { id: 1, name: "Paracetamol 500mg", price: 5.00, qty: 10 },
    { id: 2, name: "Amoxicilina Suspensión", price: 180.00, qty: 1 },
  ]);

  // 2. Cálculos (Se ejecutan en cada renderizado)
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const isv = subtotal * 0.15;
  const total = subtotal + isv;

  // 3. Función para limpiar el carrito (opcional para probar)
  const finalizarVenta = () => {
    alert("¡Venta procesada con éxito! Imprimiendo factura...");
    setCart([]); // Esto vacía el carrito después de la venta
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-3 gap-8">
        
        {/* LADO IZQUIERDO: PRODUCTOS */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-2">
              <span className="bg-green-100 p-2 rounded-lg">🛒</span> Nueva Venta
            </h2>

            <div className="space-y-4">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100">
                    <div>
                      <p className="font-black text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-400">{item.qty} unidades x L. {item.price.toFixed(2)}</p>
                    </div>
                    <p className="font-black text-gray-900 text-lg">
                      L. {(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center py-10 text-gray-400 font-bold italic">El carrito está vacío</p>
              )}
            </div>
          </div>
        </div>

        {/* LADO DERECHO: TOTALES */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 h-fit sticky top-32">
          <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Resumen de Cobro</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-gray-500 font-medium">
              <span>Subtotal</span>
              <span>L. {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500 font-medium">
              <span>ISV (15%)</span>
              <span>L. {isv.toFixed(2)}</span>
            </div>
            <div className="pt-4 border-t border-gray-100 flex justify-between text-3xl font-black text-gray-900">
              <span>Total</span>
              <span className="text-green-600">L. {total.toFixed(2)}</span>
            </div>
          </div>

          <button 
            onClick={finalizarVenta}
            disabled={cart.length === 0}
            className={`w-full py-5 rounded-2xl font-black shadow-lg transition-all transform active:scale-95 ${
              cart.length > 0 
                ? "bg-green-600 text-white shadow-green-200 hover:bg-green-700" 
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            CONFIRMAR PAGO
          </button>
          
          <p className="text-[10px] text-center text-gray-400 mt-6 font-bold uppercase tracking-widest">
            FarmaControl POS v1.0
          </p>
        </div>

      </main>
    </div>
  );
}