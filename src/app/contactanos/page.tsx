import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contactanos() {
  return (
    <main className="pt-20">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#f5c964] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333] mb-4">
            CONTÁCTANOS
          </h1>
          <p className="text-lg text-[#333]">
            Estamos aquí para ayudarte
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#333] mb-6">
                Envíanos un mensaje
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#333] mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5c964]"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#333] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5c964]"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#333] mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5c964]"
                    placeholder="+506 0000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#333] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5c964]"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#333] mb-6">
                Información de contacto
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f5c964] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333]">Dirección</h3>
                    <p className="text-[#666]">San José, Costa Rica</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f5c964] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333]">Email</h3>
                    <p className="text-[#666]">info@natural-bites.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f5c964] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333]">Teléfono</h3>
                    <p className="text-[#666]">+506 0000-0000</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-semibold text-[#333] mb-4">Síguenos</h3>
                <div className="flex gap-4">
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#f5c964] rounded-full flex items-center justify-center hover:bg-[#e5b54e] transition-colors">
                    <svg className="w-5 h-5 text-[#333]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#f5c964] rounded-full flex items-center justify-center hover:bg-[#e5b54e] transition-colors">
                    <svg className="w-5 h-5 text-[#333]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16Z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#f5c964] rounded-full flex items-center justify-center hover:bg-[#e5b54e] transition-colors">
                    <svg className="w-5 h-5 text-[#333]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.47,14.38c-.29-.14-1.7-.84-2-94-.23-.08-.4-.14-.58.14s-.66.84-.81,1-.3.23-.55.08a6.86,6.86,0,0,1-2-1.24,7.59,7.59,0,0,1-1.4-1.74c-.15-.25,0-.39.11-.51s.25-.3.38-.44a1.67,1.67,0,0,0,.25-.42.46.46,0,0,0,0-.44c-.07-.14-.58-1.4-.8-1.92s-.42-.43-.58-.44-.32,0-.49,0a1,1,0,0,0-.69.32,2.87,2.87,0,0,0-.9,2.14,5,5,0,0,0,1,2.66,11.47,11.47,0,0,0,4.42,3.91,14.92,14.92,0,0,0,1.47.55,3.56,3.56,0,0,0,1.64.1,2.63,2.63,0,0,0,1.73-1.22,2.14,2.14,0,0,0,.15-1.22C17.89,14.52,17.75,14.45,17.47,14.38Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
