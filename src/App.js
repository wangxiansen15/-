import React from 'react';
import { Globalstyle } from './style';
import Header from './common/header/index';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from "./pages/detail/loadable";
import Home from "./pages/home";
import Login from './pages/loginIn';
import Write from './pages/write';

function App() {
  return (
    <div>
        <Globalstyle/>
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <div>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/detail/:id' exact component={Detail}></Route>
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/write' exact component={Write}></Route>
                </div>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
