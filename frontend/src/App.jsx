
import AuthSystem from './components/AuthSystem';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <AuthSystem/>
    </>
  )
}

export default App;
