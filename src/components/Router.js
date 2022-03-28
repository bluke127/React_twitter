import Auth from 'routes/Auth';
import Home from 'routes/Home';
import React, { useEffect, useState } from 'react';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
const AppRouter = (isLoggedIn) => {
  useEffect(() => {
    console.log(isLoggedIn);
  });
  return (
    <Router>
      <Routes>
        {isLoggedIn.isLoggedIn ? (
          <>
            <Route exact path="/" element={<Home />}></Route>
          </>
        ) : (
          <Route exact path="/" element={<Auth />}></Route>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
