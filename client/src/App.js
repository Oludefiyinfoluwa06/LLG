import React from 'react';
import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';

// components import
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>

    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
