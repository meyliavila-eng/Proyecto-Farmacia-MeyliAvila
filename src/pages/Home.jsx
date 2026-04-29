import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 scroll-smooth selection:bg-green-100 selection:text-green-800">
      <Navbar />
      
      <main className="pt-16 md:pt-20">
        
        {/* SECCIÓN HERO (Integrada directamente para evitar errores de import) */}
        <section className="relative w-full overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-green-600 uppercase bg-green-50 rounded-full">
                Sistema Farmacéutico Hondureño
              </span>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] text-gray-900">
                Tu Farmacia, <br />
                <span className="text-green-600">bajo control.</span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-relaxed max-w-xl">
                Gestiona inventarios, controla fechas de vencimiento y optimiza tus ventas con la plataforma líder para farmacias en Honduras.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/registro" className="px-8 py-4 rounded-2xl bg-green-600 text-white font-bold text-lg text-center shadow-lg shadow-green-200 hover:bg-green-700 transition-all">
                  Comenzar Gratis
                </Link>
                <Link to="/contacto" className="px-8 py-4 rounded-2xl bg-gray-100 text-gray-700 font-bold text-lg text-center hover:bg-gray-200 transition-all">
                  Saber más
                </Link>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="bg-green-50 rounded-[3rem] p-12 aspect-square flex items-center justify-center">
                <span className="text-[12rem]">💊</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN FEATURES (Funciones clave) */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-black mb-16">Especializado en <span className="text-green-600">Salud.</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "Control de Lotes", d: "Rastreo preciso de procedencia y lotes de entrada.", i: "🔬" },
                { t: "Vencimientos", d: "Alertas inteligentes antes de que tus medicinas expiren.", i: "📅" },
                { t: "Punto de Venta", d: "Facturación rápida con cumplimiento legal del SAR.", i: "⚡" }
              ].map((f, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all">
                  <div className="text-4xl mb-6">{f.i}</div>
                  <h3 className="text-xl font-bold mb-4">{f.t}</h3>
                  <p className="text-gray-500">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN PRICING (Simplificada) */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-6">Planes para cada farmacia</h2>
            <p className="text-gray-500 mb-12">Desde farmacias de barrio hasta grandes cadenas locales.</p>
            <Link to="/precios" className="inline-block px-10 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-green-600 transition-all">
              Ver todos los precios
            </Link>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
}