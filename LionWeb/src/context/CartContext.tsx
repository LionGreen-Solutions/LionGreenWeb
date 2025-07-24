
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Package } from '@/lib/data';
import { MobilityProduct } from '@/lib/mobilityData';

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
};

type CartPackage = {
  package: Package;
  quantity: number;
};

interface CartContextType {
  items: CartItem[];
  packages: CartPackage[];
  addItem: (item: CartItem) => void;
  addPackageToCart: (pkg: Package) => void;
  removeItem: (productId: number) => void;
  removePackage: (packageId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  updatePackageQuantity: (packageId: number, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  totalPrice: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [packages, setPackages] = useState<CartPackage[]>([]);
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedPackages = localStorage.getItem('cartPackages');
    
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
    
    if (savedPackages) {
      try {
        setPackages(JSON.parse(savedPackages));
      } catch (error) {
        console.error('Failed to parse packages from localStorage:', error);
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);
  
  useEffect(() => {
    localStorage.setItem('cartPackages', JSON.stringify(packages));
  }, [packages]);
  
  // Calculate total number of items in the cart
  const itemCount = items.reduce((count, item) => count + item.quantity, 0) + 
                    packages.reduce((count, pkg) => count + pkg.quantity, 0);
  
  // Calculate total price of all items in the cart
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0) + 
                     packages.reduce((total, pkg) => total + (pkg.package.price * pkg.quantity), 0);
  
  // Calculate subtotal (same as totalPrice in this context)
  const subtotal = totalPrice;
  
  // Add an item to the cart
  const addItem = (item: CartItem) => {
    setItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(i => i.id === item.id);
      
      if (existingItemIndex > -1) {
        // Item already in cart, increase quantity
        const newItems = [...currentItems];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + item.quantity
        };
        return newItems;
      } else {
        // Item not in cart, add it
        return [...currentItems, item];
      }
    });
  };
  
  // Add a package to the cart
  const addPackageToCart = (pkg: Package) => {
    setPackages(currentPackages => {
      const existingPackageIndex = currentPackages.findIndex(item => item.package.id === pkg.id);
      
      if (existingPackageIndex > -1) {
        // Package already in cart, increase quantity
        const newPackages = [...currentPackages];
        newPackages[existingPackageIndex] = {
          ...newPackages[existingPackageIndex],
          quantity: newPackages[existingPackageIndex].quantity + 1
        };
        return newPackages;
      } else {
        // Package not in cart, add it
        return [...currentPackages, { package: pkg, quantity: 1 }];
      }
    });
  };
  
  // Remove a product from the cart
  const removeItem = (productId: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== productId));
  };
  
  // Remove a package from the cart
  const removePackage = (packageId: number) => {
    setPackages(currentPackages => currentPackages.filter(item => item.package.id !== packageId));
  };
  
  // Update the quantity of a product in the cart
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }
    
    setItems(currentItems => {
      return currentItems.map(item => {
        if (item.id === productId) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };
  
  // Update the quantity of a package in the cart
  const updatePackageQuantity = (packageId: number, quantity: number) => {
    if (quantity < 1) {
      removePackage(packageId);
      return;
    }
    
    setPackages(currentPackages => {
      return currentPackages.map(item => {
        if (item.package.id === packageId) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };
  
  // Clear all items from the cart
  const clearCart = () => {
    setItems([]);
    setPackages([]);
  };
  
  const contextValue: CartContextType = {
    items,
    packages,
    addItem,
    addPackageToCart,
    removeItem,
    removePackage,
    updateQuantity,
    updatePackageQuantity,
    clearCart,
    itemCount,
    totalPrice,
    subtotal
  };
  
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
