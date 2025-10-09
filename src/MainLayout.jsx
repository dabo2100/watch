import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}
