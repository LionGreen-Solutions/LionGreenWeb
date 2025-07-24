import { Button } from "@/components/ui/button";
import { mobilityCategories } from "@/lib/mobilityData";
import { Bike } from "lucide-react";
interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}
const CategoryFilter = ({
  selectedCategory,
  onCategoryChange
}: CategoryFilterProps) => {
  return <div className="backdrop-blur-sm p-6 rounded-lg shadow-md border border-border/30 mb-6 bg-slate-950">
      <h3 className="font-bold text-lg mb-4 text-foreground flex items-center">
        <Bike className="h-5 w-5 mr-2 text-primary" />
        Categories
      </h3>
      <div className="space-y-2">
        <Button variant={selectedCategory === null ? "default" : "outline"} className={selectedCategory === null ? "bg-primary hover:bg-primary/90 w-full justify-start" : "w-full justify-start"} onClick={() => onCategoryChange(null)}>
          All Products
        </Button>
        
        {mobilityCategories.map(category => <Button key={category.id} variant={selectedCategory === category.slug ? "default" : "outline"} className={selectedCategory === category.slug ? "bg-primary hover:bg-primary/90 w-full justify-start" : "w-full justify-start"} onClick={() => onCategoryChange(category.slug)}>
            {category.name}
          </Button>)}
      </div>
    </div>;
};
export default CategoryFilter;