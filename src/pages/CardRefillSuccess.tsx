
import { useNavigate } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const CardRefillSuccess = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4 bg-noise">
        <div className="max-w-md w-full text-center">
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/40 green-glow">
            <Check className="h-12 w-12 text-primary" />
          </div>
          
          <h1 className="text-3xl font-display font-bold mb-4 text-foreground">Order Successful!</h1>
          
          <p className="text-muted-foreground mb-8">
            Your RFID card refill request has been received. Our service representative will contact you shortly to arrange the pickup.
          </p>
          
          <div className="mb-6 py-6 px-4 bg-card/80 backdrop-blur-sm rounded-lg border border-border/30">
            <h2 className="text-lg font-semibold mb-4 text-foreground">What happens next?</h2>
            <ol className="text-left space-y-2 text-muted-foreground">
              <li className="flex">
                <span className="bg-primary/80 text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                <span>Our representative will call you to confirm pickup details</span>
              </li>
              <li className="flex">
                <span className="bg-primary/80 text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                <span>Your card will be picked up from your location</span>
              </li>
              <li className="flex">
                <span className="bg-primary/80 text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                <span>We'll refill the card at the nearest EEU shop</span>
              </li>
              <li className="flex">
                <span className="bg-primary/80 text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                <span>Your refilled card will be returned to you</span>
              </li>
            </ol>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="flex items-center justify-center border-border text-foreground hover:bg-secondary/20"
              onClick={() => navigate('/card-refill')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Card Refill
            </Button>
            
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate('/')}
            >
              Continue to Home
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CardRefillSuccess;
