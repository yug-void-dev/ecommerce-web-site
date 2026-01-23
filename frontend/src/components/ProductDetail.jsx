import React, { useState } from "react";
import axios from "axios";
const ProductDetail = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discount: "0",
    category: "",
    condition: "",
    brand: "",
    location: "",
  });

  const [images, setImages] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [errors, setErrors] = useState({});

  const categories = [
    { id: "electronics", label: "Electronics", icon: "📱" },
    { id: "fashion", label: "Fashion", icon: "👔" },
    { id: "home", label: "Home & Garden", icon: "🏠" },
    { id: "vehicles", label: "Vehicles", icon: "🚗" },
    { id: "sports", label: "Sports", icon: "⚽" },
    { id: "books", label: "Books", icon: "📚" },
    { id: "toys", label: "Toys & Games", icon: "🎮" },
    { id: "other", label: "Other", icon: "📦" },
  ];

  const conditions = [
    { id: "new", label: "Brand New" },
    { id: "likenew", label: "Like New" },
    { id: "good", label: "Good" },
    { id: "fair", label: "Fair" },
    { id: "poor", label: "For Parts" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleImageUpload = (files) => {
    const fileArray = Array.from(files);
    const maxSize = 5 * 1024 * 1024; // 5MB
    const maxImages = 8;

    const validFiles = fileArray.filter((file) => {
      if (!file.type.startsWith("image/")) {
        alert("Please upload only image files");
        return false;
      }
      if (file.size > maxSize) {
        alert(`${file.name} is too large. Max size is 5MB`);
        return false;
      }
      return true;
    });

    if (images.length + validFiles.length > maxImages) {
      alert(`You can only upload up to ${maxImages} images`);
      return;
    }

    const newImages = validFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9),
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files);
    }
  };

  const removeImage = (id) => {
    setImages((prev) => {
      const updated = prev.filter((img) => img.id !== id);
      // Revoke the object URL to prevent memory leaks
      const removed = prev.find((img) => img.id === id);
      if (removed) {
        URL.revokeObjectURL(removed.preview);
      }
      return updated;
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.price || formData.price <= 0)
      newErrors.price = "Valid price is required";
    if (!formData.category) newErrors.category = "Please select a category";
    if (!formData.condition) newErrors.condition = "Please select a condition";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (images.length === 0) newErrors.images = "Please add at least one image";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const submitData = new FormData();
      Object.keys(formData).forEach((key) => {
        submitData.append(key, formData[key]);
      });

      images.forEach((img, index) => {
        submitData.append("images", img.file);
      });

      try {
        const res = await axios.post("/api/user/product-data", submitData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(res.data);

        setFormData({
          title: "",
          description: "",
          price: "",
          discount: "0",
          category: "",
          condition: "",
          brand: "",
          location: "",
        });
        setImages([]);

      } catch (err) {
        console.log(`Error is submitting product Data ${err.message}`);
      }
    }
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

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-down {
          animation: slideDown 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type="number"] {
          -moz-appearance: textfield;
        }

        .gradient-border {
          position: relative;
          background: white;
          border-radius: 0.375rem;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.375rem;
          padding: 2px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .gradient-border:focus-within::before {
          opacity: 1;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-down">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-3 tracking-tight">
            List Your Product
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Share what you're selling with thousands of buyers
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-2xl shadow-orange-100 overflow-hidden"
        >
          {/* Decorative top border */}
          <div className="h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>

          <div className="p-6 sm:p-10 lg:p-12">
            {/* Section 1: Basic Information */}
            <div className="mb-12 animate-fade-in-up delay-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-orange-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  1
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
                  Basic Information
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Product Title <span className="text-red-500">*</span>
                  </label>
                  <div className="gradient-border">
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      maxLength={100}
                      placeholder="e.g., iPhone 14 Pro Max 256GB Space Black"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:outline-none focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  {errors.title && (
                    <p className="mt-1 text-sm text-red-500">{errors.title}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500 text-right">
                    {formData.title.length}/100
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Description <span className="text-red-500">*</span>
                  </label>
                  <div className="gradient-border">
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      maxLength={1000}
                      rows={5}
                      placeholder="Describe your product in detail. Include key features, condition, reason for selling, etc."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:outline-none focus:border-transparent resize-none transition-all duration-300"
                      required
                    />
                  </div>
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.description}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-gray-500 text-right">
                    {formData.description.length}/1000
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Category */}
            <div className="mb-12 animate-fade-in-up delay-200">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-orange-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  2
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
                  Category
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {categories.map((category) => (
                  <label
                    key={category.id}
                    className="relative cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={category.label}
                      checked={formData.category === category.label}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div
                      className={`
                      p-4 border-2 rounded-lg text-center transition-all duration-300 transform
                      ${
                        formData.category === category.label
                          ? "border-orange-500 bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg scale-105"
                          : "border-gray-200 bg-white hover:border-orange-300 hover:shadow-md"
                      }
                    `}
                    >
                      <div className="text-2xl mb-1">{category.icon}</div>
                      <div className="text-sm font-semibold">
                        {category.label}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              {errors.category && (
                <p className="mt-2 text-sm text-red-500">{errors.category}</p>
              )}
            </div>

            {/* Section 3: Pricing & Condition */}
            <div className="mb-12 animate-fade-in-up delay-300">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-orange-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  3
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
                  Pricing & Condition
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Price <span className="text-red-500">*</span>
                  </label>
                  <div className="gradient-border">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                        $
                      </span>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        min="0"
                        step="0.01"
                        placeholder="0.00"
                        className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-md focus:outline-none focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  {errors.price && (
                    <p className="mt-1 text-sm text-red-500">{errors.price}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500 italic">
                    Enter amount in your local currency
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="discount"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Discount (%)
                  </label>
                  <div className="gradient-border">
                    <div className="relative">
                      <input
                        type="number"
                        id="discount"
                        name="discount"
                        value={formData.discount}
                        onChange={handleInputChange}
                        min="0"
                        max="100"
                        placeholder="0"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:outline-none focus:border-transparent transition-all duration-300"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                        %
                      </span>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 italic">
                    Optional: Offer a discount
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Condition <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {conditions.map((condition) => (
                    <label
                      key={condition.id}
                      className="relative cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="condition"
                        value={condition.label}
                        checked={formData.condition === condition.label}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`
                        px-4 py-3 border-2 rounded-lg text-center transition-all duration-300 transform
                        ${
                          formData.condition === condition.label
                            ? "border-orange-500 bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg scale-105"
                            : "border-gray-200 bg-white hover:border-orange-300 hover:shadow-md"
                        }
                      `}
                      >
                        <div className="text-sm font-semibold">
                          {condition.label}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.condition && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.condition}
                  </p>
                )}
              </div>
            </div>

            {/* Section 4: Additional Details */}
            <div className="mb-12 animate-fade-in-up delay-400">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-orange-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  4
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
                  Additional Details
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="brand"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Brand
                  </label>
                  <div className="gradient-border">
                    <input
                      type="text"
                      id="brand"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      placeholder="e.g., Apple, Samsung, Nike"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:outline-none focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Location <span className="text-red-500">*</span>
                  </label>
                  <div className="gradient-border">
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, State"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:outline-none focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.location}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Section 5: Product Images */}
            <div className="mb-12 animate-fade-in-up delay-500">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-orange-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  5
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
                  Product Images
                </h2>
              </div>

              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => document.getElementById("imageInput").click()}
                className={`
                  border-3 border-dashed rounded-lg p-12 text-center cursor-pointer
                  transition-all duration-300 transform hover:scale-[1.02]
                  ${
                    dragActive
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-300 bg-amber-50 hover:border-orange-400 hover:bg-orange-50"
                  }
                `}
              >
                <div className="text-6xl mb-4">📸</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  Click to upload or drag and drop
                </div>
                <div className="text-sm text-gray-500">
                  Add up to 8 photos (JPG, PNG, WebP - Max 5MB each)
                </div>
                <input
                  type="file"
                  id="imageInput"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e.target.files)}
                  className="hidden"
                />
              </div>
              {errors.images && (
                <p className="mt-2 text-sm text-red-500">{errors.images}</p>
              )}

              {/* Image Preview Grid */}
              {images.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                  {images.map((image) => (
                    <div
                      key={image.id}
                      className="relative aspect-square rounded-lg overflow-hidden border-2 border-gray-200 group animate-scale-in"
                    >
                      <img
                        src={image.preview}
                        alt="Product preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage(image.id);
                        }}
                        className="absolute top-2 right-2 w-8 h-8 bg-black/70 hover:bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-8 border-t-2 border-orange-100">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-4 px-8 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                List Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
