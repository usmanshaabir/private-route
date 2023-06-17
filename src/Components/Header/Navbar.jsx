import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from 'Context/AuthContext';

export default function Navbar() {

  const {isAuth, dispatch}= useAuthContext()

  const handleLogout = () => {
    dispatch({ type: "SET_LOGGED_OUT" })
    localStorage.removeItem("user")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          < Link to='/' className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                < Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                < Link to='/About' className="nav-link active">About</Link>
              </li>
              <li className="nav-item">
                < Link to='/Contact' className="nav-link active">Contact</Link>
              </li>

            </ul>
            <div className='d-flex dashbord-button'>
              {
                !isAuth ?
                  <li className="nav-item bg-danger me-3">
                    < Link to='/Auth' className="nav-link active">Login</Link>
                  </li>
                  :
               <>
                  <li className="nav-item bg-success">
                    < Link to='/Dashbord' className="nav-link active">Dashbord</Link>
                  </li>
                    <button className='btn btn-danger ms-2' onClick={handleLogout}>Logout</button>
               </>
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
