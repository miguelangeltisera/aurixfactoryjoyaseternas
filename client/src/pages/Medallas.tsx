import { MessageCircle, Menu, X, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

/**
 * AURIX JOYAS ETERNAS - Página Medallas
 * 
 * Diseño: Elegancia Minimalista Moderna
 * - Tipografía: Playfair Display (títulos), Lato (cuerpo)
 * - Colores: Blanco puro, Oro champagne (#D4AF37), Verde esmeralda (#1F5C3D)
 * - Carrusel: Imágenes de medallas con texto descriptivo
 */

export default function Medallas() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<number | null>(null);

  const carouselImages = [
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/1000332127_4f6fb70e.png',
      alt: 'Medalla de Oro Personalizada',
      title: 'Medalla Clásica',
      description: 'Medalla de oro 18 quilates con cadena. Personalizable con grabado. Acabado pulido espejo. Ideal para regalos especiales.'
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/1772636861950_66471036.png',
      alt: 'Medalla de Ágata Oro 18k',
      title: 'Medalla de Ágata',
      description: 'Medalla de Ágata Oro 18 k. Diseño religioso con ágata azul. Acabado pulido espejo. Cadena incluida.'
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/1000332127_4f6fb70e.png',
      alt: 'Medalla de Agatha Oro 18k',
      title: 'Medalla de Agatha',
      description: 'Medalla de Agatha oro 18 k. Diseño religioso con acabado espejo. Marco de oro pulido. Cadena incluida.'
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/1772636861950_66471036.png',
      alt: 'Medalla Conmemorativa',
      title: 'Medalla Conmemorativa',
      description: 'Medalla conmemorativa en oro. Perfecta para eventos especiales. Diseño exclusivo personalizado.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setSelectedSlide(null);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setSelectedSlide(null);
  };

  const whatsappNumber = "04169110641";
  const whatsappMessage = "Hola, me interesa conocer más sobre las medallas de oro.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 border-b border-gray-200" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container mx-auto px-4 py-3">
          {/* Header superior con menu hamburguesa */}
          <div className="flex justify-between items-center md:justify-center mb-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gold-accent transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="flex-1" />
          </div>

          {/* Menu movil desplegable */}
          {isMenuOpen && (
            <nav className="md:hidden mb-4 bg-white border border-gray-200 rounded-lg p-4 space-y-3">
              <div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gold-accent uppercase tracking-widest mb-3">Nuestras Colecciones</p>
                  <div className="space-y-2 pl-4 border-l-2 border-gold-accent">
                  <Link href="/zarcillos">
                    <a
                      className="block text-gray-700 hover:text-gold-accent transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Zarcillos
                    </a>
                  </Link>
                  <Link href="/anillos">
                    <a
                      className="block text-gray-700 hover:text-gold-accent transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Anillos
                    </a>
                  </Link>
                  <Link href="/medallas">
                    <a
                      className="block text-gray-700 hover:text-gold-accent transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Medallas
                    </a>
                  </Link>
                  <Link href="/regalos">
                    <a
                      className="block text-gray-700 hover:text-gold-accent transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Regalos
                    </a>
                  </Link>
                  </div>
                </div>
              </div>
            </nav>
          )}

          {/* Logo y slogan centrados - Reducido 30% */}
          <div className="flex flex-col items-center justify-center gap-1">
            <Link href="/" className="h-24 md:h-20 w-auto max-w-full">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/17728389959a4f_cbb7f46e.png"
                alt="Aurix Joyas Eternas Logo"
                className="h-24 md:h-20 w-auto max-w-full"
              />
            </Link>
            <p className="text-gold-accent text-lg md:text-base mt-1" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Joyas Eternas
            </p>
            <nav className="flex flex-col md:flex-row gap-3 md:gap-4 md:gap-6 text-xs md:text-sm mt-2 items-center">
              <Link href="/">
                <a className="text-gray-700 hover:text-gold-accent transition-colors flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Inicio
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="emerald-accent">Medallas</span> de Oro
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Medallas exclusivas en oro de alta calidad. Cada pieza es un símbolo de elegancia y distinción.
            </p>
          </div>

          {/* Carrusel */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Imagen del carrusel */}
              <div className="relative h-96 md:h-[500px] bg-gray-100 flex items-center justify-center">
                <img
                  src={carouselImages[currentSlide].src}
                  alt={carouselImages[currentSlide].alt}
                  className="w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedSlide(currentSlide === selectedSlide ? null : currentSlide)}
                />
              </div>

              {/* Información debajo de la imagen */}
              {selectedSlide === currentSlide && (
                <div className="p-6 bg-gradient-to-r from-gold-accent to-gold-accent bg-opacity-5 border-t-2 border-gold-accent">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {carouselImages[currentSlide].title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {carouselImages[currentSlide].description}
                  </p>
                </div>
              )}

              {/* Botones de navegación */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gold-accent hover:bg-opacity-90 text-white p-2 rounded-full transition-all shadow-lg"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gold-accent hover:bg-opacity-90 text-white p-2 rounded-full transition-all shadow-lg"
              >
                →
              </button>

              {/* Indicador de folio 3D */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-accent via-yellow-400 to-gold-accent bg-clip-text text-transparent font-bold text-lg drop-shadow-lg">
                {currentSlide + 1} / {carouselImages.length}
              </div>
            </div>

            {/* Instrucción */}
            <p className="text-center text-gray-600 mt-4 text-sm">
              Haz clic en la imagen para ver detalles del producto
            </p>
          </div>

          {/* Galería de Medallas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="product-card p-8 text-center border border-gold-accent border-opacity-30 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="emerald-accent">Medallas Religiosas</span>
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Medallas religiosas en oro 18 quilates. Diseños clásicos y elegantes para expresar tu fe.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 emerald-bg text-white font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Consultar
              </a>
            </div>

            <div className="product-card p-8 text-center border border-gold-accent border-opacity-30 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="emerald-accent">Medallas Deportivas</span>
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Medallas deportivas personalizadas en oro y plata. Perfectas para competencias y eventos.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 emerald-bg text-white font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Consultar
              </a>
            </div>

            <div className="product-card p-8 text-center border border-gold-accent border-opacity-30 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="emerald-accent">Medallas Personalizadas</span>
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Crea tu medalla única con grabados especiales. Diseños exclusivos para momentos inolvidables.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 emerald-bg text-white font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Consultar
              </a>
            </div>

            <div className="product-card p-8 text-center border border-gold-accent border-opacity-30 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="text-5xl mb-4">🎖️</div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="emerald-accent">Medallas Conmemorativas</span>
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Medallas conmemorativas en oro. Ideales para eventos especiales y celebraciones importantes.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 emerald-bg text-white font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Consultar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            ¿Buscas una medalla especial?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos para crear la medalla de tus sueños. Nuestro equipo de expertos está listo para hacer realidad tu visión.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 emerald-bg text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Logo centrado */}
          <div className="flex flex-col items-center mb-12">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/IMG_20260308_100202_5b02f38b.png"
              alt="Aurix Joyas Eternas Logo"
              className="h-8 w-auto mb-3"
            />
            <p className="text-gold-accent font-montserrat tracking-widest text-base">JOYAS ETERNAS</p>

            {/* Información de contacto */}
            <div className="mt-8 text-center text-gray-400">
              <p className="mb-2">📞 +58 416 911 0641</p>
              <p className="mb-2">📧 info@aurixjoyas.com</p>
              <p>📍 Venezuela</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Aurix Joyas Eternas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

