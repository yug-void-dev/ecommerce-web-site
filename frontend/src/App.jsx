
import AuthSystem from './components/AuthSystem';
import { ToastContainer } from 'react-toastify';
import Homepage from './components/HOMEPAGE';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail';

import AdminDashboard from './components/AdminDashboard';
import UserDashboad from './components/UserDashboad';
import ViewProductPage from './components/ViewProductPage';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/auth" element={<AuthSystem/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/user/product" element={<ProductDetail/>}/>
          <Route path='/user/dashboard' element={<UserDashboad/>}/>
          <Route path='/user/:id' element={<ViewProductPage/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;
