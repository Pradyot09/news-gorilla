import './App.css';

import React, { Component } from 'react'
import NavBar from './componenets/NavBar';
import News from './componenets/News';
import { Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
       <NavBar></NavBar>
       {/* <News country="us" category="general"></News> */}
       <Routes>
        <Route exact path='/' element={<News key="general" country="us" category="general"/>}></Route>
        <Route exact path='/general' element={<News key="general" country="us" category="general"/>}></Route>
        <Route exact path='/business' element={<News key="business" country="us" category="business"/>}></Route>
        <Route exact path='/entertainment' element={<News key="entertainment" country="us" category="entertainment"/>}></Route>
        <Route exact path='/health' element={<News key="health" country="us" category="health"/>}></Route>
        <Route exact path='/science' element={<News key="science" country="us" category="science"/>}></Route>
        <Route exact path='/sports' element={<News key="sports" country="us" category="sports"/>}></Route>
        <Route exact path='/technology' element={<News key="technology" country="us" category="technology"/>}></Route>
       </Routes>
      </div>
    )
  }
}