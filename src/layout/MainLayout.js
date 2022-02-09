import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '.';

const MainLayout = () => {
  return (<>
    <Header />
    <Outlet />
    <Footer />
  </>);
};

export default MainLayout;
