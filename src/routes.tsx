import { Suspense } from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import { Locations } from './pages/Locations';

const RoutesComponent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path={ROUTES.LOCATIONS} element={<Locations />} />
      <Route path={ROUTES.HOME} element={<Locations />} />
    </Routes>
  </Suspense>
);

export default RoutesComponent;
