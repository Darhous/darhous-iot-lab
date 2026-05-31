"use client";

import { FaInstagram, FaLinkedinIn, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-16 pt-16 pb-8 bg-surface-container-lowest mt-32 border-t border-outline-variant/20 relative z-10">
      
      {/* Top Part of the Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12">
        <div className="font-headline-md text-headline-md text-on-surface font-bold">
          Darhous IoT Lab
        </div>
        <div className="font-body-md text-body-md text-on-surface-variant text-center md:text-right max-w-md">
          Arduino & IoT Ecosystem. Building smart engineers for the future.
          Ready to be integrated into Darhous AI Academy.
        </div>
      </div>

      {/* Mandatory Bottom Footer Bar */}
      <div className="border-t border-white/5 pt-6 flex flex-col items-center gap-4">
        
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4" dir="ltr">
          <a
            href="https://www.instagram.com/darhous/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[36px] h-[36px] rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            style={{ 
              color: '#E1306C', 
              backgroundColor: 'rgba(225,48,108,0.1)',
              borderColor: 'rgba(225,48,108,0.3)',
              borderWidth: '1px'
            }}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(225,48,108,0.5)'}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/darhous/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[36px] h-[36px] rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            style={{ 
              color: '#0A66C2', 
              backgroundColor: 'rgba(10,102,194,0.1)',
              borderColor: 'rgba(10,102,194,0.3)',
              borderWidth: '1px'
            }}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(10,102,194,0.5)'}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="https://www.facebook.com/ahmed.darhous"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[36px] h-[36px] rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            style={{ 
              color: '#1877F2', 
              backgroundColor: 'rgba(24,119,242,0.1)',
              borderColor: 'rgba(24,119,242,0.3)',
              borderWidth: '1px'
            }}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(24,119,242,0.5)'}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            <FaFacebook size={18} />
          </a>

          <a
            href="https://wa.me/201030002331"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[36px] h-[36px] rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            style={{ 
              color: '#25D366', 
              backgroundColor: 'rgba(37,211,102,0.1)',
              borderColor: 'rgba(37,211,102,0.3)',
              borderWidth: '1px'
            }}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(37,211,102,0.5)'}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            <FaWhatsapp size={18} />
          </a>
        </div>

        {/* Signature */}
        <div className="text-xs font-mono text-center text-on-surface-variant/50">
          designed by <a href="mailto:ahmeddarhous@gmail.com" className="text-primary opacity-85 hover:opacity-100 transition-opacity no-underline">Ahmed Darhous</a> ©
        </div>
      </div>
      
    </footer>
  );
}
