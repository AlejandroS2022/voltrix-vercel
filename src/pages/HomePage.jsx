import SidenavBar from "../components/layouts/SidenavBar";
import Header from "../components/layouts/Header";
import { Outlet } from "react-router-dom";


function HomePage() {
  return (
    <>        
        <div className='home-page'>
            <SidenavBar></SidenavBar>
            <Header></Header>

            <div className="home-page__main-content">
              <Outlet />
            </div>
        </div>
    </>
  )
}

export default HomePage
