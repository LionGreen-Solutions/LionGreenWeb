
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

interface MobilityFiltersProps {
  selectedCategory: string | null;
  priceRange: [number, number];
  onCategoryChange: (category: string | null) => void;
  onPriceChange: (values: number[]) => void;
  onClearFilters: () => void;
}

const MobilityFilters = ({
  selectedCategory,
  priceRange,
  onCategoryChange,
  onPriceChange,
  onClearFilters
}: MobilityFiltersProps) => {
  return (
    <div className="lg:w-1/4">
      <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={onCategoryChange} />
      <PriceFilter priceRange={priceRange} onPriceChange={onPriceChange} />
      
      {/* Clear Filters Button */}
      <Button
        variant="outline"
        className="w-full mb-6 border-primary/60 text-foreground hover:bg-primary/10"
        onClick={onClearFilters}
      >
        <RefreshCw className="mr-2 h-4 w-4" />
        Reset Filters
      </Button>
    </div>
  );
};

export default MobilityFilters;
