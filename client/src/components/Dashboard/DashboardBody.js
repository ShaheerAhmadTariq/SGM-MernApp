import React from 'react'

function DashboardBody() {
  return (
    <>
        <div className="myContainer">
        <div className="row" >
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <span><h2>Dashboard </h2></span>
            </div>
        </div>  
        <br/>

        <div className="card">
            <div className="card-header"> <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <span><h5>Total Receivables  </h5></span>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div className="left">
                        
                        <span className=""><i className="fas fa-plus"></i>  New</span>
                    </div>
                    
                </div>
            </div> 
			</div>
            <div className="card-body">
                <div className="row d-flex justify-content-between receivables col-lg-8 col-md-12">
                    <div className="current ">
                        <h6>CURRENT</h6>
                        <h3>PKR 0.00</h3>
                    </div>
                    <div className="current ">
                        <h6>OVERDUE</h6>
                        <h3>PKR 0.00</h3>
                        <h7>1-15 Days</h7>
                    </div>
                    <div className="current ">
                        <span>.</span>
                        <h3>PKR 0.00</h3>
                        <h7>16-30 Days</h7>
                    </div>
                    <div className="current ">
                        <span>.</span>
                        <h3>PKR 0.00</h3>
                        <h7>31-45 Days</h7>
                    </div>
                    <div className="current ">
                        <span>.</span>
                        <h3>PKR 0.00</h3>
                        <h7>Above 45 Days</h7>
                    </div>
                    
                </div>
            </div>
        </div>

       
        
        <br/>
        <div className="row sales">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <span><h5 >Sales and Expenses  </h5></span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="left">
                    
                    <span className="">This Fiscal Year<i className="fas fa-caret-down"></i></span>
                </div>
                
            </div>
        </div> 
        
     

        <div className="container lightBg">

            <section className="d-flex flex-column justify-content-center align-content-center" id="">
              
                <div className="card col-12 col-lg-10 col-md-12 col-sm-12 my-4 lightBg">
                    
                    <div className="card-body lightBg">
                    <canvas className="my-4 w-100 col-xs-12 col-sm-12 col-md-12" id="myChart2" height="380"></canvas>
                    </div>
                </div>
                
              
            </section>
      
        </div>

        <div className="card">
            <div className="card-header">Sales, Recipt and Dues</div>
            <div className="card-body">
              <table className="table">
                  <thead>
                      <tr>
                        <th></th>
                        <th>SALES</th>
                        <th>RECIPITS</th>
                        <th>DUE</th>
                      </tr>
                      
                  </thead>
                  <tbody>
                      <tr>
                          <th>Today</th>
                          <td><span className="lightColor">PKR117,115,00</span></td>
                          <td><span className="lightColor">PKR117,115,00</span></td>
                          <td><span className="lightColor">PKR117,115,00</span></td>
                      </tr>
                      <tr>
                        <th>This Week</th>
                        <td><span className="lightColor">PKR117,115,00</span></td>
                          <td><span className="lightColor">PKR117,115,00</span></td>
                          <td><span className="lightColor">PKR117,115,00</span></td>
                    </tr>
                    <tr>
                        <th>This Month</th>
                        <td><span className="lightColor">PKR117,115,00</span></td>
                          <td><span className="lightColor">PKR117,115,00</span></td>
                          <td><span className="lightColor">PKR117,115,00</span></td>
                    </tr>
                    <tr>
                        <th>This Quater</th>
                        <td><span className="lightColor">PKR117,115,00</span></td>
                          <td><span className="lightColor">PKR117,115,00</span></td>
                          <td><span className="lightColor">PKR117,115,00</span></td>
                    </tr>
                    <tr>
                        <th>This Year</th>
                        <td><span className="lightColor">PKR117,115,00</span></td>
                          <td><span className="lightColor">PKR117,115,00</span></td>
                          <td><span className="lightColor">PKR117,115,00</span></td>
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
    </div>
    </>
  )
}

export default DashboardBody