import * as React from "react";
import './App.css';
import "tailwindcss/tailwind.css";
import {BrowserRouter, Route, Routes, } from "react-router-dom";
import HomePage from "./app/main/HomePage";
import AboutPage from './app/main/AboutPage'
import Resume from './app/main/Resume'
import Contact from './app/main/Contact'
import Portfolio from './app/main/Portfolio'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route 
          path = '/'
          element = {<HomePage/>}
          />
        <Route 
         path = '/About'
         element = {<AboutPage/>}/>
        <Route 
         path = '/Resume'
         element = {<Resume/>}/>
        <Route 
         path = '/portfolio'
         element = {<Portfolio/>}/>
        <Route 
         path = '/Contact'
         element = {<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
