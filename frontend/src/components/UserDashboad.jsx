import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfileDashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    location: "New York, USA",
    joinDate: "January 2024",
    avatar:
      "https://ui-avatars.com/api/?name=John+Doe&size=200&background=f97316&color=fff",
  });

  const [stats] = useState({
    totalListings: 12,
    activeListing: 8,
    soldItems: 24,
    totalRevenue: "$3,450",
  });

  const [recentProducts] = useState([
    {
      id: 1,
      title: "iPhone 14 Pro Max 256GB",
      category: "Electronics",
      price: "$899",
      originalPrice: "$1,099",
      status: "Active",
      views: 234,
      likes: 45,
      image:
        "https://images.unsplash.com/photo-1678652197950-1e66d683d659?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Nike Air Max 2024 Limited Edition",
      category: "Fashion",
      price: "$159",
      originalPrice: "$199",
      status: "Active",
      views: 189,
      likes: 32,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      title: 'MacBook Pro 16" M3 Max',
      category: "Electronics",
      price: "$1,899",
      originalPrice: "$2,499",
      status: "Sold",
      views: 456,
      likes: 89,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Gaming Chair RGB Pro",
      category: "Home & Garden",
      price: "$299",
      originalPrice: "$399",
      status: "Active",
      views: 167,
      likes: 28,
      image:
        "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Sony WH-1000XM5 Headphones",
      category: "Electronics",
      price: "$349",
      originalPrice: "$399",
      status: "Active",
      views: 298,
      likes: 61,
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Vintage Leather Jacket",
      category: "Fashion",
      price: "$179",
      originalPrice: "$250",
      status: "Active",
      views: 145,
      likes: 37,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    },
  ]);

  const [unreadMessages] = useState(7);

  const handleAddProduct = () => {
    navigate("/user/product");
  };

  const handleMessagesClick = () => {
    navigate("/messages");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-8 px-4 sm:px-6 lg:px-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&family=Urbanist:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Urbanist', sans-serif;
        }
        
        .font-display {
          font-family: 'Philosopher', serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .product-card {
          position: relative;
          overflow: hidden;
        }

        .product-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .product-card:hover::before {
          left: 100%;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header with Messages Button */}
        <div className="flex items-center justify-between mb-8 animate-fade-in-up">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
              My Dashboard
            </h1>
            <p className="text-lg text-gray-600">
              Manage your products and track your sales
            </p>
          </div>

          {/* Messages Button */}
          <button
            onClick={handleMessagesClick}
            className="relative bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 border-2 border-orange-200"
          >
            <span className="text-2xl">💬</span>
            <span className="hidden sm:inline">Messages</span>
            {unreadMessages > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-lg">
                {unreadMessages}
              </span>
            )}
          </button>
        </div>

        {/* Profile Card & Stats */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Profile Card */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-xl shadow-orange-100 overflow-hidden animate-slide-in-left">
            <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>
            <div className="p-6 text-center">
              <div className="mb-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 rounded-full mx-auto border-4 border-orange-200 shadow-lg"
                />
              </div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-1">
                {user.name}
              </h2>
              <p className="text-gray-600 mb-1">{user.email}</p>
              <p className="text-sm text-gray-500 mb-1">📍 {user.location}</p>
              <p className="text-sm text-gray-500">
                Member since {user.joinDate}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            <div className="bg-white rounded-lg shadow-lg shadow-orange-100 p-6 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Total Listings
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stats.totalListings}
                  </p>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                  📦
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg shadow-green-100 p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Active Listings
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stats.activeListing}
                  </p>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                  ✅
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg shadow-blue-100 p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Sold Items
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stats.soldItems}
                  </p>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                  💰
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg shadow-purple-100 p-6 border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Total Revenue
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stats.totalRevenue}
                  </p>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                  💵
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Product Button */}
        <div className="mb-8 animate-fade-in-up delay-200">
          <button
            onClick={handleAddProduct}
            className="w-full sm:w-auto bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-4 px-8 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
          >
            <span className="text-2xl">➕</span>
            Add New Product
          </button>
        </div>

        {/* Recent Products */}
        <div className="bg-white rounded-xl shadow-2xl shadow-orange-100 overflow-hidden animate-fade-in-up delay-300">
          <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  My Products
                </h2>
                <p className="text-gray-600 text-sm">
                  Browse and manage your listings
                </p>
              </div>
              <button className="text-orange-600 hover:text-orange-700 font-bold text-sm sm:text-base flex items-center gap-2 hover:gap-3 transition-all duration-300">
                View All
                <span className="text-xl">→</span>
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {recentProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`product-card group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-200 hover:border-orange-300 animate-scale-in delay-${index + 1}00`}
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-2 right-2">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold shadow-md backdrop-blur-sm ${
                          product.status === "Active"
                            ? "bg-green-500/90 text-white"
                            : "bg-gray-800/90 text-white"
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>

                    {/* Quick Actions Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 gap-2">
                      <button className="bg-white text-gray-900 px-3 py-1.5 rounded-md font-semibold text-xs hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                        Edit
                      </button>
                      <button className="bg-white text-gray-900 px-3 py-1.5 rounded-md font-semibold text-xs hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                        Delete
                      </button>
                    </div>

                    {/* Discount Badge */}
                    {product.originalPrice && (
                      <div className="absolute top-2 left-2">
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow-md">
                          {Math.round(
                            ((parseFloat(
                              product.originalPrice.replace("$", ""),
                            ) -
                              parseFloat(product.price.replace("$", ""))) /
                              parseFloat(
                                product.originalPrice.replace("$", ""),
                              )) *
                              100,
                          )}
                          % OFF
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-3">
                    <div className="mb-2">
                      <h3 className="font-bold text-gray-900 mb-0.5 text-sm group-hover:text-orange-600 transition-colors duration-300 line-clamp-1">
                        {product.title}
                      </h3>
                      <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                        {product.category}
                      </p>
                    </div>

                    {/* Price Section */}
                    <div className="mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-[10px] text-gray-400 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-gray-600">
                        <span className="text-sm">👁️</span>
                        <span className="text-[11px] font-semibold">
                          {product.views}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <span className="text-sm">❤️</span>
                        <span className="text-[11px] font-semibold">
                          {product.likes}
                        </span>
                      </div>
                      <button className="flex items-center gap-1 text-orange-600 hover:text-orange-700 font-semibold text-[11px] transition-colors duration-300">
                        <span>Share</span>
                        <span className="text-xs">↗</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDashboard;
