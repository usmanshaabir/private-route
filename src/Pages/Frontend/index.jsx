import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/index';
import About from './About/index';
import Contact from './Contact/index';

export default function Index() {
  return (
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
  )
}
