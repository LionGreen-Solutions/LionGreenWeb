
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import StaticCategoryFilter from "./StaticCategoryFilter";
import PriceFilter from "./PriceFilter";

interface StaticMobilityFiltersProps {
  categories: Array<{ id: number; name: string; slug: string }>;
  selectedCategory: string | null;
  priceRange: [number, number];
  onCategoryChange: (category: string | null) => void;
  onPriceChange: (values: number[]) => void;
  onClearFilters: () => void;
}

const StaticMobilityFilters = ({
  categories,
  selectedCategory,
  priceRange,
  onCategoryChange,
  onPriceChange,
  onClearFilters
}: StaticMobilityFiltersProps) => {
  return (
    <div className="lg:w-1/4">
      <StaticCategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory} 
        onCategoryChange={onCategoryChange} 
      />
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

export default StaticMobilityFilters;
