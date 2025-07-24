import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Battery, Sun, Settings } from 'lucide-react';
interface SystemDesignSummaryProps {
  dailyConsumption: number;
  backupHours: number;
  budget: string;
  appliances: any[];
}
const SystemDesignSummary: React.FC<SystemDesignSummaryProps> = ({
  dailyConsumption,
  backupHours,
  budget,
  appliances
}) => {
  // Calculate basic system requirements
  const solarPanelWatts = Math.ceil(dailyConsumption * 1.3 / 4); // Assuming 4 peak sun hours
  const batteryCapacity = Math.ceil(dailyConsumption * backupHours / 1000); // kWh
  const inverterSize = Math.ceil(Math.max(dailyConsumption / 10, 1000)); // Minimum 1kW

  const getBudgetColor = (budget: string) => {
    switch (budget) {
      case 'under-25k':
        return 'bg-blue-100 text-blue-800';
      case '25k-50k':
        return 'bg-green-100 text-green-800';
      case '50k-100k':
        return 'bg-yellow-100 text-yellow-800';
      case 'over-100k':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const formatBudget = (budget: string) => {
    switch (budget) {
      case 'under-25k':
        return 'Under 25,000 ETB';
      case '25k-50k':
        return '25,000 - 50,000 ETB';
      case '25k-50k':
        return '50,000 - 100,000 ETB';
      case 'over-100k':
        return 'Over 100,000 ETB';
      default:
        return 'Not specified';
    }
  };
  return <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-green-600" />
          System Design Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-500">
            <Sun className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-sm text-slate-50">Solar Panels</p>
              <p className="font-semibold">{solarPanelWatts}W</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-500">
            <Battery className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-sm text-slate-50">Battery Storage</p>
              <p className="font-semibold">{batteryCapacity} kWh</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-500">
            <Zap className="h-8 w-8 text-yellow-600" />
            <div>
              <p className="text-sm text-slate-50">Inverter Size</p>
              <p className="font-semibold">{inverterSize}W</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-500">
            <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">$</span>
            </div>
            <div>
              <p className="text-sm text-slate-50">Budget Range</p>
              <Badge className={getBudgetColor(budget)}>
                {formatBudget(budget)}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Daily Energy Consumption</p>
            <p className="text-2xl font-bold text-gray-900">{dailyConsumption} Wh</p>
            <p className="text-sm text-gray-500">
              Monthly: {Math.round(dailyConsumption * 30 / 1000)} kWh
            </p>
          </div>
          
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Backup Duration</p>
            <p className="text-2xl font-bold text-gray-900">{backupHours} hours</p>
            <p className="text-sm text-gray-500">
              {appliances.length} appliances configured
            </p>
          </div>
        </div>
      </CardContent>
    </Card>;
};
export default SystemDesignSummary;