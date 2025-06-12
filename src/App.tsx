import React from 'react';
import { 
  Store, 
  Wifi, 
  Server, 
  Monitor, 
  Settings, 
  FileSpreadsheet,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Package,
  Printer
} from 'lucide-react';

function App() {
  const whatsappUrl = "https://wa.me/543834997640";

  const handlePlanClick = (planName: string) => {
    const message = `¡Hola! Me interesa el ${planName} de Kioskos Del Futuro. ¿Podrían darme más información?`;
    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCTAClick = () => {
    const message = "¡Hola! Quiero probar el sistema Kioskos Del Futuro. ¿Cómo empiezo?";
    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-2 rounded-lg">
                <Store className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                  Kioskos Del Futuro
                </h1>
                <p className="text-sm text-gray-600">Sistema de gestión inteligente</p>
              </div>
            </div>
            <button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Probar Gratis
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              🚀 El sistema que revoluciona tu kiosco
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Tu Kiosco
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent block">
              Más Inteligente
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Llevá tu kiosco al siguiente nivel con el sistema más simple y completo del mercado. 
            <strong className="text-sky-600"> Sin complicaciones, sin costos ocultos.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Empezar Ahora</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-gray-600">
              ⚡ <strong>Sin tarjeta de crédito</strong> • Soporte 24/7
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-sky-600 mb-2">500+</div>
              <div className="text-gray-700">Kioscos conectados</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-700">Tiempo activo</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-700">Soporte técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Por qué elegir
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent"> Kioskos Del Futuro</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diseñado especialmente para kioscos argentinos, con todas las funciones que realmente necesitás
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-sky-500 p-3 rounded-full w-fit mb-6">
                <Wifi className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sin Internet Permanente</h3>
              <p className="text-gray-700">
                Trabajá tranquilo aunque se corte la conexión. El sistema funciona offline y sincroniza cuando vuelve el internet.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-green-500 p-3 rounded-full w-fit mb-6">
                <Server className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sin Costos de Servidor</h3>
              <p className="text-gray-700">
                Olvidate de pagar hosting mensual o mantener servidores. Todo funciona desde tu computadora.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-orange-500 p-3 rounded-full w-fit mb-6">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Carga Masiva de Productos</h3>
              <p className="text-gray-700">
                Cargá todos tus productos de una vez con códigos de barras. Simple, rápido y sin errores.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-purple-500 p-3 rounded-full w-fit mb-6">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sistema Completo y Fácil</h3>
              <p className="text-gray-700">
                Control total de tu kiosco: inventario, ventas, clientes, proveedores. Todo en un solo lugar.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-teal-500 p-3 rounded-full w-fit mb-6">
                <FileSpreadsheet className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exportá a Excel</h3>
              <p className="text-gray-700">
                Todos tus reportes y datos se exportan a Excel para que los manejes como te resulte más cómodo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-rose-500 p-3 rounded-full w-fit mb-6">
                <Printer className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sistema de Impresión</h3>
              <p className="text-gray-700">
                Imprimí tickets para tus clientes. Organizá mejor tu negocio con comprobantes claros y profesionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Elegí el plan que
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"> se adapte a vos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tres opciones pensadas para diferentes necesidades. Todos los planes incluyen las mismas funciones completas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Mensual */}
            <div className="bg-white rounded-3xl shadow-xl p-8 relative hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center mb-8">
                <div className="bg-sky-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Zap className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Mensual</h3>
                <p className="text-gray-600 mb-6">Pagás mes a mes sin compromiso</p>
                <div className="text-5xl font-bold text-sky-600 mb-2">$15.000</div>
                <p className="text-gray-500">por mes</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Sistema completo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Soporte técnico 24/7</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Actualizaciones incluidas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Sin permanencia</span>
                </li>
              </ul>

              <button
                onClick={() => handlePlanClick('Plan Mensual')}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Quiero este plan
              </button>
            </div>

            {/* Plan Semestral */}
            <div className="bg-white rounded-3xl shadow-xl p-8 relative hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-green-500 mt-0 md:mt-8 lg:mt-0">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                  🔥 MÁS POPULAR
                </span>
              </div>
              
              <div className="text-center mb-8 pt-4">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Semestral</h3>
                <p className="text-gray-600 mb-6">Pagás 6 meses juntos con descuento</p>
                <div className="text-5xl font-bold text-green-600 mb-2">$60.000</div>
                <p className="text-gray-500">6 meses</p>
                <p className="text-sm text-green-600 font-semibold mt-2">Ahorrás $30.000</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Sistema completo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Soporte técnico 24/7</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Actualizaciones incluidas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Sin permanencia</span>
                </li>
              </ul>

              <button
                onClick={() => handlePlanClick('Plan Semestral')}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Quiero este plan
              </button>
            </div>

            {/* Plan VIP */}
            <div className="bg-white rounded-3xl shadow-xl p-8 relative hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center mb-8">
                <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan VIP</h3>
                <p className="text-gray-600 mb-6">Pagás una sola vez y usás el sistema por 3 a 5 años</p>
                <div className="text-5xl font-bold text-orange-600 mb-2">$400.000</div>
                <p className="text-gray-500">pago único</p>
                <p className="text-sm text-orange-600 font-semibold mt-2">Mejor inversión a largo plazo</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Sistema completo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Soporte técnico 24/7</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Actualizaciones incluidas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 font-semibold">3-5 años de uso</span>
                </li>
              </ul>

              <button
                onClick={() => handlePlanClick('Plan VIP')}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-orange-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Quiero este plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Tu kiosco también merece un sistema
            <span className="block text-yellow-300">simple, barato y efectivo</span>
          </h2>
          
          <p className="text-xl text-sky-100 mb-12 max-w-3xl mx-auto">
            Unite a los cientos de kioskeros que ya transformaron su negocio. 
            Sin complicaciones, sin sorpresas, solo resultados.
          </p>

          <button
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center space-x-3 mx-auto"
          >
            <span>Probar el sistema ahora</span>
            <ArrowRight className="h-8 w-8" />
          </button>

          <p className="text-sky-200 mt-6">
            ⚡ Respuesta inmediata por WhatsApp • Sin compromisos
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-2 rounded-lg">
                <Store className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Kioskos Del Futuro</h3>
                <p className="text-gray-400">Sistema de gestión inteligente</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6">
              Revolucionando la gestión de kioscos en toda Argentina
            </p>
            
            <div className="text-gray-500 text-sm">
              © 2024 Kioskos Del Futuro. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;