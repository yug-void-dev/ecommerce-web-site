import React, { useState } from 'react';
import { BarChart3, ShoppingCart, Package, Users, TrendingUp, DollarSign, Search, Bell, Menu, X, Eye, Mail, Phone, MapPin, Calendar, Activity, Heart, CreditCard, Truck, Star } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [userDetailTab, setUserDetailTab] = useState('orders');

  // Sample users data with complete details
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      status: 'Active',
      joinDate: '2023-05-15',
      lastActive: '2 hours ago',
      avatar: 'JD',
      totalOrders: 12,
      totalSpent: 1234.56,
      addresses: [
        {
          id: 1,
          type: 'Home',
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zip: '10001',
          country: 'USA',
          isDefault: true
        },
        {
          id: 2,
          type: 'Office',
          street: '456 Business Ave',
          city: 'New York',
          state: 'NY',
          zip: '10002',
          country: 'USA',
          isDefault: false
        }
      ],
      orders: [
        {
          id: '#ORD-1001',
          date: '2024-01-22',
          status: 'Delivered',
          total: 129.99,
          items: [
            { name: 'Wireless Headphones', qty: 1, price: 129.99, image: '🎧' }
          ]
        },
        {
          id: '#ORD-1015',
          date: '2024-01-18',
          status: 'Delivered',
          total: 89.99,
          items: [
            { name: 'USB-C Cable', qty: 2, price: 19.99, image: '🔌' },
            { name: 'Phone Case', qty: 1, price: 49.99, image: '📱' }
          ]
        },
        {
          id: '#ORD-1028',
          date: '2024-01-10',
          status: 'Delivered',
          total: 199.99,
          items: [
            { name: 'Smart Watch', qty: 1, price: 199.99, image: '⌚' }
          ]
        }
      ],
      cart: [
        { name: 'Laptop Stand', qty: 1, price: 49.99, image: '💻' },
        { name: 'Mechanical Keyboard', qty: 1, price: 159.99, image: '⌨️' }
      ],
      wishlist: [
        { name: 'Gaming Mouse', price: 79.99, image: '🖱️' },
        { name: '4K Monitor', price: 399.99, image: '🖥️' },
        { name: 'Webcam HD', price: 89.99, image: '📹' }
      ],
      paymentMethods: [
        { type: 'Visa', last4: '4242', expiry: '12/25' },
        { type: 'Mastercard', last4: '8888', expiry: '03/26' }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1 (555) 234-5678',
      status: 'Active',
      joinDate: '2023-07-22',
      lastActive: '1 day ago',
      avatar: 'JS',
      totalOrders: 8,
      totalSpent: 892.34,
      addresses: [
        {
          id: 1,
          type: 'Home',
          street: '789 Sunset Blvd',
          city: 'Los Angeles',
          state: 'CA',
          zip: '90001',
          country: 'USA',
          isDefault: true
        }
      ],
      orders: [
        {
          id: '#ORD-2002',
          date: '2024-01-22',
          status: 'Processing',
          total: 299.99,
          items: [
            { name: 'Smart Watch Pro', qty: 1, price: 299.99, image: '⌚' }
          ]
        },
        {
          id: '#ORD-2019',
          date: '2024-01-15',
          status: 'Delivered',
          total: 49.99,
          items: [
            { name: 'Screen Protector', qty: 1, price: 49.99, image: '📱' }
          ]
        }
      ],
      cart: [
        { name: 'Wireless Charger', qty: 2, price: 29.99, image: '🔋' }
      ],
      wishlist: [
        { name: 'Tablet Pro', price: 599.99, image: '📱' },
        { name: 'Stylus Pen', price: 99.99, image: '✏️' }
      ],
      paymentMethods: [
        { type: 'Amex', last4: '1234', expiry: '08/25' }
      ]
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      phone: '+1 (555) 345-6789',
      status: 'Active',
      joinDate: '2023-03-10',
      lastActive: '5 hours ago',
      avatar: 'BJ',
      totalOrders: 15,
      totalSpent: 2456.78,
      addresses: [
        {
          id: 1,
          type: 'Home',
          street: '321 Oak Street',
          city: 'Chicago',
          state: 'IL',
          zip: '60601',
          country: 'USA',
          isDefault: true
        }
      ],
      orders: [
        {
          id: '#ORD-3003',
          date: '2024-01-21',
          status: 'Shipped',
          total: 49.99,
          items: [
            { name: 'HDMI Cable', qty: 1, price: 49.99, image: '🔌' }
          ]
        }
      ],
      cart: [],
      wishlist: [
        { name: 'Bluetooth Speaker', price: 149.99, image: '🔊' }
      ],
      paymentMethods: [
        { type: 'Visa', last4: '5678', expiry: '11/24' }
      ]
    },
    {
      id: 4,
      name: 'Alice Williams',
      email: 'alice.williams@example.com',
      phone: '+1 (555) 456-7890',
      status: 'Inactive',
      joinDate: '2023-11-05',
      lastActive: '30 days ago',
      avatar: 'AW',
      totalOrders: 3,
      totalSpent: 234.56,
      addresses: [
        {
          id: 1,
          type: 'Home',
          street: '654 Maple Ave',
          city: 'Houston',
          state: 'TX',
          zip: '77001',
          country: 'USA',
          isDefault: true
        }
      ],
      orders: [
        {
          id: '#ORD-4004',
          date: '2023-12-15',
          status: 'Delivered',
          total: 79.99,
          items: [
            { name: 'Fitness Tracker', qty: 1, price: 79.99, image: '⌚' }
          ]
        }
      ],
      cart: [
        { name: 'Yoga Mat', qty: 1, price: 39.99, image: '🧘' }
      ],
      wishlist: [],
      paymentMethods: [
        { type: 'Mastercard', last4: '9999', expiry: '06/25' }
      ]
    },
    {
      id: 5,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      phone: '+1 (555) 567-8901',
      status: 'Active',
      joinDate: '2023-01-20',
      lastActive: '10 minutes ago',
      avatar: 'CB',
      totalOrders: 20,
      totalSpent: 3678.90,
      addresses: [
        {
          id: 1,
          type: 'Home',
          street: '987 Pine Road',
          city: 'Phoenix',
          state: 'AZ',
          zip: '85001',
          country: 'USA',
          isDefault: true
        }
      ],
      orders: [
        {
          id: '#ORD-5005',
          date: '2024-01-20',
          status: 'Delivered',
          total: 159.99,
          items: [
            { name: 'Mechanical Keyboard RGB', qty: 1, price: 159.99, image: '⌨️' }
          ]
        }
      ],
      cart: [
        { name: 'Gaming Headset', qty: 1, price: 199.99, image: '🎧' }
      ],
      wishlist: [
        { name: 'Graphics Card', price: 899.99, image: '🎮' }
      ],
      paymentMethods: [
        { type: 'Visa', last4: '3333', expiry: '09/26' }
      ]
    }
  ];

  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+12.5%', icon: DollarSign, color: 'bg-blue-500' },
    { label: 'Total Orders', value: '1,234', change: '+8.2%', icon: ShoppingCart, color: 'bg-green-500' },
    { label: 'Total Products', value: '567', change: '+3.1%', icon: Package, color: 'bg-purple-500' },
    { label: 'Total Users', value: users.length.toString(), change: '+15.3%', icon: Users, color: 'bg-orange-500' },
  ];

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setShowUserModal(true);
    setUserDetailTab('orders');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Shipped': return 'bg-purple-100 text-purple-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'users', label: 'All Users', icon: Users },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'products', label: 'Products', icon: Package },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-gray-900 text-white transition-all duration-300 overflow-hidden`}>
        <div className="p-6">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <p className="text-sm text-gray-400 mt-1">E-commerce Manager</p>
        </div>
        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                  activeTab === item.id ? 'bg-gray-800 border-l-4 border-blue-500' : 'hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600 hover:text-gray-900">
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users, orders..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === 'dashboard' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg shadow p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="flex items-center text-green-600 text-sm font-semibold">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {stat.change}
                        </span>
                      </div>
                      <h3 className="text-gray-600 text-sm font-medium">{stat.label}</h3>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Overview</h2>
                <p className="text-gray-600">Welcome to the admin dashboard. Select "All Users" to view and manage all e-commerce users.</p>
              </div>
            </>
          )}

          {activeTab === 'users' && (
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">All E-commerce Users</h2>
                  <p className="text-sm text-gray-600 mt-1">Manage and view all registered users</p>
                </div>
                <div className="flex gap-3">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Export Users
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Orders</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Spent</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Active</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                              {user.avatar}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{user.phone}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{user.totalOrders}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-semibold">${user.totalSpent.toFixed(2)}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{user.lastActive}</td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleViewUser(user)}
                            className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Orders Management</h2>
              <p className="text-gray-600">View and manage all orders here.</p>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Products Management</h2>
              <p className="text-gray-600">Add, edit, or remove products from inventory.</p>
            </div>
          )}
        </main>
      </div>

      {/* User Detail Modal */}
      {showUserModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="bg-linear-to-r from-blue-600 to-purple-600 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                  {selectedUser.avatar}
                </div>
                <div className="text-white">
                  <h2 className="text-2xl font-bold">{selectedUser.name}</h2>
                  <p className="text-sm opacity-90">{selectedUser.email}</p>
                </div>
              </div>
              <button
                onClick={() => setShowUserModal(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* User Stats */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50 border-b">
              <div className="text-center">
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{selectedUser.totalOrders}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Total Spent</p>
                <p className="text-2xl font-bold text-green-600">${selectedUser.totalSpent.toFixed(2)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Cart Items</p>
                <p className="text-2xl font-bold text-gray-900">{selectedUser.cart.length}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Wishlist</p>
                <p className="text-2xl font-bold text-gray-900">{selectedUser.wishlist.length}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b bg-white px-6">
              {['orders', 'cart', 'wishlist', 'addresses', 'payment'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setUserDetailTab(tab)}
                  className={`px-6 py-3 font-medium capitalize transition-colors ${
                    userDetailTab === tab
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Orders Tab */}
              {userDetailTab === 'orders' && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Order History ({selectedUser.orders.length})</h3>
                  <div className="space-y-4">
                    {selectedUser.orders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <p className="font-semibold text-gray-900">{order.id}</p>
                            <p className="text-sm text-gray-600">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                            <p className="text-lg font-bold text-gray-900 mt-1">${order.total}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gray-50 p-2 rounded">
                              <span className="text-3xl">{item.image}</span>
                              <div className="flex-1">
                                <p className="font-medium text-gray-900">{item.name}</p>
                                <p className="text-sm text-gray-600">Qty: {item.qty} × ${item.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cart Tab */}
              {userDetailTab === 'cart' && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Current Cart ({selectedUser.cart.length} items)</h3>
                  {selectedUser.cart.length > 0 ? (
                    <div className="space-y-3">
                      {selectedUser.cart.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 border border-gray-200 rounded-lg p-4">
                          <span className="text-4xl">{item.image}</span>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-600">Quantity: {item.qty}</p>
                          </div>
                          <p className="text-lg font-bold text-gray-900">${(item.price * item.qty).toFixed(2)}</p>
                        </div>
                      ))}
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-900">Cart Total:</span>
                          <span className="text-xl font-bold text-blue-600">
                            ${selectedUser.cart.reduce((sum, item) => sum + (item.price * item.qty), 0).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 py-8">Cart is empty</p>
                  )}
                </div>
              )}

              {/* Wishlist Tab */}
              {userDetailTab === 'wishlist' && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Wishlist ({selectedUser.wishlist.length} items)</h3>
                  {selectedUser.wishlist.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedUser.wishlist.map((item, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-4">
                            <span className="text-4xl">{item.image}</span>
                            <div className="flex-1">
                              <p className="font-semibold text-gray-900">{item.name}</p>
                              <p className="text-lg font-bold text-blue-600">${item.price}</p>
                            </div>
                            <Heart className="w-6 h-6 text-red-500 fill-current" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 py-8">Wishlist is empty</p>
                  )}
                </div>
              )}

              {/* Addresses Tab */}
              {userDetailTab === 'addresses' && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Saved Addresses ({selectedUser.addresses.length})</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedUser.addresses.map((address) => (
                      <div key={address.id} className={`border-2 rounded-lg p-4 ${address.isDefault ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-gray-600" />
                            <span className="font-semibold text-gray-900">{address.type}</span>
                          </div>
                          {address.isDefault && (
                            <span className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded">Default</span>
                          )}
                        </div>
                        <p className="text-gray-700 mt-2">{address.street}</p>
                        <p className="text-gray-700">{address.city}, {address.state} {address.zip}</p>
                        <p className="text-gray-700">{address.country}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Payment Methods Tab */}
              {userDetailTab === 'payment' && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Methods ({selectedUser.paymentMethods.length})</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedUser.paymentMethods.map((payment, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <CreditCard className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{payment.type}</p>
                            <p className="text-sm text-gray-600">•••• •••• •••• {payment.last4}</p>
                            <p className="text-xs text-gray-500">Expires: {payment.expiry}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t bg-gray-50 px-6 py-4 flex gap-3">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Send Email
              </button>
              <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                Edit User
              </button>
              <button className="px-6 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors">
                {selectedUser.status === 'Active' ? 'Deactivate' : 'Activate'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}