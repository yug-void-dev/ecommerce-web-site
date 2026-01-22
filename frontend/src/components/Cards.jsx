import React, { useState } from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';

export default function IPhoneProductCard() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = {
    name: 'iPhone 17 Air',
    price: '₹1,24,999',
    originalPrice: '₹1,39,999',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop',
    rating: 4.9,
    reviews: 2847,
    category: 'Smartphones',
    discount: 11,
    features: ['6.1" Super Retina XDR', 'A18 Pro Chip', '48MP Camera', '5G Enabled']
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 overflow-hidden max-w-sm w-full">
        {/* Image Section */}
        <div className="relative bg-gradient-to-br from-gray-100 to-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover"
          />
          
          {/* Wishlist Button */}
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <Heart
              className={`w-6 h-6 ${
                isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'
              }`}
            />
          </button>
          
          {/* Discount Badge */}
          <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-bold">
            {product.discount}% OFF
          </div>

          {/* New Arrival Badge */}
          <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            New Arrival
          </div>
        </div>

        {/* Product Details */}
        <div className="p-6">
          {/* Category */}
          <p className="text-blue-600 text-sm font-semibold mb-2">{product.category}</p>
          
          {/* Product Name */}
          <h3 className="font-bold text-2xl mb-3 text-gray-800">{product.name}</h3>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-lg">
              <span className="font-semibold">{product.rating}</span>
              <Star className="w-4 h-4 fill-white" />
            </div>
            <span className="text-gray-500 text-sm">({product.reviews.toLocaleString()} reviews)</span>
          </div>

          {/* Features */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
            <div className="grid grid-cols-2 gap-2">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4 pt-4 border-t border-gray-200">
            <span className="text-3xl font-bold text-gray-800">{product.price}</span>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
              <span className="text-xs text-green-600 font-semibold">You save ₹15,000</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              {addedToCart ? 'Added!' : 'Add to Cart'}
            </button>
            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all">
              Buy Now
            </button>
          </div>

          {/* Delivery Info */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Free Delivery</span>
              <span className="text-green-600 font-semibold">Expected: 2-3 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}