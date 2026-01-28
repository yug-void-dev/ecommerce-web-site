import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

export default function ProductCard() {
  const [isFavorite, setIsFavorite] = useState(false);

  const product = {
    title: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with active noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    originalPrice: 4999,
    discountedPrice: 2999,
    discount: 40,
    rating: 4.5,
    reviews: 234,
    seller: "TechStore Official",
    inStock: true
  };

  const discountPercentage = Math.round(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100);

  return (
    <div className="max-w-sm mx-auto my-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        {/* Image Section */}
        <div className="relative group">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Discount Badge */}
          {product.discount > 0 && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {discountPercentage}% OFF
            </div>
          )}
          
          {/* Favorite Button */}
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <Heart 
              className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </button>
          
          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="bg-white px-4 py-2 rounded-lg font-semibold text-gray-800">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
              <Star className="w-3 h-3 fill-white" />
              <span>{product.rating}</span>
            </div>
            <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {product.description}
          </p>

          {/* Seller */}
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {product.seller.charAt(0)}
            </div>
            <div>
              <p className="text-xs text-gray-500">Sold by</p>
              <p className="text-sm font-semibold text-gray-800">{product.seller}</p>
            </div>
          </div>

          {/* Price Section */}
          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">
                ₹{product.discountedPrice.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.discountedPrice && (
                <span className="text-lg text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <p className="text-green-600 text-sm font-semibold mt-1">
              You save ₹{(product.originalPrice - product.discountedPrice).toLocaleString('en-IN')}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}