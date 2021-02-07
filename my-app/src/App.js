import React, {Suspense} from 'react';
import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom';
import logo from './logo.svg';
import { Header } from './components/header/header.js'; 
import { Menu } from './components/menu/menu.js'; 
import { Banner } from './components/banner/banner.js'; 
import { Footer } from './components/footer/footer.js'; 
import './App.css';

import { Homepage } from './pages/trangchu/trangchu.js'
import { Gioithieu } from './pages/gioithieu/gioithieu.js'
import { Lienhe } from './pages/lienhe/lienhe.js'

function App() {
  return (
    <div className="App"> 
      <Suspense fallback={<div>Loading..........</div>}> 
        <BrowserRouter>
          <Header /> 
          <Menu />
          <Banner />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/gioithieu" component={Gioithieu} />
            <Route path="/lienhe" component={Lienhe} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>    
    </div>
  );
}

export default App;
