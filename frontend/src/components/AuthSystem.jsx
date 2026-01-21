import { useState } from "react";
import { User, Mail, Lock, Shield } from "lucide-react";
import axios from "axios";

export default function AuthSystem() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState("user"); // 'user' or 'admin'
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userType === "admin") {
      console.log("Admin Login:", {
        email: formData.email,
        password: formData.password,
      });
      alert(`Admin login attempted with: ${formData.email}`);
    } else if (isSignUp) {
      const userObj = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      };
      try {
        const res = await axios("/api/auth/signup", userObj);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      const userSiginData = {
        email: formData.email,
        password: formData.password,
      };

      try {
        const res = await axios.post("api/auth/signin", userSiginData);
        console.log(res);
      } catch (err) {
        console.log(`Error Occured in sending data to server ${err.message}`);
      }
    }

    setFormData({ fullName: "", email: "", password: "" });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchUserType = (type) => {
    setUserType(type);
    setFormData({ fullName: "", email: "", password: "" });
    if (type === "admin") {
      setIsSignUp(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* User Type Toggle */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => switchUserType("user")}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
              userType === "user"
                ? "bg-indigo-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            <User className="inline-block w-5 h-5 mr-2" />
            User
          </button>
          <button
            onClick={() => switchUserType("admin")}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
              userType === "admin"
                ? "bg-purple-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Shield className="inline-block w-5 h-5 mr-2" />
            Admin
          </button>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-500 hover:shadow-3xl">
          <div className="text-center mb-8">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300 ${
                userType === "admin" ? "bg-purple-100" : "bg-indigo-100"
              }`}
            >
              {userType === "admin" ? (
                <Shield
                  className={`w-8 h-8 text-purple-600 transition-transform duration-300 ${userType === "admin" ? "animate-pulse" : ""}`}
                />
              ) : (
                <User className="w-8 h-8 text-indigo-600" />
              )}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {userType === "admin"
                ? "Admin Login"
                : isSignUp
                  ? "Create Account"
                  : "Welcome Back"}
            </h2>
            <p className="text-gray-500">
              {userType === "admin"
                ? "Access admin dashboard"
                : isSignUp
                  ? "Sign up to get started"
                  : "Sign in to continue"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name - Only for User Sign Up */}
            {userType === "user" && isSignUp && (
              <div className="transform transition-all duration-300 animate-fadeIn">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="transform transition-all duration-300">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="transform transition-all duration-300">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                userType === "admin"
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {userType === "admin"
                ? "Login as Admin"
                : isSignUp
                  ? "Sign Up"
                  : "Sign In"}
            </button>
          </form>

          {/* Toggle Sign In/Sign Up - Only for Users */}
          {userType === "user" && (
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <button
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setFormData({ fullName: "", email: "", password: "" });
                  }}
                  className="ml-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-200"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
