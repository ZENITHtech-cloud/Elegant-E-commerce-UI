import React from 'react';
import { ProductCard } from './ProductCard';
export function FeaturedProducts() {
  const featuredProducts = [{
    id: '1',
    name: 'Minimalist Watch',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
    isFeatured: true
  }, {
    id: '2',
    name: 'Leather Tote Bag',
    price: 239.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Bags',
    isFeatured: true
  }, {
    id: '3',
    name: 'Modern Sunglasses',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
    isFeatured: true
  }, {
    id: '4',
    name: 'Classic Sneakers',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Footwear',
    isFeatured: true
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the finest products, designed
            for quality and style.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => <ProductCard key={product.id} {...product} />)}
        </div>
        <div className="text-center mt-12">
          <button className="border border-gray-300 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>;
}