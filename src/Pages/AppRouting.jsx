import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Frontend from './Frontend';
import Dashbord from './Dashbord';
import Auth from './Auth';
import Header from 'Components/Header';
import Footer from 'Components/Footer';


export default function AppRouting() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/*' element={<Frontend />} />
          <Route path='/Dashbord/*' element={<Dashbord />} />
          <Route path='/Auth/*' element={<Auth />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
