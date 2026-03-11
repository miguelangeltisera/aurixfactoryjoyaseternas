import { MessageCircle, ArrowLeft, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

/**
 * AURIX JOYAS ETERNAS - Página Anillos
 * 
 * Diseño: Elegancia Minimalista Moderna
 * - Tipografía: Playfair Display (títulos), Lato (cuerpo)
 * - Colores: Blanco puro, Oro champagne (#D4AF37), Verde esmeralda (#1F5C3D)
 * - Carrusel: Imágenes de anillos con descripción debajo al hacer clic
 */

export default function Anillos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<number | null>(null);

  const carouselImages = [
    { 
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/1772218628864_75bc89c8.png', 
      alt: 'Anillo de Oro Clásico',
      title: 'Anillo Clásico',
      description: 'Anillo de oro 18 quilates con diamantes redondos. Diseño atemporal perfecto para cualquier ocasión. Acabado pulido espejo.'
    },
    { 
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/1772635877705_0d936c33.png', 
      alt: 'Anillo con Diamantes',
      title: 'Anillo Diamantes',
      description: 'Anillo de oro rosado con diamantes baguette y redondos. Diseño moderno y elegante. Personalizable bajo pedido.'
    },
    { 
      src: '/anillo-bagets.jpg', 
      alt: 'Anillo con Bagets',
      title: 'Anillo Bagets',
      description: 'Anillo de oro con diamantes baguette. Estilo contemporáneo con acabado espejo. Disponible en diferentes tamaños.'
    },
    { 
      src: '/anillo-bagets-cruzado.jpg', 
      alt: 'Anillo con Bagets Cruzado',
      title: 'Anillo Bagets Cruzado',
      description: 'Anillo de oro con diamantes baguette cruzados. Diseño exclusivo y sofisticado. Personalización disponible.'
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
  const whatsappMessage = "Hola, me interesa conocer más sobre los anillos.";
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
            <Link href="/">
              <a className="h-24 md:h-20 w-auto max-w-full">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/17728389959a4f_cbb7f46e.png"
                  alt="Aurix Joyas Eternas Logo"
                  className="h-24 md:h-20 w-auto max-w-full"
                />
              </a>
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

      {/* Contenido Principal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="emerald-accent">Colección de Anillos</span>
            </h1>

            {/* Carrusel de Imágenes */}
            <div className="mb-16">
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gold-accent border-opacity-20 overflow-hidden">
                {/* Imagen del Carrusel */}
                <div className="relative h-96 md:h-full flex items-center justify-center cursor-pointer" onClick={() => setSelectedSlide(selectedSlide === currentSlide ? null : currentSlide)}>
                  <img
                    src={carouselImages[currentSlide].src}
                    alt={carouselImages[currentSlide].alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Descripción debajo de la imagen */}
                {selectedSlide === currentSlide && (
                  <div className="mt-6 p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
                    <h3 className="text-2xl font-bold mb-3 text-emerald-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {carouselImages[currentSlide].title}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {carouselImages[currentSlide].description}
                    </p>
                  </div>
                )}

                {/* Botones de Navegación en la parte inferior */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                  <button
                    onClick={prevSlide}
                    className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </button>
                </div>

                {/* Indicadores */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentSlide(index);
                        setSelectedSlide(null);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-gold-accent w-8'
                          : 'bg-gray-400 w-2 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>

                {/* Folio 3D */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-gold-accent to-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg" style={{ perspective: '1000px', transform: 'rotateY(-5deg)' }}>
                  <span className="inline-block">{currentSlide + 1} / {carouselImages.length}</span>
                </div>
              </div>
            </div>

            {/* Botón WhatsApp */}
            <div className="flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/IMG_20260308_100202_5b02f38b.png"
                alt="Aurix Factory Logo"
                className="h-4 w-auto"
              />
              <p className="text-gray-400 text-sm">Joyas Eternas - Aurix Factory</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">© 2026 Aurix Factory. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
