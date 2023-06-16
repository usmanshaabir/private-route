import React, { useState } from 'react';

const initState = { email: '', password: '' }

export default function Login() {

  const [state, setState] = useState(initState)

  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefult()
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-5">
          <h1 className='text-center mb-5'>Login Pages</h1>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" name='password' class="form-control" id="exampleInputPassword1" onChange={handleChange} />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
