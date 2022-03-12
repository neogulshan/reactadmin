import React, { Component, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Spinner from './layouts/Spinner';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Error404 = lazy(() => import('./pages/Error404'));

const AllUser = lazy(() => import('./pages/users/All'));
const SingleUser = lazy(() => import('./pages/users/Single'))

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />

          <Route path="/users" element={<AllUser />} />
          <Route path="/user/:userId" element={<SingleUser />} />

        </Routes>
      </Suspense>
    );
  }
}

export default AppRoutes;