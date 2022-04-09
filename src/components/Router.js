import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Navigation from './Navigation';
import React, { useEffect, useState } from 'react';

import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Profile from 'routes/Profile';
const AppRouter = (isLoggedIn) => {
  useEffect(() => {
    console.log(isLoggedIn);
  });
  return (
    <Router>
      {isLoggedIn}
      <Routes>
        {isLoggedIn.isLoggedIn ? (
          <>
            <Route exact path="/" element={<Home />}></Route>

            <Route exact path="/profile" element={<Profile />}></Route>
          </>
        ) : (
          <>
            <Route exact path="/" element={<Auth />}></Route>
            <Navigate from="*" to="/" />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
