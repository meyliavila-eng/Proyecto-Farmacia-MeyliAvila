import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 text-center">
        <h1 className="text-4xl font-black text-gray-900">Contacto FarmaControl</h1>
        <p className="mt-4 text-gray-500">Soporte técnico para farmacias en Honduras.</p>
        <p className="font-bold text-green-600 mt-2">📧 soporte@farmacontrol.hn</p>
      </div>
    </div>
  );
}