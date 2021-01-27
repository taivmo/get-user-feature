import React from 'react';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};
