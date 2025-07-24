
import { Wrench, Calendar } from 'lucide-react';

interface ServiceBannerProps {
  className?: string;
}

const ServiceBanner = ({ className = '' }: ServiceBannerProps) => {
  return (
    <div className={`bg-green-100 border-l-4 border-green-500 p-4 mb-6 rounded-r ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center mb-2 md:mb-0">
          <Wrench className="h-5 w-5 text-green-600 mr-2" />
          <span className="font-medium text-gray-800">Free Professional Installation</span>
        </div>
        <div className="flex items-center">
          <Calendar className="h-5 w-5 text-green-600 mr-2" />
          <span className="font-medium text-gray-800">1 Year Free Maintenance</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-1">
        With every system purchase, enjoy complimentary professional installation and 1 year of maintenance services.
      </p>
    </div>
  );
};

export default ServiceBanner;
