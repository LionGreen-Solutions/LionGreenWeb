import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
interface ProductSortingProps {
  sortOption: string;
  filteredProductsCount: number;
  onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClearFilters: () => void;
  showEmptyState: boolean;
}
const ProductSorting = ({
  sortOption,
  filteredProductsCount,
  onSortChange,
  onClearFilters,
  showEmptyState
}: ProductSortingProps) => {
  if (showEmptyState) {
    return <div className="text-center py-12 bg-card/80 backdrop-blur-sm rounded-lg shadow-md border border-border/30">
        <h3 className="text-xl font-semibold text-foreground">No products found</h3>
        <p className="text-muted-foreground mt-2">Try adjusting your filters to find what you're looking for.</p>
        <Button className="mt-6 bg-primary hover:bg-primary/90" onClick={onClearFilters}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset Filters
        </Button>
      </div>;
  }
  return <div className="flex flex-col sm:flex-row justify-between items-center mb-6 backdrop-blur-sm p-4 rounded-lg shadow-md border border-border/30 bg-slate-950">
      <p className="text-foreground mb-4 sm:mb-0">
        Showing <span className="font-medium text-primary">{filteredProductsCount}</span> results
      </p>
      <div className="flex items-center">
        <label htmlFor="sort" className="mr-2 text-foreground">Sort by:</label>
        <select id="sort" value={sortOption} onChange={onSortChange} className="border border-border rounded-md px-3 py-1.5 bg-secondary/30 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
    </div>;
};
export default ProductSorting;