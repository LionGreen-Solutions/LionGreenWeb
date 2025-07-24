
import StaticMobilityProductCard from "@/components/StaticMobilityProductCard";
import ProductSorting from "./ProductSorting";

interface StaticMobilityProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  features: string[];
  specs: {
    [key: string]: string | number;
  };
  stock: number;
  bestSeller?: boolean;
  isNew?: boolean;
  discount?: number;
  range?: number;
  maxSpeed?: number;
  chargingTime?: number;
}

interface StaticProductGridProps {
  products: StaticMobilityProduct[];
  sortOption: string;
  onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClearFilters: () => void;
}

const StaticProductGrid = ({ products, sortOption, onSortChange, onClearFilters }: StaticProductGridProps) => {
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
            <StaticMobilityProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default StaticProductGrid;
