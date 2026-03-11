import { MessageCircle, Menu, X, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * AURIX JOYAS ETERNAS - Página Regalos
 * 
 * Diseño: Elegancia Minimalista Moderna
 * - Tipografía: Playfair Display (títulos), Lato (cuerpo)
 * - Colores: Blanco puro, Oro champagne (#D4AF37), Verde esmeralda (#1F5C3D)
 */

export default function Regalos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState<number | null>(null);

  const whatsappNumber = "04169110641";
  const whatsappMessage = "Hola, me interesa conocer más sobre los regalos personalizados.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const slides = [
    {
      image: "https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/1772837902270a_13b427d2.png",
      title: "Collar de Perlas Elegante",
      description: "Collar de perlas cultivadas de agua dulce. Material: Oro 18K. Longitud: 45cm. Perfecto para regalos especiales."
    },
    {
      image: "https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/modelomedalaagatha.png.jpg",
      title: "Medalla de Ágata",
      description: "Medalla de ágata azul con marco de oro 18K. Diseño clásico y elegante. Ideal para ocasiones especiales."
    },
    {
      image: "https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/1772635877705_662d5ec2.png",
      title: "Anillo de Diamantes",
      description: "Anillo de oro rosado 18K con diamantes baguette. Diseño moderno y sofisticado. Garantía de autenticidad."
    },
    {
      image: "https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/1772632584278_662d5ec2.png",
      title: "Zarcillos de Oro Texturado",
      description: "Zarcillos de oro 18K con textura artesanal y diamantes. Diseño exclusivo y elegante. Peso: 8.5g."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setSelectedSlide(null);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setSelectedSlide(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 border-b border-gray-200" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container mx-auto px-4 py-8">
          {/* Header superior con menú hamburguesa */}
          <div className="flex justify-between items-center md:justify-center mb-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gold-accent transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="flex-1" />
          </div>

          {/* Menú móvil desplegable */}
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

          {/* Logo y slogan centrados - Reducido 25% */}
          <div className="flex flex-col items-center justify-center gap-2">
            <Link href="/">
              <a className="h-36 md:h-30 w-auto max-w-full">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/17728389959a4f_cbb7f46e.png"
                  alt="Aurix Joyas Eternas Logo"
                  className="h-36 md:h-30 w-auto max-w-full"
                />
              </a>
            </Link>
            <p className="text-gold-accent text-xl md:text-lg mt-2" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Joyas Eternas
            </p>
            <nav className="flex flex-col md:flex-row gap-4 md:gap-6 md:gap-8 text-sm md:text-base mt-4 items-center">
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
              <span className="emerald-accent">Regalos</span> Personalizados
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Crea momentos inolvidables con nuestras joyas personalizadas. Cada regalo es una expresión única de amor y elegancia.
            </p>
          </div>

          {/* Carrusel de Regalos */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Imagen del carrusel */}
              <div className="relative h-96 md:h-[500px] bg-gray-100 flex items-center justify-center">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedSlide(currentSlide === selectedSlide ? null : currentSlide)}
                />
              </div>

              {/* Información debajo de la imagen */}
              {selectedSlide === currentSlide && (
                <div className="p-6 bg-gradient-to-r from-gold-accent to-gold-accent bg-opacity-5 border-t-2 border-gold-accent">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {slides[currentSlide].description}
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
                {currentSlide + 1} / {slides.length}
              </div>
            </div>

            {/* Instrucción */}
            <p className="text-center text-gray-600 mt-4 text-sm">
              Haz clic en la imagen para ver detalles del producto
            </p>
          </div>

          {/* Regalos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Regalos para Bodas */}
            <div className="product-card p-8 text-center border border-gold-accent border-opacity-30 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="text-5xl mb-4">💍</div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="emerald-accent">Regalos para Bodas</span>
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Joyas exclusivas para celebrar el amor. Diseños elegantes que perduran en el tiempo.
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

            {/* Regalos para Aniversarios */}
            <div className="product-card p-8 text-center border border-gold-accent border-opacity-30 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="emerald-accent">Aniversarios</span>
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Celebra cada año de amor con una joya que refleje tu compromiso y devoción.
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

            {/* Regalos Personalizados */}
            <div className="product-card p-8 text-center border border-gold-accent border-opacity-30 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="emerald-accent">Regalos Personalizados</span>
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Crea una joya única con grabados, iniciales o diseños especiales que cuenten tu historia.
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

            {/* Regalos Corporativos */}
            <div className="product-card p-8 text-center border border-gold-accent border-opacity-30 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="text-5xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="emerald-accent">Regalos Corporativos</span>
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Impresiona a tus clientes y empleados con joyas de lujo que reflejan la excelencia de tu marca.
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
            ¿Tienes una idea especial?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos para crear la joya de tus sueños. Nuestro equipo de expertos está listo para hacer realidad tu visión.
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
    </div>
  );
}
