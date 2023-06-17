import { useAuthContext } from 'Context/AuthContext';
import React, { useState } from 'react';

const initState = { email: '', password: '' }

export default function Login() {

  const { dispatch } = useAuthContext()

  const [state, setState] = useState(initState)

  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let { email, password } = state

    const user = { email, password };

    setTimeout(() => {
      dispatch({ type: 'SET_LOGGED_IN', payload: { user } })
      localStorage.setItem("user", JSON.stringify(user))
    }, 2000)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-5">
          <h1 className='text-center mb-5'>Login Pages</h1>
          <form >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" name='password' className="form-control" id="exampleInputPassword1" onChange={handleChange} />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
