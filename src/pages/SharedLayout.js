import { Outlet, NavLink } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Dolar from '../components/Dolar';

const Home = () => {
  return (
    <>
      <div id="wrapper">

        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">

          <div id="content">

            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              
              <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
                
              </button>


              <ul className="navbar-nav ml-auto">
                <Dolar />
              </ul>

            </nav>

            <div className="container-fluid">
              <div className="container body-content">
                <Outlet />
                <hr />
              </div>
            </div>
          </div>

          <Footer />

        </div>
      </div>



      {/* <StyledNavbar /> */}
      {/* <Outlet /> */}
    </>
  );
};
export default Home;
