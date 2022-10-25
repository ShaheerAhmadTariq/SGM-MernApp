import React, { useState } from 'react'

function SigninDiv() {
  const [state, setstate] = useState({
    email: '',
    password: '',
  })
  const submitHandler = async (e) => {
    e.preventDefault()
    const res = await fetch("http://localhost:3001/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })
    console.log(res.data)
  }
  const changeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value })
  }
  return (
    <>
        <div  class="container-fluid" >
            
            <div class="row parent">
                
                <div class="col-lg-4 col-sm-12 child">
                    <form class="form-container rounded child" action="newDashboard.html" method="POST" 
                    onSubmit={submitHandler}>
                        <h1 id="fontsize">SGM Industries</h1>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label"><span>Email address</span></label>
                          <input type="email" name="email" value={state.email}
                          onChange={changeHandler} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Password</label>
                          <input type="password" name="password" value={state.password}
                          onChange={changeHandler} class="form-control" id="exampleInputPassword1"/>
                        </div>
                        
                        <button type="submit" class="btn btn-success btn-block">Create Account</button>
                      </form>
                    <br/>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default SigninDiv