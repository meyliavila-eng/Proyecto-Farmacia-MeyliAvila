import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <span className="text-green-600 font-bold text-sm tracking-widest uppercase">Paso 1: Registro</span>
          <h1 className="text-5xl font-black text-gray-900 mt-4">
            Digitaliza tu <br />
            <span className="text-green-600">inventario médico.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-500">
            Únete a la red de farmacias que ya automatizaron su control de stock y cumplimiento legal en Honduras.
          </p>
        </div>

        <div className="bg-gray-50 p-10 rounded-[3rem] border border-green-50 shadow-xl shadow-green-900/5">
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Nombre de Farmacia</label>
                <input required className="w-full p-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-green-500 outline-none" placeholder="FarmaPlus" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">RTN Numérico</label>
                <input required className="w-full p-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-green-500 outline-none" placeholder="0801..." />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Ciudad</label>
              <select className="w-full p-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-green-500 outline-none bg-white">
                <option>Tegucigalpa</option>
                <option>San Pedro Sula</option>
                <option>La Ceiba</option>
                <option>Choluteca</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Correo Profesional</label>
              <input type="email" required className="w-full p-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-green-500 outline-none" placeholder="admin@farmacia.com" />
            </div>

            <button className="w-full py-5 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 shadow-lg shadow-green-100 transition-all">
              Crear Cuenta de Administrador
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}