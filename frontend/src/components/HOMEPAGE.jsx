// import React, { useState, useEffect } from 'react';
// import { ShoppingCart, User, Menu, Search, X, ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';

// export default function EcommerceHomepage() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [wishlist, setWishlist] = useState([]);
//   const [cart, setCart] = useState([]);

//   const bannerSlides = [
//     {
//       title: "Republic Day Sale",
//       subtitle: "Up to 70% OFF on Electronics",
//       bg: "bg-gradient-to-r from-orange-500 via-white to-green-500"
//     },
//     {
//       title: "New Year Offers",
//       subtitle: "Flat 50% OFF on Fashion",
//       bg: "bg-gradient-to-r from-purple-600 to-pink-600"
//     },
//     {
//       title: "Winter Collection",
//       subtitle: "Buy 2 Get 1 Free on Clothes",
//       bg: "bg-gradient-to-r from-blue-600 to-cyan-500"
//     }
//   ];

//   const categories = [
//     { name: 'Mobile Phones', icon: '📱' },
//     { name: 'Clothes', icon: '👕' },
//     { name: 'Earbuds', icon: '🎧' },
//     { name: 'Laptops', icon: '💻' },
//     { name: 'Cameras', icon: '📷' },
//     { name: 'Watches', icon: '⌚' },
//     { name: 'Shoes', icon: '👟' },
//     { name: 'Bags', icon: '🎒' }
//   ];

//   const products = [
//     {
//       id: 1,
//       name: 'iPhone 15 Pro',
//       price: '₹1,34,999',
//       originalPrice: '₹1,49,999',
//       image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
//       rating: 4.8,
//       category: 'Mobile'
//     },
//     {
//       id: 2,
//       name: 'Premium Cotton Shirt',
//       price: '₹1,299',
//       originalPrice: '₹2,499',
//       image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
//       rating: 4.5,
//       category: 'Clothes'
//     },
//     {
//       id: 3,
//       name: 'Power Bank 20000mAh',
//       price: '₹1,999',
//       originalPrice: '₹3,499',
//       image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop',
//       rating: 4.6,
//       category: 'Electronics'
//     },
//     {
//       id: 4,
//       name: 'Wireless Earbuds Pro',
//       price: '₹2,999',
//       originalPrice: '₹5,999',
//       image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
//       rating: 4.7,
//       category: 'Audio'
//     },
//     {
//       id: 5,
//       name: 'Samsung Galaxy S24',
//       price: '₹79,999',
//       originalPrice: '₹89,999',
//       image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
//       rating: 4.6,
//       category: 'Mobile'
//     },
//     {
//       id: 6,
//       name: 'Designer Jeans',
//       price: '₹2,499',
//       originalPrice: '₹4,999',
//       image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
//       rating: 4.4,
//       category: 'Clothes'
//     },
//     {
//       id: 7,
//       name: 'Smart Watch Ultra',
//       price: '₹12,999',
//       originalPrice: '₹19,999',
//       image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop',
//       rating: 4.5,
//       category: 'Wearables'
//     },
//     {
//       id: 8,
//       name: 'Laptop Backpack',
//       price: '₹1,799',
//       originalPrice: '₹2,999',
//       image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
//       rating: 4.3,
//       category: 'Accessories'
//     }
//   ];

//   const menuCategories = [
//     {
//       title: 'Electronics',
//       items: ['Mobile Phones', 'Laptops', 'Tablets', 'Cameras', 'Televisions']
//     },
//     {
//       title: 'Fashion',
//       items: ['Men\'s Clothing', 'Women\'s Clothing', 'Kids Wear', 'Footwear', 'Accessories']
//     },
//     {
//       title: 'Home & Kitchen',
//       items: ['Home Appliances', 'Kitchen Appliances', 'Furniture', 'Home Decor', 'Cookware']
//     },
//     {
//       title: 'Beauty & Personal Care',
//       items: ['Skincare', 'Makeup', 'Haircare', 'Fragrances', 'Personal Care']
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   const toggleWishlist = (productId) => {
//     setWishlist(prev => 
//       prev.includes(productId) 
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const addToCart = (productId) => {
//     setCart(prev => [...prev, productId]);
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation Bar */}
//       <nav className="bg-white shadow-md sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo & Menu */}
//             <div className="flex items-center gap-4">
//               <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
//                 <Menu className="w-6 h-6" />
//               </button>
//               <h1 className="text-2xl font-bold text-blue-600">ShopZone</h1>
//             </div>

//             {/* Search Bar */}
//             <div className="hidden md:flex flex-1 max-w-2xl mx-8">
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   placeholder="Search for products, brands and more..."
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
//               </div>
//             </div>

//             {/* Navigation Tabs */}
//             <div className="hidden lg:flex items-center gap-6">
//               <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home Appliances</a>
//               <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Mobile Phones</a>
//               <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Fashion</a>
//             </div>

//             {/* User Actions */}
//             <div className="flex items-center gap-4">
//               <button className="p-2 hover:bg-gray-100 rounded-lg relative">
//                 <Heart className="w-6 h-6" />
//                 {wishlist.length > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                     {wishlist.length}
//                   </span>
//                 )}
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded-lg relative">
//                 <ShoppingCart className="w-6 h-6" />
//                 {cart.length > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                     {cart.length}
//                   </span>
//                 )}
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded-lg">
//                 <User className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Sidebar Menu */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setMenuOpen(false)}>
//           <div className="bg-white w-80 h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
//             <div className="p-4 border-b flex items-center justify-between">
//               <h2 className="text-xl font-bold">Categories</h2>
//               <button onClick={() => setMenuOpen(false)}>
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//             <div className="p-4">
//               {menuCategories.map((category, idx) => (
//                 <div key={idx} className="mb-6">
//                   <h3 className="font-bold text-lg mb-2 text-gray-800">{category.title}</h3>
//                   <ul className="space-y-2">
//                     {category.items.map((item, itemIdx) => (
//                       <li key={itemIdx}>
//                         <a href="#" className="text-gray-600 hover:text-blue-600 hover:bg-gray-100 block p-2 rounded">
//                           {item}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Carousel Banner */}
//       <div className="relative max-w-7xl mx-auto mt-4 px-4">
//         <div className="relative h-96 rounded-xl overflow-hidden">
//           {bannerSlides.map((slide, idx) => (
//             <div
//               key={idx}
//               className={`absolute inset-0 transition-all duration-700 ${
//                 idx === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
//               } ${slide.bg} flex items-center justify-center`}
//             >
//               <div className="text-center text-white px-4">
//                 <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">{slide.title}</h2>
//                 <p className="text-2xl drop-shadow-md">{slide.subtitle}</p>
//                 <button className="mt-6 bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
//                   Shop Now
//                 </button>
//               </div>
//             </div>
//           ))}
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//             {bannerSlides.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentSlide(idx)}
//                 className={`w-3 h-3 rounded-full ${
//                   idx === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Category Icons */}
//       <div className="max-w-7xl mx-auto px-4 mt-8">
//         <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
//         <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
//           {categories.map((category, idx) => (
//             <button
//               key={idx}
//               className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all transform hover:scale-105"
//             >
//               <span className="text-4xl">{category.icon}</span>
//               <span className="text-sm text-center font-medium">{category.name}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="max-w-7xl mx-auto px-4 mt-12 pb-12">
//         <h2 className="text-2xl font-bold mb-6">Trending Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden"
//             >
//               <div className="relative">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-64 object-cover"
//                 />
//                 <button
//                   onClick={() => toggleWishlist(product.id)}
//                   className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
//                 >
//                   <Heart
//                     className={`w-5 h-5 ${
//                       wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
//                     }`}
//                   />
//                 </button>
//                 <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
//                   {Math.round(((parseFloat(product.originalPrice.replace(/[₹,]/g, '')) - parseFloat(product.price.replace(/[₹,]/g, ''))) / parseFloat(product.originalPrice.replace(/[₹,]/g, ''))) * 100)}% OFF
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="font-semibold text-lg mb-2 truncate">{product.name}</h3>
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded text-sm">
//                     <span>{product.rating}</span>
//                     <Star className="w-3 h-3 fill-white" />
//                   </div>
//                   <span className="text-gray-500 text-sm">{product.category}</span>
//                 </div>
//                 <div className="flex items-center gap-2 mb-3">
//                   <span className="text-xl font-bold text-gray-800">{product.price}</span>
//                   <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
//                 </div>
//                 <button
//                   onClick={() => addToCart(product.id)}
//                   className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <p className="text-gray-400">© 2026 ShopZone. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Menu, Search, X, ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';

export default function EcommerceHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const bannerSlides = [
    {
      title: "Republic Day Sale",
      subtitle: "Up to 70% OFF on Electronics",
      bg: "bg-gradient-to-r from-orange-500 via-white to-green-500"
    },
    {
      title: "New Year Offers",
      subtitle: "Flat 50% OFF on Fashion",
      bg: "bg-gradient-to-r from-purple-600 to-pink-600"
    },
    {
      title: "Winter Collection",
      subtitle: "Buy 2 Get 1 Free on Clothes",
      bg: "bg-gradient-to-r from-blue-600 to-cyan-500"
    }
  ];

  const categories = [
    { name: 'Mobile Phones', icon: '📱' },
    { name: 'Clothes', icon: '👕' },
    { name: 'Earbuds', icon: '🎧' },
    { name: 'Laptops', icon: '💻' },
    { name: 'Cameras', icon: '📷' },
    { name: 'Watches', icon: '⌚' },
    { name: 'Shoes', icon: '👟' },
    { name: 'Bags', icon: '🎒' }
  ];

  const menuCategories = [
    {
      title: 'Electronics',
      items: ['Mobile Phones', 'Laptops', 'Tablets', 'Cameras', 'Televisions']
    },
    {
      title: 'Fashion',
      items: ['Men\'s Clothing', 'Women\'s Clothing', 'Kids Wear', 'Footwear', 'Accessories']
    },
    {
      title: 'Home & Kitchen',
      items: ['Home Appliances', 'Kitchen Appliances', 'Furniture', 'Home Decor', 'Cookware']
    },
    {
      title: 'Beauty & Personal Care',
      items: ['Skincare', 'Makeup', 'Haircare', 'Fragrances', 'Personal Care']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (productId) => {
    setCart(prev => [...prev, productId]);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Menu */}
            <div className="flex items-center gap-4">
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
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
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home Appliances</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Mobile Phones</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Fashion</a>
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
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setMenuOpen(false)}>
          <div className="bg-white w-80 h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold">Categories</h2>
              <button onClick={() => setMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4">
              {menuCategories.map((category, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <a href="#" className="text-gray-600 hover:text-blue-600 hover:bg-gray-100 block p-2 rounded">
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
                idx === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              } ${slide.bg} flex items-center justify-center`}
            >
              <div className="text-center text-white px-4">
                <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">{slide.title}</h2>
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
                  idx === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
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
              <span className="text-sm text-center font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid Section - Product cards removed */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pb-12">
        <h2 className="text-2xl font-bold mb-6">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product cards will be rendered here */}
        </div>
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

//  card code
// import React, { useState } from 'react';
// import { Heart, Star, ShoppingCart } from 'lucide-react';

// export default function IPhoneProductCard() {
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [addedToCart, setAddedToCart] = useState(false);

//   const product = {
//     name: 'iPhone 17 Air',
//     price: '₹1,24,999',
//     originalPrice: '₹1,39,999',
//     image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop',
//     rating: 4.9,
//     reviews: 2847,
//     category: 'Smartphones',
//     discount: 11,
//     features: ['6.1" Super Retina XDR', 'A18 Pro Chip', '48MP Camera', '5G Enabled']
//   };

//   const handleAddToCart = () => {
//     setAddedToCart(true);
//     setTimeout(() => setAddedToCart(false), 2000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 overflow-hidden max-w-sm w-full">
//         {/* Image Section */}
//         <div className="relative bg-gradient-to-br from-gray-100 to-gray-50">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-80 object-cover"
//           />
          
//           {/* Wishlist Button */}
//           <button
//             onClick={() => setIsWishlisted(!isWishlisted)}
//             className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
//           >
//             <Heart
//               className={`w-6 h-6 ${
//                 isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'
//               }`}
//             />
//           </button>
          
//           {/* Discount Badge */}
//           <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-bold">
//             {product.discount}% OFF
//           </div>

//           {/* New Arrival Badge */}
//           <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
//             New Arrival
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="p-6">
//           {/* Category */}
//           <p className="text-blue-600 text-sm font-semibold mb-2">{product.category}</p>
          
//           {/* Product Name */}
//           <h3 className="font-bold text-2xl mb-3 text-gray-800">{product.name}</h3>
          
//           {/* Rating */}
//           <div className="flex items-center gap-2 mb-4">
//             <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-lg">
//               <span className="font-semibold">{product.rating}</span>
//               <Star className="w-4 h-4 fill-white" />
//             </div>
//             <span className="text-gray-500 text-sm">({product.reviews.toLocaleString()} reviews)</span>
//           </div>

//           {/* Features */}
//           <div className="mb-4">
//             <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
//             <div className="grid grid-cols-2 gap-2">
//               {product.features.map((feature, idx) => (
//                 <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
//                   <span className="text-green-500">✓</span>
//                   <span>{feature}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Price */}
//           <div className="flex items-center gap-3 mb-4 pt-4 border-t border-gray-200">
//             <span className="text-3xl font-bold text-gray-800">{product.price}</span>
//             <div className="flex flex-col">
//               <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
//               <span className="text-xs text-green-600 font-semibold">You save ₹15,000</span>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-3">
//             <button
//               onClick={handleAddToCart}
//               className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
//                 addedToCart
//                   ? 'bg-green-600 text-white'
//                   : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
//               }`}
//             >
//               <ShoppingCart className="w-5 h-5" />
//               {addedToCart ? 'Added!' : 'Add to Cart'}
//             </button>
//             <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all">
//               Buy Now
//             </button>
//           </div>

//           {/* Delivery Info */}
//           <div className="mt-4 pt-4 border-t border-gray-200">
//             <div className="flex items-center justify-between text-sm">
//               <span className="text-gray-600">Free Delivery</span>
//               <span className="text-green-600 font-semibold">Expected: 2-3 days</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }