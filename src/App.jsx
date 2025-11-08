import { Routes, Route } from 'react-router-dom';
import TradingLogin from './pages/TradingLogin';
import CreateAccountPage from './pages/CreateAccountPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import CodeVerify from './pages/CodeVerify';
import NewPasswordPage from './pages/NewPasswordPage';
import HomePage from './pages/HomePage';
import HomeContent from './components/modules/HomeContent';
import TransactionsHistory from './pages/TransactionsHistory';
import DepositPage from './pages/DepositPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactUs from './pages/ContactUs';




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

          <Route path="/" element={<HomePage />} >
            <Route path="Home" element={<HomeContent />} />
            <Route path="Transactions-history" element={<TransactionsHistory />} />
            <Route path="Deposit" element={<DepositPage />} />
            <Route path="Contact-us" element={<ContactUs />} />
            <Route index element={<HomeContent />} /> 
          </Route>              
        </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
    </>
  )
}

export default App
