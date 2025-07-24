
import MobilityProductCard from "@/components/MobilityProductCard";
import { MobilityProduct } from "@/lib/mobilityData";
import ProductSorting from "./ProductSorting";

interface ProductGridProps {
  products: MobilityProduct[];
  sortOption: string;
  onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClearFilters: () => void;
}

const ProductGrid = ({ products, sortOption, onSortChange, onClearFilters }: ProductGridProps) => {
  const showEmptyState = products.length === 0;

  return (
    <div className="lg:w-3/4">
      <ProductSorting 
        sortOption={sortOption} 
        filteredProductsCount={products.length} 
        onSortChange={onSortChange} 
        onClearFilters={onClearFilters} 
        showEmptyState={showEmptyState} 
      />

      {!showEmptyState && (
        <div className="product-grid">
          {products.map((product) => (
            <MobilityProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
