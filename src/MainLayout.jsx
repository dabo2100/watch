import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}
