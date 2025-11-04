import { Routes, Route } from 'react-router-dom';

import TradingLogin from './pages/TradingLogin';
import CreateAccountPage from './pages/CreateAccountPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import CodeVerify from './pages/CodeVerify';
import NewPasswordPage from './pages/NewPasswordPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>        
      <div className='App'>
          <Routes>    
            <Route path="/*" element={<TradingLogin />} />  
            <Route path="/Create-account" element={<CreateAccountPage />} />  
            <Route path="/Forgot-password" element={<ForgotPasswordPage />} />  
            <Route path="/Verify-code" element={<CodeVerify />} />  
            <Route path="/New-password" element={<NewPasswordPage />} />  
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
    </>
  )
}

export default App
