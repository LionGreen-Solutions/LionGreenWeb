
import { Package } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShoppingCart, Wrench, Calendar } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface PackageCardProps {
  package: Package;
  recommended?: boolean;
}

export function PackageCard({ package: pkg, recommended = false }: PackageCardProps) {
  const { addPackageToCart } = useCart();
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    addPackageToCart(pkg);
    toast({
      title: "Package added to cart",
      description: `${pkg.name} has been added to your cart.`
    });
  };
  
  return (
    <Card className={`relative ${recommended ? 'border-green-500 border-2' : ''}`}>
      {recommended && (
        <div className="absolute top-0 right-0 bg-green-500 text-white font-bold px-3 py-1 rounded-bl-md">
          RECOMMENDED
        </div>
      )}
      
      <CardHeader>
        <CardTitle>{pkg.name}</CardTitle>
        <CardDescription>
          {pkg.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-2xl font-bold text-gray-800">${pkg.price}</div>
        
        <div>
          <h4 className="font-semibold mb-2">System Components:</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span>
                {pkg.solarPanels.quantity} x {pkg.solarPanels.watts}W
                {' '}{pkg.solarPanels.type} Solar Panels
                {' '}({pkg.solarPanels.quantity * pkg.solarPanels.watts}W total)
              </span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span>
                {pkg.batteries.quantity} x {pkg.batteries.capacity}Wh Battery
                {pkg.batteries.quantity > 1 ? 'ies' : ''}
                {' '}({pkg.batteries.quantity * pkg.batteries.capacity}Wh total)
              </span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span>{pkg.inverter.size}W Pure Sine Wave Inverter</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span>Mounting hardware & cables</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
          <div className="flex flex-col space-y-1 text-sm">
            <div className="flex items-center">
              <Wrench className="h-4 w-4 text-green-600 mr-1.5" />
              <span className="font-medium text-gray-800">Free Professional Installation</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-green-600 mr-1.5" />
              <span className="font-medium text-gray-800">1 Year Free Maintenance</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Can Power:</h4>
          <ul className="space-y-1 text-sm">
            {pkg.canPower.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1.5 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-gray-800 hover:bg-gray-700" 
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add Package to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
