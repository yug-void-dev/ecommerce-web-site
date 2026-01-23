
import AuthSystem from './components/AuthSystem';
import { ToastContainer } from 'react-toastify';
import Homepage from './components/HOMEPAGE';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Heading1 } from 'lucide-react';
import AdminDashboard from './components/AdminDashboard';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/auth" element={<AuthSystem/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;
