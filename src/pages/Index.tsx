import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import HistorySection from '@/components/HistorySection';
import CasesSection from '@/components/CasesSection';
import Team from '@/components/Team';
// import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
// import LoadingScreen from '@/components/LoadingScreen';
import ImageCarousel from '@/components/ImageCarousel';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // const handleLoadingComplete = () => {
  //   setIsLoading(false);
  // };

  return (
    <>
      {/* {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />} */}
      <div className="min-h-screen pt md:pt-0 transition-opacity duration-500">
        <Header />
        <Hero />
        <PracticeAreas />
        <HistorySection />
        <CasesSection />
        <Team />
        <ImageCarousel />
        {/* <Testimonials /> */}
        <Process />
        <FAQ />
        <LocationSection />
        <Footer />
      </div>
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </>
  );
};

export default Index;
