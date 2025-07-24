
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Product {
  id: string;
  name: string;
  category: string;
  type?: string;
  description?: string;
  specs: any;
  sample_price?: string;
  available: boolean;
  featured: boolean;
  show_in_storefront: boolean;
  show_in_design_tool: boolean;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async (filters?: {
    category?: string;
    show_in_storefront?: boolean;
    show_in_design_tool?: boolean;
    featured?: boolean;
  }) => {
    try {
      console.log('Fetching products with filters:', filters);
      setLoading(true);
      setError(null);
      
      let query = supabase.from('product_storage').select('*');
      
      if (filters?.category) {
        query = query.eq('category', filters.category);
      }
      
      if (filters?.show_in_storefront !== undefined) {
        query = query.eq('show_in_storefront', filters.show_in_storefront);
      }
      
      if (filters?.show_in_design_tool !== undefined) {
        query = query.eq('show_in_design_tool', filters.show_in_design_tool);
      }
      
      if (filters?.featured !== undefined) {
        query = query.eq('featured', filters.featured);
      }
      
      query = query.eq('available', true).order('name');
      
      const { data, error: fetchError } = await query;
      
      if (fetchError) {
        console.error('Supabase fetch error:', fetchError);
        throw fetchError;
      }
      
      console.log('Fetched products:', data);
      setProducts(data || []);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  }, []);

  const getStorefrontProducts = useCallback(() => {
    console.log('Getting storefront products');
    return fetchProducts();
  }, [fetchProducts]);

  const getDesignToolProducts = useCallback(() => {
    return fetchProducts({ show_in_design_tool: true });
  }, [fetchProducts]);

  const getFeaturedProducts = useCallback(() => {
    return fetchProducts({ featured: true });
  }, [fetchProducts]);

  const getProductsByCategory = useCallback((category: string) => {
    return fetchProducts({ category });
  }, [fetchProducts]);

  const getProductById = useCallback(async (id: string): Promise<Product | null> => {
    try {
      console.log('Fetching product by ID:', id);
      const { data, error } = await supabase
        .from('product_storage')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
      }
      
      console.log('Fetched product:', data);
      return data;
    } catch (err) {
      console.error('Error fetching product by ID:', err);
      return null;
    }
  }, []);

  useEffect(() => {
    console.log('useProducts hook initialized');
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error,
    fetchProducts,
    getStorefrontProducts,
    getDesignToolProducts,
    getFeaturedProducts,
    getProductsByCategory,
    getProductById
  };
};
