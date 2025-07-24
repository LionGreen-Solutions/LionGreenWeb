import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash2, Plus, Home } from 'lucide-react';
import { toast } from 'sonner';
interface ApplianceData {
  id?: string;
  appliance_type: string;
  quantity: number;
  wattage: number;
  hours_per_day: number;
  daily_consumption_wh?: number;
}
interface ApplianceSelectorProps {
  appliances: ApplianceData[];
  onAddAppliance: (appliance: Omit<ApplianceData, 'id'>) => Promise<void>;
  onRemoveAppliance: (applianceId: string) => Promise<void>;
}
const ApplianceSelector: React.FC<ApplianceSelectorProps> = ({
  appliances,
  onAddAppliance,
  onRemoveAppliance
}) => {
  const [newAppliance, setNewAppliance] = useState({
    appliance_type: '',
    quantity: 1,
    wattage: 0,
    hours_per_day: 4
  });
  const applianceTypes = [{
    name: 'LED Light Bulb',
    avgWattage: 10
  }, {
    name: 'CFL Light Bulb',
    avgWattage: 15
  }, {
    name: 'Incandescent Light Bulb',
    avgWattage: 60
  }, {
    name: 'Ceiling Fan',
    avgWattage: 75
  }, {
    name: 'Television (LED/LCD)',
    avgWattage: 100
  }, {
    name: 'Television (Plasma)',
    avgWattage: 300
  }, {
    name: 'Laptop',
    avgWattage: 50
  }, {
    name: 'Desktop Computer',
    avgWattage: 200
  }, {
    name: 'Refrigerator (Energy Star)',
    avgWattage: 150
  }, {
    name: 'Refrigerator (Standard)',
    avgWattage: 250
  }, {
    name: 'Microwave Oven',
    avgWattage: 1000
  }, {
    name: 'Electric Oven',
    avgWattage: 2150
  }, {
    name: 'Washing Machine',
    avgWattage: 500
  }, {
    name: 'Clothes Dryer',
    avgWattage: 3000
  }, {
    name: 'Air Conditioner (Window)',
    avgWattage: 1000
  }, {
    name: 'Air Conditioner (Central)',
    avgWattage: 3500
  }, {
    name: 'Space Heater',
    avgWattage: 1500
  }, {
    name: 'Water Heater (Electric)',
    avgWattage: 4000
  }, {
    name: 'Wi-Fi Router',
    avgWattage: 10
  }, {
    name: 'Phone Charger',
    avgWattage: 5
  }, {
    name: 'Blender',
    avgWattage: 400
  }, {
    name: 'Coffee Maker',
    avgWattage: 800
  }, {
    name: 'Toaster',
    avgWattage: 1200
  }, {
    name: 'Hair Dryer',
    avgWattage: 1500
  }, {
    name: 'Iron',
    avgWattage: 1500
  }, {
    name: 'Vacuum Cleaner',
    avgWattage: 1400
  }, {
    name: 'Gaming Console',
    avgWattage: 150
  }];
  const handleApplianceTypeChange = (type: string) => {
    const appliance = applianceTypes.find(a => a.name === type);
    setNewAppliance(prev => ({
      ...prev,
      appliance_type: type,
      wattage: appliance ? appliance.avgWattage : 0
    }));
  };
  const handleAddAppliance = async () => {
    if (!newAppliance.appliance_type || newAppliance.wattage <= 0) {
      toast.error('Please select an appliance type and set a valid wattage');
      return;
    }
    try {
      const applianceData = {
        ...newAppliance,
        daily_consumption_wh: newAppliance.quantity * newAppliance.wattage * newAppliance.hours_per_day
      };
      await onAddAppliance(applianceData);

      // Reset form
      setNewAppliance({
        appliance_type: '',
        quantity: 1,
        wattage: 0,
        hours_per_day: 4
      });
      toast.success('Appliance added successfully!');
    } catch (error) {
      console.error('Error adding appliance:', error);
      toast.error('Error adding appliance');
    }
  };
  const handleRemoveAppliance = async (applianceId: string) => {
    try {
      await onRemoveAppliance(applianceId);
      toast.success('Appliance removed successfully!');
    } catch (error) {
      console.error('Error removing appliance:', error);
      toast.error('Error removing appliance');
    }
  };
  return <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Home className="h-5 w-5 text-blue-600" />
          Home Appliances
        </CardTitle>
        <p className="text-sm text-gray-600">
          Add your electrical appliances to calculate energy requirements
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Add New Appliance Form */}
        <div className="border rounded-lg p-4 bg-slate-950">
          <h4 className="font-medium mb-4 text-slate-50">Add New Appliance</h4>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <Label className="bg-slate-950">Appliance Type</Label>
              <Select value={newAppliance.appliance_type} onValueChange={handleApplianceTypeChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select an appliance" />
                </SelectTrigger>
                <SelectContent>
                  {applianceTypes.map((type, i) => <SelectItem key={i} value={type.name}>
                      {type.name} (~{type.avgWattage}W)
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>Quantity</Label>
              <Input type="number" min={1} value={newAppliance.quantity} onChange={e => setNewAppliance(prev => ({
              ...prev,
              quantity: parseInt(e.target.value) || 1
            }))} />
            </div>
            
            <div>
              <Label>Wattage (W)</Label>
              <Input type="number" min={0} value={newAppliance.wattage} onChange={e => setNewAppliance(prev => ({
              ...prev,
              wattage: parseInt(e.target.value) || 0
            }))} />
            </div>
            
            <div>
              <Label>Hours/Day</Label>
              <Input type="number" min={0} max={24} step={0.5} value={newAppliance.hours_per_day} onChange={e => setNewAppliance(prev => ({
              ...prev,
              hours_per_day: parseFloat(e.target.value) || 0
            }))} />
            </div>
          </div>
          
          <Button onClick={handleAddAppliance} className="mt-4" disabled={!newAppliance.appliance_type}>
            <Plus className="h-4 w-4 mr-2" />
            Add Appliance
          </Button>
        </div>

        {/* Appliance List */}
        <div>
          <h4 className="font-medium mb-4">Added Appliances ({appliances.length})</h4>
          
          {appliances.length === 0 ? <div className="text-center p-6 bg-gray-50 rounded-md">
              <p className="text-gray-500">No appliances added yet.</p>
              <p className="text-sm text-gray-400">Add appliances above to calculate your energy needs.</p>
            </div> : <div className="space-y-3">
              {appliances.map(appliance => <div key={appliance.id} className="flex items-center justify-between p-4 border rounded-lg bg-slate-950">
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <p className="font-medium">{appliance.appliance_type}</p>
                      <p className="text-sm text-gray-500">Qty: {appliance.quantity}</p>
                    </div>
                    <div className="text-center bg-slate-950">
                      <p className="text-sm text-gray-500">Wattage</p>
                      <p className="font-medium">{appliance.wattage}W</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Hours/Day</p>
                      <p className="font-medium">{appliance.hours_per_day}h</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Daily Consumption</p>
                      <p className="font-medium text-green-600">
                        {appliance.daily_consumption_wh || appliance.quantity * appliance.wattage * appliance.hours_per_day} Wh
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" onClick={() => appliance.id && handleRemoveAppliance(appliance.id)} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>)}
            </div>}
        </div>
      </CardContent>
    </Card>;
};
export default ApplianceSelector;