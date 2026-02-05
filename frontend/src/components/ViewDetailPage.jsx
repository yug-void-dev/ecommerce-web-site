import React, { useState } from 'react';
import Header from './Header';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewDetailPage = () => {
  const {id} = useParams()
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedTab, setSelectedTab] = useState('description');
  const [productDetail, setProduct] = useState({});

  const images = [
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&h=800&fit=crop'
  ];

  const thumbnails = [
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1545127398-14699f92334b?w=200&h=200&fit=crop'
  ];

  const conditionDetails = [
    { aspect: 'Overall Condition', rating: 'Excellent', icon: '✓' },
    { aspect: 'Screen Quality', rating: 'Perfect - No Scratches', icon: '✓' },
    { aspect: 'Battery Health', rating: '92% Capacity', icon: '✓' },
    { aspect: 'Physical Condition', rating: 'Minor wear on edges', icon: '⚠️' },
    { aspect: 'Accessories', rating: 'Original box & charger', icon: '✓' }
  ];

  const whyBuyUsed = [
    { title: 'Save 60%', description: 'Compared to new retail price', icon: '💰' },
    { title: 'Verified Quality', description: 'Inspected by our team', icon: '✓' },
    { title: 'Warranty Included', description: '6 months seller warranty', icon: '🛡️' },
    { title: 'Eco-Friendly', description: 'Reduce electronic waste', icon: '🌱' }
  ];

  const specifications = [
    { label: 'Brand', value: 'Apple' },
    { label: 'Model', value: 'iPhone 12' },
    { label: 'Color', value: 'Pacific Blue' },
    { label: 'Storage', value: '128GB' },
    { label: 'Original Purchase', value: 'March 2021' },
    { label: 'IMEI Status', value: 'Clean - Not Blacklisted' },
    { label: 'Network', value: 'Unlocked - All Carriers' },
    { label: 'iOS Version', value: 'Latest (17.2)' }
  ];

  const sellerReviews = [
    { name: 'Sarah M.', rating: 5, comment: 'Great seller! Item exactly as described.', date: '2 days ago' },
    { name: 'John D.', rating: 5, comment: 'Fast shipping and excellent communication.', date: '1 week ago' },
    { name: 'Emily R.', rating: 4, comment: 'Good product, minor delay in shipping.', date: '2 weeks ago' }
  ];

  useEffect(()=>{
    const takeData = async () =>{
    try{
      const productRes = await axios.get(`/api/product/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token-olex")}`,
          },
        })
        console.log(productRes.data.productData[0])
        setProduct(productRes.data.productData[0])
    }
    catch(err){
      console.log(err)
    }
  }
  takeData()
  },[])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-sm p-6 lg:p-8">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 mb-4 bg-gray-50">
              <div className="absolute top-4 left-4 z-10 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                EXCELLENT CONDITION
              </div>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition"
              >
                <svg 
                  className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`}
                  fill={isFavorite ? 'currentColor' : 'none'}
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <img
                src={images[activeImage]}
                alt="Product"
                className="w-full h-full object-contain p-8"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition bg-gray-50 ${
                    activeImage === index
                      ? 'border-blue-500'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-contain p-2"
                  />
                </button>
              ))}
            </div>

            {/* Why Buy Used Section */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {whyBuyUsed.map((item, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {productDetail.title} (Used)
            </h1>

            {/* Seller Info */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                  RJ
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">Rajesh Kumar</h3>
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded">Verified Seller</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-gray-600">4.9 (342 sales)</span>
                  </div>
                </div>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-sm font-medium">
                  View Profile
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Located in Mumbai, Maharashtra</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-gray-900">₹32,999</span>
                  {productDetail.discount!=0 && <span className="text-xl text-gray-400 line-through">₹79,900</span>}
                <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-1 rounded">
                  59% OFF
                </span>
              </div>
              <p className="text-sm text-green-600 font-medium">💰 You save ₹46,901 compared to new!</p>
            </div>

            {/* Condition Details */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-5 mb-4">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified Condition Report
              </h3>
              <div className="space-y-3">
                {conditionDetails.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">{detail.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-semibold text-gray-900">{detail.aspect}</span>
                        <span className="text-sm text-gray-700">{detail.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">📦 What's Included</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">iPhone 12 Device</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Original Box</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Charging Cable</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">20W Adapter</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Warranty Card</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Protective Case</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-4">
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                Buy Now - Get it by Tomorrow
              </button>
              <div className="flex gap-3">
                <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all">
                  Make an Offer
                </button>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-all">
                  Chat with Seller
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl mb-1">🛡️</div>
                <p className="text-xs font-semibold text-gray-900">6 Month Warranty</p>
                <p className="text-xs text-gray-500">Seller guarantee</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">↩️</div>
                <p className="text-xs font-semibold text-gray-900">7-Day Returns</p>
                <p className="text-xs text-gray-500">No questions asked</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">✓</div>
                <p className="text-xs font-semibold text-gray-900">Quality Checked</p>
                <p className="text-xs text-gray-500">Verified by experts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setSelectedTab('description')}
                className={`px-8 py-4 font-semibold transition ${
                  selectedTab === 'description'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setSelectedTab('specifications')}
                className={`px-8 py-4 font-semibold transition ${
                  selectedTab === 'specifications'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setSelectedTab('reviews')}
                className={`px-8 py-4 font-semibold transition ${
                  selectedTab === 'reviews'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Seller Reviews (342)
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Description Tab */}
            {selectedTab === 'description' && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold text-gray-900 mb-4">About This Used iPhone 12</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This gently used iPhone 12 in Pacific Blue is in excellent condition and has been personally used by me for the past 3 years. The phone has always been kept in a protective case and has a screen protector applied since day one.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I'm selling because I've upgraded to the iPhone 15. This phone works perfectly with no issues whatsoever. The battery health is still at 92%, which is excellent for a 3-year-old device. Face ID, cameras, speakers, microphone, charging port - everything works flawlessly.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The phone has some very minor cosmetic wear on the metal edges (barely noticeable), but the screen is in perfect condition with no scratches. All original accessories are included, and I'm also throwing in a premium leather case worth ₹1,499 for free!
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <h4 className="font-bold text-gray-900 mb-2">Reason for Selling</h4>
                  <p className="text-gray-700 text-sm">Upgraded to newer model. This phone has served me well and I want it to find a new owner who will appreciate it.</p>
                </div>
              </div>
            )}

            {/* Specifications Tab */}
            {selectedTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Product Specifications</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-1">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-900 w-48 flex-shrink-0">
                        {spec.label}:
                      </span>
                      <span className="text-gray-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {selectedTab === 'reviews' && (
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-900 mb-2">4.9</div>
                    <div className="text-yellow-400 text-xl mb-1">★★★★★</div>
                    <div className="text-sm text-gray-600">342 Reviews</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center gap-3">
                        <span className="text-sm text-gray-600 w-12">{stars} Star</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-400"
                            style={{ width: stars === 5 ? '85%' : stars === 4 ? '10%' : '5%' }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 w-12 text-right">
                          {stars === 5 ? '291' : stars === 4 ? '34' : '17'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {sellerReviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold flex-shrink-0">
                          {review.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{review.name}</h4>
                            <div className="text-yellow-400 text-sm">
                              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
          {/* Used Item Badge */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Pre-Owned Item - Verified Quality</h3>
              <p className="text-sm text-gray-600">This item has been thoroughly inspected and certified by our quality team. All used items come with a 6-month warranty.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewDetailPage;