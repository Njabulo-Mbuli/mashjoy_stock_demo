import React, { useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import './App.css';

import ProductDisplay from './ProductDisplay'

const App = () => {
  return (
    <>
      <AppBar >
        <Toolbar >
          <h2>Mashjoy Demo</h2>
        </Toolbar>
      </AppBar>
      <HashRouter>
        <Route path="/" component={ProductDisplay} exact />
      </HashRouter>
    </>
  )
}

export default App;