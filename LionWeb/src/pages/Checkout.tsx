
import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const [formStep, setFormStep] = useState<number>(1);
  const [shippingMethod, setShippingMethod] = useState<string>("standard");
  const [paymentMethod, setPaymentMethod] = useState<string>("credit");
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);
  
  const shippingOptions = {
    standard: { price: 0, name: "Standard Shipping (3-5 business days)", free: true },
    express: { price: 15.99, name: "Express Shipping (1-2 business days)" },
  };
  
  // Calculate shipping cost
  const shippingCost = shippingOptions[shippingMethod as keyof typeof shippingOptions].price;

  // Calculate total cost
  const total = subtotal + shippingCost;

  const handlePlaceOrder = () => {
    // In a real application, you would process the payment and send order to backend
    setOrderPlaced(true);
    clearCart();
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex-grow text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="mb-8">Please add items to your cart before checking out.</p>
          <Link to="/products">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <ArrowLeft size={16} className="mr-2" />
              Browse Products
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex-grow">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <Check size={40} className="text-green-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Order Successful!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your order. We've sent a confirmation email with your order details.
            </p>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
              <h2 className="font-bold text-lg mb-2">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">LGS-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="space-x-4">
              <Link to="/">
                <Button className="bg-gray-900 hover:bg-gray-800">
                  Return to Home
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/cart" className="text-gray-800 hover:text-gray-600 flex items-center">
            <ArrowLeft size={16} className="mr-1" />
            Back to Cart
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-gray-900">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="lg:w-2/3">
            {/* Progress Steps */}
            <div className="flex mb-8">
              <div className="flex-1">
                <button
                  className={`w-full ${formStep === 1 ? "font-bold" : ""}`}
                  onClick={() => setFormStep(1)}
                >
                  <div 
                    className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                      formStep >= 1 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    1
                  </div>
                  <span className={formStep >= 1 ? "text-gray-900" : "text-gray-500"}>
                    Shipping
                  </span>
                </button>
              </div>

              <div className="w-full max-w-[80px] flex items-center">
                <div className={`h-1 w-full ${formStep >= 2 ? "bg-green-500" : "bg-gray-200"}`}></div>
              </div>

              <div className="flex-1">
                <button
                  className={`w-full ${formStep === 2 ? "font-bold" : ""}`}
                  onClick={() => formStep >= 2 && setFormStep(2)}
                  disabled={formStep < 2}
                >
                  <div 
                    className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                      formStep >= 2 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    2
                  </div>
                  <span className={formStep >= 2 ? "text-gray-900" : "text-gray-500"}>
                    Payment
                  </span>
                </button>
              </div>

              <div className="w-full max-w-[80px] flex items-center">
                <div className={`h-1 w-full ${formStep >= 3 ? "bg-green-500" : "bg-gray-200"}`}></div>
              </div>

              <div className="flex-1">
                <button
                  className={`w-full ${formStep === 3 ? "font-bold" : ""}`}
                  onClick={() => formStep >= 3 && setFormStep(3)}
                  disabled={formStep < 3}
                >
                  <div 
                    className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                      formStep >= 3 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    3
                  </div>
                  <span className={formStep >= 3 ? "text-gray-900" : "text-gray-500"}>
                    Review
                  </span>
                </button>
              </div>
            </div>

            {/* Step 1: Shipping Information */}
            {formStep === 1 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-1" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="123 Main St" className="mt-1" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="San Francisco" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="California" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="94103" className="mt-1" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="(123) 456-7890" className="mt-1" />
                </div>
                
                <div className="pt-4">
                  <h3 className="font-semibold mb-2">Shipping Options</h3>
                  
                  <div className="space-y-2 mb-6">
                    <label className="flex items-center p-3 border rounded-md">
                      <input
                        type="radio"
                        name="shipping"
                        value="standard"
                        checked={shippingMethod === "standard"}
                        onChange={() => setShippingMethod("standard")}
                        className="mr-2"
                      />
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="font-medium">{shippingOptions.standard.name}</p>
                          <p className="text-sm text-gray-500">Delivery by {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                        </div>
                        <span className="font-semibold">
                          {shippingOptions.standard.free 
                            ? "Free" 
                            : `$${shippingOptions.standard.price.toFixed(2)}`
                          }
                        </span>
                      </div>
                    </label>
                    
                    <label className="flex items-center p-3 border rounded-md">
                      <input
                        type="radio"
                        name="shipping"
                        value="express"
                        checked={shippingMethod === "express"}
                        onChange={() => setShippingMethod("express")}
                        className="mr-2"
                      />
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="font-medium">{shippingOptions.express.name}</p>
                          <p className="text-sm text-gray-500">Delivery by {new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                        </div>
                        <span className="font-semibold">${shippingOptions.express.price.toFixed(2)}</span>
                      </div>
                    </label>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    onClick={() => setFormStep(2)}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Payment Information */}
            {formStep === 2 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold mb-6">Payment Information</h2>
                
                <div className="space-y-2 mb-6">
                  <label className="flex items-center p-3 border rounded-md">
                    <input
                      type="radio"
                      name="payment"
                      value="credit"
                      checked={paymentMethod === "credit"}
                      onChange={() => setPaymentMethod("credit")}
                      className="mr-2"
                    />
                    <span className="font-medium">Credit Card</span>
                  </label>
                  
                  <label className="flex items-center p-3 border rounded-md">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={() => setPaymentMethod("paypal")}
                      className="mr-2"
                    />
                    <span className="font-medium">PayPal</span>
                  </label>
                </div>
                
                {paymentMethod === "credit" && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" placeholder="John Doe" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiration Date</Label>
                        <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                      </div>
                      
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" className="mt-1" />
                      </div>
                    </div>
                  </div>
                )}
                
                {paymentMethod === "paypal" && (
                  <div className="text-center p-6 border rounded-md bg-gray-50">
                    <p className="mb-4">You'll be redirected to PayPal to complete your payment.</p>
                    <img src="/placeholder.svg" alt="PayPal" className="h-10 mx-auto" />
                  </div>
                )}
                
                <div className="flex justify-between mt-6">
                  <Button 
                    variant="outline" 
                    onClick={() => setFormStep(1)}
                  >
                    Back
                  </Button>
                  
                  <Button 
                    onClick={() => setFormStep(3)}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    Review Order
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Review Order */}
            {formStep === 3 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold mb-6">Review Your Order</h2>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-2">Order Items</h3>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div className="flex items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-md mr-3"
                          />
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <h3 className="font-medium text-gray-700 mb-2">Shipping Address</h3>
                  <p className="text-gray-600">
                    John Doe<br />
                    123 Main St<br />
                    San Francisco, CA 94103<br />
                    United States
                  </p>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <h3 className="font-medium text-gray-700 mb-2">Shipping Method</h3>
                  <p className="text-gray-600">
                    {shippingOptions[shippingMethod as keyof typeof shippingOptions].name}
                  </p>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <h3 className="font-medium text-gray-700 mb-2">Payment Method</h3>
                  <p className="text-gray-600">
                    {paymentMethod === "credit" ? "Credit Card (ending in 3456)" : "PayPal"}
                  </p>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button 
                    variant="outline" 
                    onClick={() => setFormStep(2)}
                  >
                    Back
                  </Button>
                  
                  <Button 
                    onClick={handlePlaceOrder}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 
                      ? "Free" 
                      : `$${shippingCost.toFixed(2)}`
                    }
                  </span>
                </div>
              </div>
              
              <div className="border-t border-b py-3 mb-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} x {item.quantity}
                    </span>
                    <span>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
