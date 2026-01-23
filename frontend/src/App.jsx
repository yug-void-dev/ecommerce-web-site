
import AuthSystem from './components/AuthSystem';
import { ToastContainer } from 'react-toastify';
import Homepage from './components/HOMEPAGE';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail';

function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/auth" element={<AuthSystem/>}/>
        </Routes>
      </BrowserRouter> */}
      <ProductDetail/>
      
    </>
  )
}

export default App;
