import React from 'react';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './layouts/Navbar';
import Sidebar from './layouts/Sidebar';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="container-scroller">
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );

}

export default App;
