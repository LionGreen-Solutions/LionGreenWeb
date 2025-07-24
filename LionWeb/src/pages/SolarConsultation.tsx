import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationForm from '@/components/consultation/ConsultationForm';
const SolarConsultation: React.FC = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-b from-slate-800 to-green-600 py-8 border-b border-border/30">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Solar Consultation</h1>
          <p className="text-gray-300">Get a custom solar system design for your energy needs</p>
        </div>
      </div>

      <div className="flex-grow py-8 bg-slate-50">
        <ConsultationForm />
      </div>

      <Footer />
    </div>;
};
export default SolarConsultation;