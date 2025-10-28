import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'

import './index.css'

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
    </Routes>
  </BrowserRouter>,
)
