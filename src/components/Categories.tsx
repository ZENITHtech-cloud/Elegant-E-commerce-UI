import React from 'react';
export function Categories() {
  const categories = [{
    id: 'clothing',
    name: 'Clothing',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    count: 142
  }, {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    count: 76
  }, {
    id: 'footwear',
    name: 'Footwear',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    count: 54
  }];
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collections and find the perfect pieces to complement
            your style.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => <div key={category.id} className="relative group overflow-hidden rounded-lg shadow-md">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm">{category.count} products</p>
                </div>
              </div>
              <a href={`/category/${category.id}`} className="absolute inset-0">
                <span className="sr-only">View {category.name}</span>
              </a>
            </div>)}
        </div>
      </div>
    </section>;
}