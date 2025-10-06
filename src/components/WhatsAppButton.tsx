import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Número de WhatsApp del estudio jurídico (reemplazar con el número real)
  const whatsappNumber = "51996150556"; // Formato: código país + número sin espacios
  const message = "Hola, me interesa obtener asesoría legal. ¿Podrían ayudarme?";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
        style={{ animationDuration: '3s' }}
        aria-label="Contactar por WhatsApp"
      >
        {/* Ícono de WhatsApp */}
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          
          {/* Indicador de disponibilidad */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
        </div>

        {/* Tooltip */}
        <div 
          className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
            isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          ¡Chatea con nosotros!
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </div>

        {/* Efecto de ondas */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping" style={{ animationDuration: '3s' }}></div>
      </button>
    </div>
  );
};

export default WhatsAppButton;