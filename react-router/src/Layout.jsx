import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';

export const Layout = () => (
  <div className="w-[70vw] m-auto">
    <Header />
    <Outlet />

    <Footer />
  </div>
);
