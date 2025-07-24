
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Trash, 
  ArrowRight, 
  Plus, 
  Minus,
  ShoppingBag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { items, updateQuantity, removeItem, subtotal, clearCart } = useCart();
  
  // Shipping options
  const [shippingMethod, setShippingMethod] = useState<string>("standard");
  
  const shippingOptions = {
    standard: { price: 0, name: "Standard Shipping (3-5 business days)", free: true },
    express: { price: 15.99, name: "Express Shipping (1-2 business days)" },
  };
  
  // Calculate shipping cost
  const shippingCost = shippingOptions[shippingMethod as keyof typeof shippingOptions].price;

  // Calculate total cost
  const total = subtotal + shippingCost;

  // Handle quantity change
  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 flex items-center text-foreground">
          <ShoppingCart className="mr-3 text-primary" />
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-16 bg-card/40 backdrop-blur-sm rounded-lg border border-border/30">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/30 flex items-center justify-center">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Browse Products
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-md border border-border/30 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary/30 text-foreground">
                      <tr>
                        <th className="py-4 px-4 text-left">Product</th>
                        <th className="py-4 px-4 text-center">Quantity</th>
                        <th className="py-4 px-4 text-right">Price</th>
                        <th className="py-4 px-4 text-right">Total</th>
                        <th className="py-4 px-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => {
                        return (
                          <tr key={item.id} className="border-t border-border/20">
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-16 h-16 object-cover rounded-md mr-4"
                                />
                                <div>
                                  <h3 className="font-medium text-foreground">
                                    <Link
                                      to={`/products/${item.id}`}
                                      className="hover:text-primary transition-colors"
                                    >
                                      {item.name}
                                    </Link>
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    {item.category.replace("-", " ")}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center justify-center">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 border-border/50"
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                >
                                  <Minus size={14} />
                                </Button>
                                <span className="w-8 text-center text-foreground">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 border-border/50"
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                >
                                  <Plus size={14} />
                                </Button>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-right">
                              <div>
                                <span className="font-medium text-foreground">${item.price.toFixed(2)}</span>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-right font-medium text-foreground">
                              ${(item.price * item.quantity).toFixed(2)}
                            </td>
                            <td className="py-4 px-4 text-right">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeItem(item.id)}
                                className="text-muted-foreground hover:text-destructive"
                              >
                                <Trash size={18} />
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cart Actions */}
              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={() => clearCart()}
                  className="border-border/50 text-muted-foreground hover:text-foreground"
                >
                  Clear Cart
                </Button>
                <Link to="/products">
                  <Button variant="outline" className="border-primary/60 text-foreground hover:bg-primary/10">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-md border border-border/30 p-6">
                <h2 className="text-xl font-bold mb-4 text-foreground">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-border pt-3">
                    <h3 className="font-medium mb-2 text-foreground">Shipping</h3>
                    
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="shipping"
                          value="standard"
                          checked={shippingMethod === "standard"}
                          onChange={() => setShippingMethod("standard")}
                          className="mr-2 text-primary"
                        />
                        <div className="flex justify-between w-full">
                          <span className="text-muted-foreground">{shippingOptions.standard.name}</span>
                          <span className="text-foreground">
                            {shippingOptions.standard.free 
                              ? "Free" 
                              : `$${shippingOptions.standard.price.toFixed(2)}`
                            }
                          </span>
                        </div>
                      </label>
                      
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="shipping"
                          value="express"
                          checked={shippingMethod === "express"}
                          onChange={() => setShippingMethod("express")}
                          className="mr-2 text-primary"
                        />
                        <div className="flex justify-between w-full">
                          <span className="text-muted-foreground">{shippingOptions.express.name}</span>
                          <span className="text-foreground">${shippingOptions.express.price.toFixed(2)}</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-b border-border py-3 mb-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Link to="/checkout">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Proceed to Checkout
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                
                <div className="mt-4 text-sm text-muted-foreground text-center">
                  Taxes calculated at checkout
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
