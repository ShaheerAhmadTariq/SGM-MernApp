import React from 'react'

function ALLinvoices() {
  return (
    <>
        <div className="myContainer">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <span><h2>All Invoices  </h2> <i className="fas fa-caret-down"></i></span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="left">
                    <button className="btn btn-primary"><a className="nav-link inlineNav"  href="newInvoice.html">+ New</a></button>
                    
                    <button className="btn btn-primary"><i className="fas fa-caret-down "></i></button>
                    <i className="fas fa-bars marginIcon"></i>
                    <i className="fas fa-cog marginIcon"></i>
                    <span className="blue marginIcon">Page Tips <i className="fas fa-question-circle"></i></span>
                </div>
                
            </div>
        </div>  
        <div className="row">
            <table className="table table-responsive-xs table-responsive-sm">
                <thead>
                  <tr>
                    <th scope="col">
                      <div className="form-check">
                        <input type="checkbox" />
                      </div>
                    </th>
                    <th scope="col">DATE</th>
                    <th scope="col">INVOICE#</th>
                    <th scope="col">ORDER NUMBER</th>
                    <th scope="col">CUSTOMER NAME</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">DUE DATE</th>
                    <th scope="col">AMOUNT</th>
                    <th scope="col">BALANCE DUE</th>
                    
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="col">
                          <div className="form-check">
                            <input type="checkbox" />
                          </div>
                        </td>
                        <td scope="col">17 MAY 2022</td>
                        <td scope="col">INV0001</td>
                        <td scope="col">0001</td>
                        <td scope="col">Shaheer Ahmad</td>
                        <td scope="col">PAID</td>
                        <td scope="col">17 MAY 2022</td>
                        <td scope="col">PKR117,115,000.00</td>
                        <td scope="col">PKR0.00</td>
                        
                      </tr>
                </tbody>
              </table>
        </div>      

    </div>
    </>
  )
}

export default ALLinvoices