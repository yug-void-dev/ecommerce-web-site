import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Star, Package, Truck, Shield, MapPin, MessageCircle, Phone, Mail, User, X } from 'lucide-react';

// Mock product data - in real app, this would come from API based on route params
const productData = {
  'michael-kors-watch': {
    id: 1,
    brand: 'Michael Kors',
    name: 'Women Rose Gold Analogue Watch',
    rating: 4.7,
    totalRatings: '1.3k',
    price: 14346,
    mrp: 20495,
    discount: 30,
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80',
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80',
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80'
    ],
    size: 'Onesize',
    seller: {
      name: 'Supercom Net',
      memberSince: '2020',
      rating: 4.8,
      totalSales: 245,
      responseTime: '2 hours',
      phone: '+91 98765 43210',
      email: 'supercom@shop.com',
      location: 'Mumbai, Maharashtra',
      verified: true
    },
    category: 'Watches',
    condition: 'New',
    postedDate: '2 days ago',
    breadcrumb: ['Home', 'Accessories', 'Women Accessories', 'Watches', 'Michael Kors Watches'],
    description: 'Elevate your style with this stunning Michael Kors rose gold analogue watch featuring a crystal-embellished bezel and signature MK logo dial. Perfect for both casual and formal occasions.',
    features: [
      'Rose gold stainless steel case and bracelet',
      'Crystal-embellished bezel',
      'Signature MK logo dial',
      'Water resistant up to 50m',
      'Japanese quartz movement',
      'Deployment clasp closure'
    ],
    specifications: {
      'Case Material': 'Stainless Steel',
      'Case Diameter': '38mm',
      'Case Thickness': '10mm',
      'Band Material': 'Stainless Steel',
      'Band Width': '18mm',
      'Movement': 'Quartz',
      'Water Resistance': '5 ATM'
    }
  }
};

const ViewDetailPage = ({ productId = 'michael-kors-watch' }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [pincode, setPincode] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactMessage, setContactMessage] = useState('');

  const product = productData[productId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextImage = () => {
    setImageLoaded(false);
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setImageLoaded(false);
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const checkPincode = () => {
    if (pincode.length === 6) {
      alert(`Delivery available to ${pincode}`);
    } else {
      alert('Please enter a valid 6-digit pincode');
    }
  };

  const handleSendMessage = () => {
    if (contactMessage.trim()) {
      alert(`Message sent to ${product.seller.name}: ${contactMessage}`);
      setContactMessage('');
      setShowContactModal(false);
    } else {
      alert('Please enter a message');
    }
  };

  const handleCallSeller = () => {
    window.location.href = `tel:${product.seller.phone}`;
  };

  const handleEmailSeller = () => {
    window.location.href = `mailto:${product.seller.email}?subject=Inquiry about ${product.name}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                ShopZone
              </h1>
              <div className="hidden md:flex space-x-6 text-sm font-medium">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home Appliances</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Mobile Phones</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Fashion</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* <Heart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-red-500 transition-colors" />
              <ShoppingBag className="w-6 h-6 text-gray-700 cursor-pointer hover:text-blue-600 transition-colors" /> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 animate-fadeIn">
          {product.breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              <a href="#" className="hover:text-blue-600 transition-colors">
                {item}
              </a>
              {index < product.breadcrumb.length - 1 && <span>/</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4 animate-slideInLeft">
            {/* Main Image */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group">
              <div className="aspect-square relative">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    imageLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                  } group-hover:scale-110`}
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
                  {product.discount}% OFF
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setImageLoaded(false);
                    setSelectedImage(index);
                  }}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    selectedImage === index
                      ? 'ring-4 ring-blue-500 scale-110 shadow-lg'
                      : 'ring-2 ring-gray-200 hover:ring-blue-300'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 animate-slideInRight">
            {/* Brand & Title */}
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {product.brand}
              </h2>
              <p className="text-xl text-gray-600">{product.name}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 bg-green-600 text-white px-3 py-1 rounded-full">
                <span className="font-bold">{product.rating}</span>
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-gray-600">{product.totalRatings} Ratings</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-3 py-4 border-y border-gray-200">
              <span className="text-4xl font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
              <span className="text-2xl text-gray-400 line-through">₹{product.mrp.toLocaleString('en-IN')}</span>
              <span className="text-lg text-green-600 font-semibold">({product.discount}% OFF)</span>
            </div>
            <p className="text-sm text-teal-600 font-medium">inclusive of all taxes</p>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 text-lg">SELECT SIZE</h3>
              <button className="px-6 py-2 border-2 border-pink-500 text-pink-500 rounded-full font-medium hover:bg-pink-50 transition-colors">
                {product.size}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button 
                onClick={() => setShowContactModal(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chat with Seller</span>
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleCallSeller}
                  className="flex items-center justify-center space-x-2 py-3 border-2 border-green-500 text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call</span>
                </button>
                <button
                  onClick={handleEmailSeller}
                  className="flex items-center justify-center space-x-2 py-3 border-2 border-purple-500 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </button>
              </div>

              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-full py-3 rounded-xl border-2 transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isWishlisted
                    ? 'border-red-500 bg-red-50 text-red-500'
                    : 'border-gray-300 hover:border-red-500 hover:bg-red-50 text-gray-700'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                <span>{isWishlisted ? 'Saved' : 'Save this ad'}</span>
              </button>
            </div>

            {/* Seller Info */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {product.seller.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-lg text-gray-900">{product.seller.name}</h3>
                      {product.seller.verified && (
                        <div className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold flex items-center space-x-1">
                          <Shield className="w-3 h-3" />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">{product.seller.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-600">{product.seller.totalSales} sales</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{product.seller.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="w-4 h-4 text-gray-400" />
                  <span>Member since {product.seller.memberSince}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MessageCircle className="w-4 h-4 text-gray-400" />
                  <span>Responds in {product.seller.responseTime}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Package className="w-4 h-4 text-gray-400" />
                  <span>{product.condition}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">Posted {product.postedDate}</p>
              </div>
            </div>

            {/* Delivery Options */}
            <div className="space-y-4 bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 text-lg flex items-center space-x-2">
                <Package className="w-5 h-5 text-blue-600" />
                <span>DELIVERY OPTIONS</span>
              </h3>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
                <button
                  onClick={checkPincode}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Check
                </button>
              </div>
              <p className="text-sm text-gray-600 flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Please enter PIN code to check delivery time & Pay on Delivery Availability</span>
              </p>
              
              {/* Delivery Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-start space-x-3">
                  <Truck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Free Delivery</p>
                    <p className="text-xs text-gray-600">On orders above ₹999</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Package className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Easy Returns</p>
                    <p className="text-xs text-gray-600">7 days return policy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Secure Payment</p>
                    <p className="text-xs text-gray-600">100% secure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16 animate-fadeInUp">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              {['description', 'specifications', 'features'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-semibold capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'border-b-4 border-blue-600 text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none animate-fadeIn">
                <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="font-semibold text-gray-700">{key}:</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'features' && (
              <ul className="space-y-3 animate-fadeIn">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Contact Seller Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-slideInUp">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-2xl font-bold text-gray-900">Contact Seller</h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Seller Info in Modal */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  {product.seller.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-lg text-gray-900">{product.seller.name}</h4>
                    {product.seller.verified && (
                      <Shield className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{product.seller.rating} rating</span>
                    <span>•</span>
                    <span>{product.seller.totalSales} sales</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 border-b border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Regarding:</p>
              <div className="flex items-center space-x-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold text-gray-900">{product.name}</p>
                  <p className="text-lg font-bold text-blue-600">₹{product.price.toLocaleString('en-IN')}</p>
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Send a message
                </label>
                <textarea
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Hi, is this product still available?"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  rows="4"
                />
              </div>

              <button
                onClick={handleSendMessage}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Message</span>
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or contact via</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    handleCallSeller();
                    setShowContactModal(false);
                  }}
                  className="flex items-center justify-center space-x-2 py-3 border-2 border-green-500 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call</span>
                </button>
                <button
                  onClick={() => {
                    handleEmailSeller();
                    setShowContactModal(false);
                  }}
                  className="flex items-center justify-center space-x-2 py-3 border-2 border-purple-500 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </button>
              </div>

              {/* Seller Contact Info */}
              <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-semibold text-gray-900">{product.seller.phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold text-gray-900">{product.seller.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-semibold text-gray-900">{product.seller.location}</span>
                </div>
              </div>

              {/* Safety Tips */}
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Shield className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-yellow-800">
                    <p className="font-semibold mb-1">Safety Tips:</p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Meet in a safe, public place</li>
                      <li>Check the item before you buy</li>
                      <li>Pay only after collecting the item</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ViewDetailPage;