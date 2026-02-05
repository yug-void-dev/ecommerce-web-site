import {useState} from 'react'
import {
  ShoppingCart,
  User,
  Menu,
  X,
  Search,
  Heart,
} from "lucide-react";
import { useNavigate,Link } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [wishlist] = useState([]);
    const [cart] = useState([]);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

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

    const handleLogout = () => {
        localStorage.removeItem("token-olex");
        navigate("/auth");
    };

    const handleProfile = () => {
        navigate("/user/dashboard");
    };

  return (
  <>
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
              <Link to='/'><h1 className="text-2xl font-bold text-blue-600">ShopZone</h1></Link>
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
              <div className="relative">
                <button 
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <User className="w-6 h-6" />
                </button>
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                    <button
                      onClick={handleProfile}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
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
                          onClick={() => setMenuOpen(false)}
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
  </>
  )
}

export default Header