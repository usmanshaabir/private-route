import React from 'react'

export default function Hero() {
  return (
    <div className="container">
    <div className="row">
      <div className="col">
        <h1 className='text-center mt-5'>Welcome to Dashbord</h1>
        <div className='text-center d-grid gap-2 col-6 mx-auto mt-5'>
          <button className="btn btn-primary btn-lg">Logout</button>
        </div>
      </div>
    </div>
  </div>
  )
}
