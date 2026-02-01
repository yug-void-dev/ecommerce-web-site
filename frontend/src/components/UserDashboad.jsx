import React, { useState } from 'react';

const EnhancedUserProfile = () => {
  const [activeTab, setActiveTab] = useState('listings');
  const [isFollowing, setIsFollowing] = useState(false);
  const [filterCondition, setFilterCondition] = useState('all');

  const userStats = [
    { 
      label: 'Items Sold', 
      value: '342', 
      subtext: '+12 this month',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-600'
    },
    { 
      label: 'Average Rating', 
      value: '4.9', 
      subtext: 'Out of 5.0',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      label: 'Response Time', 
      value: '< 1hr', 
      subtext: 'Average reply',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      label: 'Happy Buyers', 
      value: '98%', 
      subtext: 'Positive feedback',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const listings = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop',
      title: 'Apple iPhone 12 Pro - 128GB Pacific Blue',
      price: '₹42,999',
      originalPrice: '₹1,19,900',
      condition: 'Excellent',
      sold: false,
      views: 342,
      likes: 28,
      postedDate: '2 days ago',
      badge: 'Fast Seller',
      discount: 64
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      title: 'Sony WH-1000XM4 Wireless Headphones',
      price: '₹18,999',
      originalPrice: '₹29,990',
      condition: 'Like New',
      sold: false,
      views: 189,
      likes: 15,
      postedDate: '1 week ago',
      badge: 'Hot Deal',
      discount: 37
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      title: 'Apple Watch Series 7 - 45mm GPS',
      price: '₹24,999',
      originalPrice: '₹41,900',
      condition: 'Like New',
      sold: true,
      views: 521,
      likes: 42,
      postedDate: '2 weeks ago',
      badge: null,
      discount: 40
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop',
      title: 'iPad Air 4th Gen - 64GB Space Gray',
      price: '₹36,999',
      originalPrice: '₹54,900',
      condition: 'Good',
      sold: false,
      views: 276,
      likes: 19,
      postedDate: '3 days ago',
      badge: null,
      discount: 33
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
      title: 'Premium Leather Laptop Backpack',
      price: '₹2,499',
      originalPrice: '₹4,999',
      condition: 'Excellent',
      sold: false,
      views: 145,
      likes: 12,
      postedDate: '5 days ago',
      badge: null,
      discount: 50
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop',
      title: 'Samsung Galaxy Watch 4 - 44mm',
      price: '₹8,999',
      originalPrice: '₹23,999',
      condition: 'Good',
      sold: true,
      views: 412,
      likes: 34,
      postedDate: '3 weeks ago',
      badge: null,
      discount: 62
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      avatar: 'PS',
      rating: 5,
      date: '2 days ago',
      product: 'iPhone 12 Pro',
      comment: 'Absolutely amazing experience! The phone was in even better condition than described. Battery health at 94% which is fantastic. Seller was very responsive and shipped the same day. Packaging was excellent with bubble wrap and original box. Would definitely buy from this seller again! Highly recommend! 👍',
      helpful: 24,
      verified: true,
      images: ['https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=100&h=100&fit=crop']
    },
    {
      id: 2,
      name: 'Amit Patel',
      avatar: 'AP',
      rating: 5,
      date: '1 week ago',
      product: 'Sony WH-1000XM4',
      comment: 'Great seller! Product exactly as described. The headphones work perfectly and sound quality is amazing. All original accessories included. Fast shipping and well packaged. Very honest seller.',
      helpful: 18,
      verified: true,
      images: []
    },
    {
      id: 3,
      name: 'Sarah Mitchell',
      avatar: 'SM',
      rating: 5,
      date: '2 weeks ago',
      product: 'Apple Watch Series 6',
      comment: 'Excellent condition! The watch looks almost brand new. Minor wear on the strap but everything else is perfect. Seller was very communicative and answered all my questions promptly. Great price too!',
      helpful: 15,
      verified: true,
      images: []
    },
    {
      id: 4,
      name: 'Rahul Verma',
      avatar: 'RV',
      rating: 4,
      date: '3 weeks ago',
      product: 'AirPods Pro',
      comment: 'Good product overall. Slight delay in shipping but seller kept me informed. Product condition was as described. Battery life is decent. Fair pricing.',
      helpful: 9,
      verified: true,
      images: []
    }
  ];

  const achievements = [
    { title: 'Top Rated Seller', icon: '🏆', description: 'Consistently high ratings' },
    { title: 'Fast Shipper', icon: '⚡', description: 'Ships within 24 hours' },
    { title: 'Trusted Member', icon: '✓', description: 'Verified identity' },
    { title: 'Expert Seller', icon: '⭐', description: '300+ successful sales' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Cover Image with Gradient */}
          <div className="h-48 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 relative">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
          </div>

          {/* Profile Info */}
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row gap-6 -mt-20 relative">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-2xl bg-white p-2 shadow-2xl">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-5xl font-bold text-white">
                    RK
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="flex-1 bg-green-100 text-green-700 text-xs font-bold px-3 py-2 rounded-lg text-center">
                    ✓ Verified
                  </div>
                  <div className="flex-1 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-2 rounded-lg text-center">
                    🏆 Pro
                  </div>
                </div>
              </div>

              {/* Info and Actions */}
              <div className="flex-1 md:mt-24">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold text-gray-900">Rajesh Kumar</h1>
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        ⭐ TOP SELLER
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        Mumbai, Maharashtra
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Joined Jan 2022
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="font-semibold text-gray-900">4.9</span>
                        <span>(342 reviews)</span>
                      </span>
                    </div>
                    <p className="text-gray-700 max-w-2xl text-sm leading-relaxed">
                      💻 Tech enthusiast selling pre-loved gadgets. All items personally tested & verified. 
                      Fast shipping 📦 • Original accessories ✓ • 6-month warranty 🛡️
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsFollowing(!isFollowing)}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all shadow-md ${
                        isFollowing
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600'
                      }`}
                    >
                      {isFollowing ? (
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Following
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                          </svg>
                          Follow
                        </span>
                      )}
                    </button>
                    <button className="px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-md">
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Message
                      </span>
                    </button>
                  </div>
                </div>

                {/* Achievements */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-3 border border-blue-100">
                      <div className="text-2xl mb-1">{achievement.icon}</div>
                      <div className="text-xs font-bold text-gray-900">{achievement.title}</div>
                      <div className="text-xs text-gray-600">{achievement.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-2 bg-gradient-to-r ${stat.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.subtext}</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex overflow-x-auto">
              <button
                onClick={() => setActiveTab('listings')}
                className={`flex-1 min-w-[150px] px-6 py-4 font-semibold transition relative ${
                  activeTab === 'listings'
                    ? 'text-blue-600 bg-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Active Listings
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full">28</span>
                </span>
                {activeTab === 'listings' && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`flex-1 min-w-[150px] px-6 py-4 font-semibold transition relative ${
                  activeTab === 'reviews'
                    ? 'text-blue-600 bg-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Reviews
                  <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded-full">342</span>
                </span>
                {activeTab === 'reviews' && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`flex-1 min-w-[150px] px-6 py-4 font-semibold transition relative ${
                  activeTab === 'about'
                    ? 'text-blue-600 bg-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About
                </span>
                {activeTab === 'about' && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                )}
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {/* Listings Tab */}
            {activeTab === 'listings' && (
              <div>
                {/* Filter Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setFilterCondition('all')}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        filterCondition === 'all'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      All Items
                    </button>
                    <button
                      onClick={() => setFilterCondition('excellent')}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        filterCondition === 'excellent'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Excellent
                    </button>
                    <button
                      onClick={() => setFilterCondition('like-new')}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        filterCondition === 'like-new'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Like New
                    </button>
                    <button
                      onClick={() => setFilterCondition('good')}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        filterCondition === 'good'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Good
                    </button>
                  </div>
                  <div className="text-sm text-gray-600">
                    Showing <span className="font-semibold text-gray-900">28</span> active listings
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {listings.map((item) => (
                    <div key={item.id} className="group bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer">
                      <div className="relative aspect-square overflow-hidden bg-gray-50">
                        {item.sold && (
                          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20">
                            <div className="text-center">
                              <div className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold text-xl mb-2 shadow-xl">
                                SOLD OUT
                              </div>
                              <p className="text-white text-sm">This item has been sold</p>
                            </div>
                          </div>
                        )}
                        {item.badge && !item.sold && (
                          <div className="absolute top-3 left-3 z-10">
                            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                              🔥 {item.badge}
                            </span>
                          </div>
                        )}
                        <div className="absolute top-3 right-3 z-10">
                          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            {item.condition}
                          </span>
                        </div>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute bottom-3 right-3 flex gap-2">
                          <div className="bg-white bg-opacity-95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-lg flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            {item.views}
                          </div>
                          <div className="bg-white bg-opacity-95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-red-600 shadow-lg flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            {item.likes}
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition text-sm">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl font-bold text-gray-900">{item.price}</span>
                          <div className="flex flex-col">
                            <span className="text-xs text-gray-400 line-through">{item.originalPrice}</span>
                            <span className="text-xs font-bold text-green-600">{item.discount}% OFF</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {item.postedDate}
                          </span>
                        </div>
                        <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:from-blue-700 hover:to-cyan-600 transition font-semibold text-sm shadow-md hover:shadow-lg">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div>
                {/* Rating Summary */}
                <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 rounded-2xl p-8 mb-8 border border-blue-100">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center md:border-r border-blue-200">
                      <div className="text-7xl font-bold text-gray-900 mb-2">4.9</div>
                      <div className="text-yellow-400 text-3xl mb-3">★★★★★</div>
                      <div className="text-sm text-gray-600 font-medium">Based on 342 reviews</div>
                      <div className="mt-4">
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-4 py-2 rounded-full">
                          ✓ Highly Recommended
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-4">
                          <span className="text-sm font-semibold text-gray-700 w-20 flex items-center gap-2">
                            <span>{stars}</span>
                            <span className="text-yellow-400 text-lg">★</span>
                          </span>
                          <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500"
                              style={{ 
                                width: stars === 5 ? '88%' : stars === 4 ? '8%' : stars === 3 ? '3%' : '1%' 
                              }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-gray-700 w-20 text-right">
                            {stars === 5 ? '301' : stars === 4 ? '27' : stars === 3 ? '10' : '4'} reviews
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {review.avatar}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-bold text-gray-900">{review.name}</h4>
                                {review.verified && (
                                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Verified Purchase
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-600 mb-2">Purchased: <span className="font-semibold">{review.product}</span></p>
                            </div>
                            <span className="text-xs text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center gap-1 mb-3">
                            <div className="text-yellow-400 text-lg">
                              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed mb-4">{review.comment}</p>
                          
                          {review.images.length > 0 && (
                            <div className="flex gap-2 mb-4">
                              {review.images.map((img, idx) => (
                                <img key={idx} src={img} alt="Review" className="w-20 h-20 object-cover rounded-lg border border-gray-200" />
                              ))}
                            </div>
                          )}

                          <div className="flex items-center gap-4">
                            <button className="text-sm text-gray-600 hover:text-blue-600 font-medium flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                              </svg>
                              Helpful ({review.helpful})
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition font-semibold shadow-md hover:shadow-lg">
                    Load More Reviews
                  </button>
                </div>
              </div>
            )}

            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-3xl">👋</span>
                    About Me
                  </h3>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Hello! I'm Rajesh, a passionate tech enthusiast based in Mumbai. I've been collecting and using gadgets for over a decade, and I love staying updated with the latest technology trends. My philosophy is simple: why let perfectly good electronics gather dust when someone else could enjoy them?
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      I've been an active seller on ShopZone for over 2 years now, and I take immense pride in the quality of my listings. Every item I sell has been personally used and carefully maintained. I believe in complete transparency - what you see in the photos is exactly what you'll receive, often in even better condition!
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      By day, I work as a software engineer, and in my free time, I enjoy photography, traveling, and of course, exploring new gadgets. I'm committed to sustainable consumption and believe in giving technology a second life. Feel free to message me with any questions - I'm always happy to help! 😊
                    </p>
                  </div>
                </div>

                {/* Seller Guarantees */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-3xl">🛡️</span>
                    My Seller Guarantees
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 transition-all shadow-sm hover:shadow-md">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Accurate Descriptions</h4>
                      <p className="text-sm text-gray-600">Every item is described honestly with all flaws mentioned. High-quality photos from multiple angles. What you see is what you get!</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-md">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Fast Shipping</h4>
                      <p className="text-sm text-gray-600">Items ship within 24 hours of payment. Secure packaging with bubble wrap. Free shipping on orders above ₹5,000!</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all shadow-sm hover:shadow-md">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">6-Month Warranty</h4>
                      <p className="text-sm text-gray-600">All electronics come with a 6-month seller warranty. If anything stops working, I'll make it right. Your satisfaction is guaranteed!</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-all shadow-sm hover:shadow-md">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4 shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Easy Returns</h4>
                      <p className="text-sm text-gray-600">7-day hassle-free returns. If the item isn't as described, I'll accept a full return with no questions asked. Your trust matters most!</p>
                    </div>
                  </div>
                </div>

                {/* Why Buy From Me */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">💎 Why Buy From Me?</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-4xl font-bold mb-2">342+</div>
                      <p className="text-blue-100">Successful sales with 98% positive feedback</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">&lt; 1hr</div>
                      <p className="text-blue-100">Average response time to messages</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">100%</div>
                      <p className="text-blue-100">Transparent and honest descriptions</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default EnhancedUserProfile;