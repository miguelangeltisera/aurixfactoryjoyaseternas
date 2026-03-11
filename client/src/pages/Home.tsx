import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * AURIX JOYAS ETERNAS - Página Principal
 * 
 * Diseño: Elegancia Minimalista Moderna
 * - Tipografía: Playfair Display (títulos), Lato (cuerpo)
 * - Colores: Blanco puro, Oro champagne (#D4AF37), Verde esmeralda (#1F5C3D)
 * - Composición: Asimétrica, espacio negativo generoso
 * - Animaciones: Transiciones suaves de 300ms
 */

export default function Home() {
  const [isWhatsappHovered, setIsWhatsappHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = "04169110641";
  const whatsappMessage = "Hola, me interesa conocer más sobre los zarcillos de esmeralda.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 border-b border-gray-200" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container mx-auto px-4 py-3">
          {/* Header superior con menú hamburguesa */}
          <div className="flex justify-between items-center md:justify-center mb-2">
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


          {/* Logo y slogan centrados - Reducido 30% */}
          <div className="flex flex-col items-center justify-center gap-1">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/17728389959a4f_cbb7f46e.png"
              alt="Aurix Joyas Eternas Logo"
              className="h-24 md:h-20 w-auto max-w-full"
            />
            <p className="text-gold-accent text-lg md:text-base mt-1" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Joyas Eternas
            </p>
            <nav className="hidden md:flex gap-4 md:gap-6 text-xs md:text-sm mt-2">
              <a href="#producto" className="text-gray-700 hover:gold-accent transition-colors">
                Producto
              </a>
              <a href="#contacto" className="text-gray-700 hover:gold-accent transition-colors">
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://private-us-east-1.manuscdn.com/sessionFile/kBUzVrGE4Fg8Z3biAEK753/sandbox/VrOxGfsd8sHRNquncXEKEi-img-1_1771501642000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva0JVelZyR0U0Rmc4WjNiaUFFSzc1My9zYW5kYm94L1ZyT3hHZnNkOHNIUk5xdW5jWEVLRWktaW1nLTFfMTc3MTUwMTY0MjAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=pQQa9WnC3jasK8aJVzQ41Z05W5XBJIT08FSux4oBZlJYTf11sU0OveE158Bu66AV~z8dTMKe5bf32P~I9pDsQEgHJ-KQzEHxbBSD6cV~IUTS4-ndSA1vVIeXKHsYoxewlIe~mLgog2PzSFo6rfJLdyR4AX~t4qbV43sY-~3SorH8YQm79LENSMXNilujxfZwXhMNibM1xKVjPvBQuybk7Bsck74o2g8FR2-H84Fcm0apsIFBwo8~1lF1Uv-Dl2YH706TwrU8udVFd7syAGlYg7U1yCln~3N4oRjjmySJYa4tPO8gSVK5zEBrIGEDDNEIzx1N4jJlE7JAMjJw7cBfGQ__')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contenido izquierdo */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-montserrat tracking-widest gold-accent uppercase">
                  Joyería de Lujo
                </p>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="emerald-accent">Zarcillos</span>
                  <br />
                  de Esmeralda
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Elegancia atemporal en oro 18 quilates. Cada pieza es un reflejo de sofisticación
                  y exclusividad.
                </p>
              </div>

              {/* Divisor elegante */}
              <div className="elegant-divider w-16" />

              {/* Especificaciones */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-8 emerald-bg rounded-full" />
                  <div>
                    <p className="text-sm gold-accent font-montserrat tracking-widest uppercase">Tamaño</p>
                    <p className="text-lg text-gray-700">3.5 mm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-8 emerald-bg rounded-full" />
                  <div>
                    <p className="text-sm gold-accent font-montserrat tracking-widest uppercase">Material</p>
                    <p className="text-lg text-gray-700">Oro 18 Quilates</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-8 emerald-bg rounded-full" />
                  <div>
                    <p className="text-sm gold-accent font-montserrat tracking-widest uppercase">Piedra</p>
                    <p className="text-lg text-gray-700">Esmeralda Natural</p>
                  </div>
                </div>
              </div>

              {/* Botón CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 emerald-bg text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </a>
            </div>

            {/* Imagen derecha */}
            <div className="relative">
              <div className="absolute -inset-4 emerald-bg opacity-5 rounded-2xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gold-accent border-opacity-20">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/1772490851929_6dd9f1a9.png"
                  alt="Zarcillos de Esmeralda"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones de Categorías */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Nuestras <span className="emerald-accent">Colecciones</span>
            </h2>
            <div className="elegant-divider w-16 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Zarcillos */}
            <div className="product-card p-8 text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="mb-6 h-48 bg-gradient-to-b from-gray-100 to-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/zarcillo-modelo.png"
                  alt="Zarcillos de Esmeralda"
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="emerald-accent">Zarcillos</span>
              </h3>
              <p className="text-gray-600 mb-4">Colección exclusiva de zarcillos en oro 18 quilates con piedras preciosas naturales</p>
              <Link href="/zarcillos">
                <a className="inline-block text-gold-accent font-semibold hover:emerald-accent transition-colors">
                  Ver Colección →
                </a>
              </Link>
            </div>

            {/* Anillos */}
            <div className="product-card p-8 text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="mb-6 h-48 bg-gradient-to-b from-gray-100 to-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/anillo-modelo.jpg"
                  alt="Anillos de Oro"
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="emerald-accent">Anillos</span>
              </h3>
              <p className="text-gray-600 mb-4">Diseños elegantes y sofisticados en oro puro con diamantes y gemas naturales</p>
              <Link href="/anillos">
                <a className="inline-block text-gold-accent font-semibold hover:emerald-accent transition-colors">
                  Ver Colección →
                </a>
              </Link>
            </div>

            {/* Medallas */}
            <div className="product-card p-8 text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="mb-6 h-48 bg-gradient-to-b from-gray-100 to-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/modelomedalaagatha.png_42bb58de.jpg"
                  alt="Medallas Personalizadas"
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="emerald-accent">Medallas</span>
              </h3>
              <p className="text-gray-600 mb-4">Medallas personalizadas y religiosas en oro, plata y materiales preciosos</p>
              <Link href="/medallas">
                <a className="inline-block text-gold-accent font-semibold hover:emerald-accent transition-colors">
                  Ver Colección →
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Logo centrado */}
          <div className="flex flex-col items-center mb-12">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/114671925/XnniQhCvmxAh7rFhGzMxhU/17728389959a4f_cbb7f46e.png"
              alt="Aurix Joyas Eternas Logo"
              className="h-32 w-auto mb-3"
            />
            <p className="text-gold-accent font-montserrat tracking-widest text-base">JOYAS ETERNAS</p>
          </div>

          {/* Contenido del footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h4 className="font-semibold mb-4">Contacto</h4>
              <p className="text-gray-400">WhatsApp: +58 416 911 0641</p>
              <p className="text-gray-400">Ubicación: CCCT Piso 2, Of. 202</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-4">Información</h4>
              <p className="text-gray-400">Atención previa cita</p>
              <p className="text-gray-400">Joyas de oro 18 quilates</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-4">Colecciones</h4>
              <p className="text-gray-400">Zarcillos</p>
              <p className="text-gray-400">Anillos</p>
              <p className="text-gray-400">Medallas</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 space-y-4">
            <div className="text-center text-gray-400">
              <p>&copy; 2026 Aurix Joyas Eternas. Todos los derechos reservados.</p>
            </div>
            <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-4">
              <p className="font-semibold mb-1">Desarrollo</p>
              <p>Cine & TV MAT Hypermedia C.A.</p>
              <a
                href="mailto:miguelangeltisera@gmail.com"
                className="text-gold-accent hover:text-white transition-colors"
              >
                miguelangeltisera@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón WhatsApp Flotante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        onMouseEnter={() => setIsWhatsappHovered(true)}
        onMouseLeave={() => setIsWhatsappHovered(false)}
        title="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        {isWhatsappHovered && (
          <span className="absolute right-16 bg-green-600 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
            Contactar
          </span>
        )}
      </a>
    </div>
  );
}
