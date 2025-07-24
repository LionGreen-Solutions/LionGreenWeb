import { Slider } from "@/components/ui/slider";
interface PriceFilterProps {
  priceRange: [number, number];
  onPriceChange: (values: number[]) => void;
}
const PriceFilter = ({
  priceRange,
  onPriceChange
}: PriceFilterProps) => {
  return <div className="backdrop-blur-sm p-6 rounded-lg shadow-md border border-border/30 mb-6 bg-slate-950">
      <h3 className="font-bold text-lg mb-4 text-foreground">Price Range</h3>
      <div className="space-y-6">
        <Slider defaultValue={[0, 3000]} min={0} max={3000} step={100} value={priceRange} onValueChange={onPriceChange} className="mt-6" />
        <div className="flex items-center justify-between">
          <div className="bg-secondary/50 rounded px-3 py-1 text-foreground font-medium">
            ${priceRange[0]}
          </div>
          <div className="bg-secondary/50 rounded px-3 py-1 text-foreground font-medium">
            ${priceRange[1]}
          </div>
        </div>
      </div>
    </div>;
};
export default PriceFilter;