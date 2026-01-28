import React, { useState } from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";

export default function ProductCard({title, price, discount, imageURL, condtion, category}) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = {
    name: "iPhone 17 Air",
    price: "₹1,24,999",
    originalPrice: "₹1,39,999",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 2847,
    category: "Smartphones",
    discount: 11,
    features: [
      '6.1" Super Retina XDR',
      "A18 Pro Chip",
      "48MP Camera",
      "5G Enabled",
    ],
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden max-w-xs w-full">
        {/* Image Section */}
        <div className="relative bg-gray-900">
          <img
            src={imageURL}
            alt={title}
            className="w-full h-48 object-cover"
          />

          {/* Wishlist Button */}
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <Heart
              className={`w-5 h-5 ${
                isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </button>

          {/* Discount Badge */}
          <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
            {discount}% OFF
          </div>

          {/* New Arrival Badge */}
          <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
            New Arrival
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4">
          {/* Category */}
          <p className="text-blue-600 text-xs font-semibold mb-1">
            {category}
          </p>

          {/* Product Name */}
          <h3 className="font-bold text-lg mb-2 text-gray-900">
            {title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded">
              <span className="font-semibold text-sm">{product.rating}</span>
              <Star className="w-3 h-3 fill-white" />
            </div>
            <span className="text-gray-500 text-xs">
              ({product.reviews.toLocaleString()} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-bold text-gray-900">
              {price}
            </span>
            <span className="text-xs text-gray-400 line-through">
              {product.originalPrice}
            </span>
          </div>
          <p className="text-xs text-green-600 font-semibold mb-3">
            You save ₹15,000
          </p>

          {/* Action Buttons */}
          <div className="flex gap-2 mb-3">
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                addedToCart
                  ? "bg-green-600 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              {addedToCart ? "Added!" : "Add to Cart"}
            </button>
            <button className="px-5 py-2.5 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-all">
              Buy Now
            </button>
          </div>

          {/* Delivery Info */}
          <div className="flex items-center justify-between text-xs pt-3 border-t border-gray-100">
            <span className="text-gray-600">Free Delivery</span>
            <span className="text-green-600 font-semibold">
              Expected: 2-3 days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
