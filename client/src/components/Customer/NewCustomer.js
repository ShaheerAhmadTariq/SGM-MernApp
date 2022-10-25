import React ,{ useState } from 'react'

function NewCustomer() {
    const [state, setstate] = useState({
        FirstName: '',
        LastName: '',
        Company: '',
        email: '',
        workPhone: '',
        mobilePhone: '',
        bankName: '',
        account: '',
    })
    const submitHandler = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:3001/newCustomer", {
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
        <div className="myContainer">
        <div className="row">
            
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <span><h2 >New Customer  </h2> <i className="fas fa-caret-down"></i></span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="left">
                    <button className="btn btn-primary"> + New </button>
                    
                    <button className="btn btn-primary"><i className="fas fa-caret-down "></i></button>
                    <i className="fas fa-bars marginIcon"></i>
                    <i className="fas fa-cog marginIcon"></i>
                    <span className="blue marginIcon">Page Tips <i className="fas fa-question-circle"></i></span>
                </div>
                
            </div>
        </div>  
        <div className="row formBox">
            <form onSubmit={submitHandler} method="POST">
            <table className="table">
            
                <tbody>
                    <tr>
                        <td>
                            
                        
                                <label className="form-check-label formLabel" for="inlineRadio1"><span className="underline">Customer Type</span></label>
                            
                        </td>
                        <td>
                            <div className=" form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                 id="inlineRadio1" value="option1" />
                                <label className="form-check-label" for="inlineRadio1">Buisness</label>
                            </div>
                            
                            <div className=" form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" for="inlineRadio2">Indiviual</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        
                                <label className="form-check-label formLabel" for="inlineRadio1"><span className="underline">Primary Contact</span></label>
                            
                        </td>
                        <td>
                            <div className=" form-check-inline">
                                <input type="text" id="formControlDefault" name='FirstName' onChange={changeHandler} value={state.FirstName} 
                                 className="form-control" placeholder="First Name"/>
                                
                            </div>
                              
                            <div className=" form-check-inline">
                                <input type="text" id="formControlDefault" name='LastName' onChange={changeHandler} value={state.LastName}
                                 className="form-control" placeholder="Last Name"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        
                                <label className="form-check-label formLabel" for="inlineRadio1"><span>Company Name</span></label>
                            
                        </td>
                        <td>
                            <div className=" form-check-inline">
                                <input type="text" name='Company' onChange={changeHandler} value={state.Company}
                                 id="formControlDefault" className="form-control"/>
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        
                                <label className="form-check-label formLabel" for="inlineRadio1"><span>Customer Email</span></label>
                            
                        </td>
                        <td>
                            <div className=" form-check-inline">
                                <input type="email" id="formControlDefault" name='email' onChange={changeHandler} value={state.email}
                                className="form-control" />
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        
                                <label className="form-check-label formLabel" for="inlineRadio1"><span className="underline">Customer Phone</span></label>
                            
                        </td>
                        <td>
                            <div className=" form-check-inline">
                                <input type="number" name='workPhone' onChange={changeHandler} value={state.workPhone}
                                id="typeNumber"
                                 className="form-control" placeholder="Work Phone"/>
                                
                            </div>
                              
                            <div className=" form-check-inline">
                                <input type="number"name='mobilePhone' onChange={changeHandler} value={state.mobilePhone}
                                 id="typeNumber" className="form-control" placeholder="Mobile"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        
                                <label className="form-check-label formLabel" for="inlineRadio1"><span className="">Bank Name</span></label>
                            
                        </td>
                        <td>
                            <div className=" form-check-inline">
                                <input type="text" name='bankName' onChange={changeHandler} value={state.bankName}
                                 id="typeNumber" className="form-control" placeholder="HBL Limited"/>
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        
                                <label className="form-check-label formLabel" for="inlineRadio1"><span className="">Account Number</span></label>
                            
                        </td>
                        <td>
                            <div className=" form-check-inline">
                                <input type="Number"name='account' onChange={changeHandler} value={state.account}
                                id="typeNumber" className="form-control" placeholder=""/>
                                
                            </div>
                            
                        </td>
                    </tr>
                </tbody>
              </table>
                 
        <div className="fixed-actions">
            <button className="btn btn-primary" type= "submit">Save</button>
            <button className="btn btn-light">Cancel</button>
        </div>
        </form>
    </div>
        
    </div>
    </>
  )
}

export default NewCustomer