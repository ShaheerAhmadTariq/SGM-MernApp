import React, { useState } from 'react'

function LoginDiv() {
  const [state, setstate] = useState({
    email: '',
    password: '',
  })
  const submitHandler = async (e) => {
    e.preventDefault()
    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })
const data=await res.json()
if (data?.error) {
  alert("Password is incorrect")
}
  }
  const changeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="container-fluid bg" >

        <div className="row parent">
          <div className="col-lg-4 col-sm-12 child">
            <form onSubmit={submitHandler}
              className="form-container rounded child" action="newDashboard.html" method="POST">
              <h1 id="fontsize">SGM Industries</h1>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label"><span>Email address</span></label>
                <input name="email" onChange={changeHandler}
                  value={state.email}
                  type="email" className="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input name="password" value={state.password} onChange={changeHandler}
                  type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <a className="nav-link inlineNav" href="newDashboard.html">
                <button type="submit" className="btn btn-success">Confirm Password</button>
              </a>

              <br /><br />
              <div id="forgot"><span>Forgot Password?</span></div>
            </form>
            <br />
          </div>
        </div>

      </div>
    </>
  )
}

export default LoginDiv


