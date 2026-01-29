import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] text-white mt-8">
      {/* Wavy top - positioned above the footer */}
      <div className="absolute -top-16 left-0 right-0 h-20 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0V80Z"
            fill="#1a1a1a"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/nb logo white lowdef-640w.png"
              alt="Natural Bites"
              width={100}
              height={60}
              className="h-14 w-auto"
            />
          </div>

          {/* Nacascolo Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/nacas logo-640w.png"
              alt="Nacascolo Holdings"
              width={130}
              height={45}
              className="h-10 w-auto brightness-0 invert"
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5c964] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5c964] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5c964] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45,20.45H16.89V14.88c0-1.33,0-3-1.85-3s-2.14,1.45-2.14,2.94v5.66H9.34V9h3.41v1.56h.05a3.74,3.74,0,0,1,3.37-1.85c3.6,0,4.27,2.37,4.27,5.45v6.27ZM5.34,7.43A2.07,2.07,0,1,1,7.41,5.36,2.07,2.07,0,0,1,5.34,7.43Zm1.78,13H3.56V9H7.12V20.45ZM22.22,0H1.77A1.75,1.75,0,0,0,0,1.73V22.27A1.75,1.75,0,0,0,1.77,24H22.22A1.76,1.76,0,0,0,24,22.27V1.73A1.76,1.76,0,0,0,22.22,0Z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5c964] transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.47,14.38c-.29-.14-1.7-.84-2-.94-.23-.08-.4-.14-.58.14s-.66.84-.81,1-.3.23-.55.08a6.86,6.86,0,0,1-2-1.24,7.59,7.59,0,0,1-1.4-1.74c-.15-.25,0-.39.11-.51s.25-.3.38-.44a1.67,1.67,0,0,0,.25-.42.46.46,0,0,0,0-.44c-.07-.14-.58-1.4-.8-1.92s-.42-.43-.58-.44-.32,0-.49,0a1,1,0,0,0-.69.32,2.87,2.87,0,0,0-.9,2.14,5,5,0,0,0,1,2.66,11.47,11.47,0,0,0,4.42,3.91,14.92,14.92,0,0,0,1.47.55,3.56,3.56,0,0,0,1.64.1,2.63,2.63,0,0,0,1.73-1.22,2.14,2.14,0,0,0,.15-1.22C17.89,14.52,17.75,14.45,17.47,14.38Zm-5.42,7.4A9.86,9.86,0,0,1,6.18,20l-.36-.21-3.68,1,1-3.57-.24-.37a9.85,9.85,0,0,1,15.18-12.5,9.86,9.86,0,0,1-5.93,17.39Zm8.42-18.2A11.82,11.82,0,0,0,12.05,0,11.77,11.77,0,0,0,1.76,17.65L0,24l6.5-1.7A11.78,11.78,0,0,0,24,12.05,11.81,11.81,0,0,0,20.47,3.58Z"/>
              </svg>
            </a>
            <a
              href="https://pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5c964] transition-colors"
              aria-label="Pinterest"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,0A12,12,0,0,0,7.55,23.15a10.93,10.93,0,0,1,.14-3.07c.16-.68,1-4.29,1-4.29a3,3,0,0,1-.25-1.24c0-1.16.68-2,1.52-2,.72,0,1.07.54,1.07,1.18a18.77,18.77,0,0,1-.78,3.13c-.22.74.47,1.34,1.11,1.34,1.33,0,2.35-1.4,2.35-3.43A3,3,0,0,0,10.57,8.1a3.48,3.48,0,0,0-3.63,3.49,3.13,3.13,0,0,0,.6,1.84.49.49,0,0,1,.11.46c-.06.25-.2.84-.23,1-.04.19-.14.23-.32.14A3.73,3.73,0,0,1,5.3,11.48c0-2.67,1.94-5.12,5.59-5.12a5,5,0,0,1,5.21,4.85c0,2.9-1.83,5.24-4.37,5.24a2.25,2.25,0,0,1-1.93-1l-.52,2a11.11,11.11,0,0,1-1.15,2.42A12,12,0,1,0,12,0Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
