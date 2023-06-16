import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login'

export default function index() {
  return (
    <Routes>
      <Route index element={<Login/>}/>
    </Routes>
  )
}
