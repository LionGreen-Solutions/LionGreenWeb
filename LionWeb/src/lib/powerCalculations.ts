
/**
 * Utilities for calculating power requirements based on appliances
 */

interface PowerRequirement {
  solarPanelWatts: number;
  batteryCapacity: number;  // in Wh (Watt-hours)
  inverterSize: number;     // in Watts
}

/**
 * Calculate daily energy consumption based on appliance data
 * @param appliances Array of customer appliances with wattage and hours of use
 * @returns Total daily energy consumption in Wh
 */
export const calculateDailyConsumption = (appliances: any[]): number => {
  return appliances.reduce((total, item) => {
    const quantity = item.quantity || 1;
    const wattage = item.wattage || 0;
    const hoursPerDay = item.hoursPerDay || 0;
    
    return total + (quantity * wattage * hoursPerDay);
  }, 0);
};

/**
 * Calculate water pump energy requirements
 * @param pumps Array of water pump data
 * @returns Additional energy consumption in Wh
 */
export const calculatePumpRequirements = (pumps: any[]): number => {
  return pumps.reduce((total, pump) => {
    const efficiency = 0.7; // Typical pump efficiency
    const gravity = 9.81; // m/s²
    const waterDensity = 1000; // kg/m³
    
    // Convert head to meters and flow to m³/s
    const head = pump.totalHead || 0; // in meters
    const flow = (pump.totalDischarge || 0) / 3600; // convert from L/h to m³/s
    const hoursPerDay = pump.hoursPerDay || 0;
    
    // Power (W) = (ρ × g × Q × H) / η
    // Where ρ is water density, g is gravity, Q is flow rate, H is head, η is efficiency
    const powerWatts = (waterDensity * gravity * flow * head) / efficiency;
    
    return total + (powerWatts * hoursPerDay);
  }, 0);
};

/**
 * Generate power system requirements based on total consumption
 * @param dailyConsumptionWh Total daily consumption in Watt-hours
 * @param backupHours Required battery backup time in hours
 * @param sunHoursPerDay Average sun hours per day (default 5)
 * @returns PowerRequirement object with recommended system specs
 */
export const generatePowerRequirements = (
  dailyConsumptionWh: number,
  backupHours: number,
  sunHoursPerDay: number = 5
): PowerRequirement => {
  // Add 20% for system losses and future expansion
  const totalDailyConsumption = dailyConsumptionWh * 1.2;
  
  // Calculate battery capacity with 50% depth of discharge for longer battery life
  const batteryCapacity = (totalDailyConsumption * backupHours) / 0.5;
  
  // Calculate required solar panel watts
  // Daily consumption divided by sun hours, with 20% inefficiency factor
  const solarPanelWatts = (totalDailyConsumption / sunHoursPerDay) / 0.8;
  
  // Calculate inverter size - peak load plus 20% safety margin
  // Assuming peak load is 60% of daily consumption for typical residential use
  const peakLoad = totalDailyConsumption * 0.6;
  const inverterSize = peakLoad * 1.2;
  
  return {
    solarPanelWatts: Math.ceil(solarPanelWatts),
    batteryCapacity: Math.ceil(batteryCapacity),
    inverterSize: Math.ceil(inverterSize)
  };
};

/**
 * Find the most suitable pre-defined package based on consumption
 * @param dailyConsumptionWh Total daily consumption
 * @returns ID of the most suitable package or undefined if no match
 */
export const findSuitablePackage = (dailyConsumptionWh: number): number | undefined => {
  if (dailyConsumptionWh <= 1000) return 1; // Basic package
  if (dailyConsumptionWh <= 2500) return 2; // Standard package
  if (dailyConsumptionWh <= 5000) return 3; // Premium package
  return undefined; // Custom design needed
};

/**
 * Estimate budget range based on system requirements
 * @param requirements Power system requirements
 * @returns Estimated budget range as [min, max]
 */
export const estimateBudget = (requirements: PowerRequirement): [number, number] => {
  // Very simplified calculation - in reality would consider many more factors
  const solarCost = requirements.solarPanelWatts * 1; // $1 per Watt
  const batteryCost = requirements.batteryCapacity * 0.5; // $0.5 per Wh
  const inverterCost = requirements.inverterSize * 0.3; // $0.3 per Watt
  
  const baseCost = solarCost + batteryCost + inverterCost;
  
  // Add installation and other costs (30-50% of base cost)
  const minTotal = baseCost * 1.3;
  const maxTotal = baseCost * 1.5;
  
  return [Math.ceil(minTotal), Math.ceil(maxTotal)];
};
