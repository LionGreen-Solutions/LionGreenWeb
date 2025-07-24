
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();
  
  // Convert category slug to display name
  const getCategoryName = (slug: string) => {
    return slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };
  
  // Filter products by category
  const filteredProducts = products.filter(product => 
    product.category === category
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 bg-noise">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-6 font-display">
            {category ? getCategoryName(category) : 'Products'}
          </h1>
          
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  id={product.id.toString()}
                  name={product.name}
                  description={product.description}
                  price={`$${product.price.toFixed(2)}`}
                  image={product.image}
                  specs={product.specs || {}}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-xl font-semibold text-foreground mb-4">No products found in this category.</h2>
              <p className="text-muted-foreground mb-8">
                We are currently updating our product catalog. Please check back later or browse our other categories.
              </p>
              <Button onClick={() => window.history.back()} className="bg-primary hover:bg-primary/90">
                Go Back
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCategory;
