
import { Battery, Zap, Info } from "lucide-react";

const MobilityHeader = () => {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-b from-slate-800 to-green-600 py-12 border-b border-border/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-2">Electric Mobility Solutions</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Explore our range of eco-friendly electric vehicles and accessories designed for sustainable transportation in Ethiopia.
          </p>
        </div>
      </div>

      {/* Feature Benefits Banner */}
      <div className="bg-card/30 backdrop-blur-sm py-6 border-y border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/20 rounded-full">
                <Battery className="h-6 w-6 text-primary" />
              </div>
              <span className="text-foreground">Zero Emissions Technology</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/20 rounded-full">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <span className="text-foreground">Low Operating Costs</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/20 rounded-full">
                <Info className="h-6 w-6 text-primary" />
              </div>
              <span className="text-foreground">1-Year Warranty & Support</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobilityHeader;
