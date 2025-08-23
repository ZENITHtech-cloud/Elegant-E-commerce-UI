import React from 'react';
import { ProductCard } from './ProductCard';
export function NewArrivals() {
  const newArrivals = [{
    id: '5',
    name: 'Designer Dress',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Clothing',
    isNew: true
  }, {
    id: '6',
    name: 'Premium Headphones',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Electronics',
    isNew: true
  }, {
    id: '7',
    name: 'Luxury Watch',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
    isNew: true
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              New Arrivals
            </h2>
            <p className="text-gray-600 max-w-2xl">
              The latest additions to our collection, featuring this season's
              must-have pieces.
            </p>
          </div>
          <a href="/new-arrivals" className="text-gray-800 font-medium hover:underline hidden md:block">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {newArrivals.map(product => <ProductCard key={product.id} {...product} />)}
        </div>
        <div className="text-center mt-8 md:hidden">
          <a href="/new-arrivals" className="text-gray-800 font-medium hover:underline">
            View All New Arrivals
          </a>
        </div>
      </div>
    </section>;
}