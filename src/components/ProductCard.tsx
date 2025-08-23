import React from 'react';
import { ShoppingBagIcon, HeartIcon } from 'lucide-react';
interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  isNew?: boolean;
  isFeatured?: boolean;
}
export function ProductCard({
  id,
  name,
  price,
  image,
  category,
  isNew,
  isFeatured
}: ProductCardProps) {
  return <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-100 group-hover:opacity-90 transition-opacity">
        <img src={image} alt={name} className="h-full w-full object-cover object-center" />
        {isNew && <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            New
          </div>}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex space-x-2">
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors">
              <ShoppingBagIcon size={20} />
            </button>
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors">
              <HeartIcon size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {category && <p className="text-sm text-gray-500">{category}</p>}
        <h3 className="text-base font-medium text-gray-800">{name}</h3>
        <p className="text-sm font-semibold text-gray-900">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>;
}