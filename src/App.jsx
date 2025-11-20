import { Routes, Route } from 'react-router-dom';
import TradingLogin from './pages/TradingLogin';
import CreateAccountPage from './pages/CreateAccountPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import CodeVerify from './pages/CodeVerify';
import NewPasswordPage from './pages/NewPasswordPage';
import HomeContent from './components/modules/HomeContent';
import TransactionsHistory from './pages/TransactionsHistory';
import DepositPage from './pages/DepositPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactUs from './pages/ContactUs';
import WithdrawPage from './pages/WithdrawPage';
import ResponsiveLayout from './components/layouts/ResponsiveLayout';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';

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

          <Route element={<ResponsiveLayout />} > 
           <Route path="Home" element={<HomeContent />} />
           <Route path="Dashboard" element={<DashboardPage />} />
           <Route path="Transactions-history" element={<TransactionsHistory />} />
           <Route path="Deposit" element={<DepositPage />} />
           <Route path="Contact-us" element={<ContactUs />} />
           <Route path="Withdraw" element={<WithdrawPage />} />
           <Route path="Profile-settings" element={<ProfilePage />} />
            <Route index element={<HomeContent />} />
          </Route>            
        </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
    </>
  )
}

export default App
