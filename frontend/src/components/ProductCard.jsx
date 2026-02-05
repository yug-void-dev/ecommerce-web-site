import { useState } from "react";
import { Heart, Star, ShoppingCart, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate()

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = async () => {
    navigate(`/product/${product._id}`)
  }

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.image.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + product.image.length) % product.image.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden max-w-sm w-full h-fit cursor-pointer" onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
      {/* Image Section */}
      <div className="relative bg-gray-100 aspect-video overflow-hidden group">
        <img
          src={product.image[currentImageIndex]}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Image Navigation */}
        {product.image.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow hover:shadow-lg transition-all hover:scale-110"
        >
          <Heart
            className={`w-5 h-5 transition-all ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>

        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold animate-pulse">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <p className="text-gray-500 text-xs font-medium uppercase tracking-wide mb-1">
          {product.category}
        </p>

        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm hover:text-blue-600 transition-colors">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-xs mb-2 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-xs text-gray-900">
              {product.rating}
            </span>
          </div>
          <span className="text-gray-500 text-xs">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className={`flex gap-2 transition-all ${showDetails ? "scale-105" : ""}`}>
          <button
            onClick={handleAddToCart}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-semibold text-xs transition-all ${
              addedToCart
                ? "bg-green-600 text-white scale-105"
                : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            {addedToCart ? "Added!" : "Add to Cart"}
          </button>

          <button
            onClick={handleBuyNow}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-semibold text-xs bg-orange-600 text-white hover:bg-orange-700 hover:scale-105 transition-all"
          >
            <Zap className="w-4 h-4" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
