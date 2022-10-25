import React ,{useState} from 'react'
import "../../resources/css/invoice.css"
import "../../resources/css/newCustomer.css"

function NewInvoice() {
    const [state, setstate] = useState({
        customer: '',
        invoice: '',
        invoiceDate: '',
        invoiceDueDate: '',
        subject: '',
        item: '',
        quantity: '',
        rate: '',
        discount: '',
        amount: ''

    })
    const submitHandler = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:3001/newInvoice", {
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
        <div className="myContainer myClass">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <span><h2>New Invoice  </h2> <i className="fas fa-caret-down"></i></span>
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
            <table className="table table-responsive-xs table-responsive-sm">
                <tbody>
                    <tr className="bg-light">
                        <td>
                            
                                
                                <label className="form-check-label formLabel" for="inlineRadio1"><span className="">Customer</span></label>
                            
                        </td>
                        <td>
                            <div className="dropdown form-check-inline">
                                <input type="text" id="formControlDefault" className="form-control" placeholder="Select Customer"
                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                               
        
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                  <a className="dropdown-item" href="#">Shaheer Ahmad</a>
                                  <a className="dropdown-item" href="#">Shoaib Kakkal</a>
                                  <a className="dropdown-item" href="#">Hafiz Osama</a>
                                </div>
                              </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        
                                <label className="form-check-label formLabel" for="inlineRadio1"><span className="">Invoice# *</span></label>
                            
                        </td>
                        <td>
                            <div className=" form-check-inline">
                                <input type="text" id="formControlDefault" className="form-control" placeholder=""/>
                                
                            </div>
                              
        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        
                                <label className="form-check-label formLabel" for="inlineRadio1"><span>Invoice Date</span></label>
                            
                        </td>
                        <td>
                            <div className=" form-check-inline">
                                <input type="date" id="formControlDefault" className="form-control"/>
                                
                            </div>

                            <div className=" form-check-inline">
                                <label className="form-check-label formLabel" for="inlineRadio1"><span>Due Date</span></label>
                                
                            </div>
                            <div className=" form-check-inline">
                                <input type="date" id="formControlDefault" className="form-control"/>
                                
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        
                                <label className="form-check-label formLabel" for="inlineRadio1"><span>Subject</span></label>
                            
                        </td>
                        <td>
                            <div className=" form-check-inline">
                                <textarea className="text rounded"></textarea>
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr className=' w-100'>
                        
                        <table className="table-responsive-xs table-responsive-sm table SMALL">
                            <thead className=''>
                                <th>ITEM DETAILS</th>
                                <th>QUANTITY</th>
                                <th>RATE</th>
                                <th>DISCOUNT</th>
                                <th>AMOUNT</th>
                            </thead>
                            <tbody>
                                <tr className="bg-light">
                                    <td>
                                        <div className="dropdown form-check-inline">
                                            <input type="text" id="formControlDefault" className="form-control" placeholder="Select Item" 
                                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                            
                    
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                              <a className="dropdown-item" href="#">Cloth</a>
                                              <a className="dropdown-item" href="#">Nawar</a>
                                              <a className="dropdown-item" href="#">Rope</a>
                                            </div>
                                          </div>
                                    </td>
                                    <td>
                                        <input type="number" className="form-control" />
                                    </td>
                                    <td>
                                        <input type="number" className="form-control" />
                                    </td>
                                    <td>
                                        <input type="number" className="form-control" />
                                    </td>
                                    <th>
                                        <input type="number" className="form-control" />
                                    </th>
                                </tr>
                            </tbody>
                        </table>



                    </tr>
                    
                    
                </tbody>
              </table>
                 
        <div className="fixed-actions">
            <button className="btn btn-primary">Save</button>
            <button className="btn btn-light">Cancel</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default NewInvoice