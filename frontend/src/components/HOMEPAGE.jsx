import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  User,
  Menu,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Star,
} from "lucide-react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [productData, setProductData] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await axios.get("/api/user/home", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token-olex")}`,
          },
        });
      } catch (error) {
        navigate("/auth");
      }
    };
    checkUser();
  }, []);

  const bannerSlides = [
    {
      title: "Republic Day Sale",
      subtitle: "Up to 70% OFF on Electronics",
      bg: "bg-gradient-to-r from-orange-500 via-white to-green-500",
    },
    {
      title: "New Year Offers",
      subtitle: "Flat 50% OFF on Fashion",
      bg: "bg-gradient-to-r from-purple-600 to-pink-600",
    },
    {
      title: "Winter Collection",
      subtitle: "Buy 2 Get 1 Free on Clothes",
      bg: "bg-gradient-to-r from-blue-600 to-cyan-500",
    },
  ];

  const categories = [
    { name: "Mobile Phones", icon: "📱" },
    { name: "Clothes", icon: "👕" },
    { name: "Earbuds", icon: "🎧" },
    { name: "Laptops", icon: "💻" },
    { name: "Cameras", icon: "📷" },
    { name: "Watches", icon: "⌚" },
    { name: "Shoes", icon: "👟" },
    { name: "Bags", icon: "🎒" },
  ];

  const menuCategories = [
    {
      title: "Electronics",
      items: ["Mobile Phones", "Laptops", "Tablets", "Cameras", "Televisions"],
    },
    {
      title: "Fashion",
      items: [
        "Men's Clothing",
        "Women's Clothing",
        "Kids Wear",
        "Footwear",
        "Accessories",
      ],
    },
    {
      title: "Home & Kitchen",
      items: [
        "Home Appliances",
        "Kitchen Appliances",
        "Furniture",
        "Home Decor",
        "Cookware",
      ],
    },
    {
      title: "Beauty & Personal Care",
      items: ["Skincare", "Makeup", "Haircare", "Fragrances", "Personal Care"],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const addToCart = (productId) => {
    setCart((prev) => [...prev, productId]);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length,
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("/api/products");
        console.log(data);
        setProductData(data.data);
      } catch (err) {
        setLoading(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold text-blue-600">ShopZone</h1>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home Appliances
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Mobile Phones
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Fashion
              </a>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Heart className="w-6 h-6" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="bg-white w-80 h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold">Categories</h2>
              <button onClick={() => setMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4">
              {menuCategories.map((category, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-blue-600 hover:bg-gray-100 block p-2 rounded"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Carousel Banner */}
      <div className="relative max-w-7xl mx-auto mt-4 px-4">
        <div className="relative h-96 rounded-xl overflow-hidden">
          {bannerSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ${
                idx === currentSlide
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              } ${slide.bg} flex items-center justify-center`}
            >
              <div className="text-center text-white px-4">
                <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-2xl drop-shadow-md">{slide.subtitle}</p>
                <button className="mt-6 bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {bannerSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Category Icons */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((category, idx) => (
            <button
              key={idx}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all transform hover:scale-105"
            >
              <span className="text-4xl">{category.icon}</span>
              <span className="text-sm text-center font-medium">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid Section - Product cards removed */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pb-12">
        <h2 className="text-2xl font-bold mb-6">Trending Products</h2>
        { productData.length==0 ? <h1 className="text-2xl text-center text-gray-600 m-30">There is no product to show</h1> :
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product cards will be rendered here */}
          {loading && <h1>products are loading</h1>}

          { 
          productData.map((product) => (
            <ProductCard
              key={product._id}
              title={product.title}
              price={product.price}
              discount={product.discount}
              imageURL={product.image[0]}
              condition={product.condition}
              category={product.category}
            />
          ))
          }
        </div>
}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 ShopZone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
