import React, { useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import './App.css';

import ProductDisplay from './ProductDisplay'
import ProductDetails from './ProductDetails'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  spacer: {
    height: 65,
  },
})

const App = () => {

  const classes = useStyles()

  return (
    <>
      <AppBar >
        <Toolbar >
          <h2>Mashjoy Stock Demo</h2>
        </Toolbar>
      </AppBar>
      <div className={classes.spacer}></div>
      <HashRouter>
        <Route path="/" component={ProductDisplay} exact />
        <Route path="/ProductDetails/:code" component={ProductDetails}/>
      </HashRouter>
    </>
  )
}

export default App;