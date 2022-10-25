import React, { useEffect, useState } from 'react'

function AllCustomer() {
  const [customer, setcustomer] = useState([])
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:3001/customer");
        const data = await res.json();
        console.log(data)
        setcustomer(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <>
      <div className="myContainer">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span><h2>All Customers  </h2> <i className="fas fa-caret-down"></i></span>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="left">
              <button className="btn btn-primary"><a className="nav-link inlineNav" href="newCustomer.html">+ New</a></button>
              <button className="btn btn-primary"><i className="fas fa-caret-down "></i></button>
              <i className="fas fa-bars marginIcon"></i>
              <i className="fas fa-cog marginIcon"></i>
              <span className="blue marginIcon">Page Tips <i className="fas fa-question-circle"></i></span>
            </div>

          </div>
        </div>
        <div className="row">
          <table className="table-responsive-xs table-responsive-sm table ">
            <thead>
              <tr>
                <th scope="col">
                  <div className="form-check">
                    <input type="checkbox" />
                  </div>
                </th>
                <th scope="col">NAME</th>
                <th scope="col">COMPANY NAME#</th>
                <th scope="col">EMAIL</th>
                <th scope="col">WORK PHONE</th>
                <th scope="col">ACCOUNT NUMBER</th>
                <th scope="col">STATUS</th>


              </tr>
            </thead>
            <tbody>
              {
                customer?.map((item, index) => {
               return   <tr key={index}>
                    <td scope="col">
                      <div className="form-check">
                        <input type="checkbox" />
                      </div>
                    </td>
                    <td scope="col">{item?.FirstName} {item?.LastName}</td>
                    <td scope="col">{item?.Company}</td>
                    <td scope="col">{item?.email}</td>
                    <td scope="col">{item?.workPhone}</td>
                    <td scope="col">{item?.account}</td>
                    <td scope="col">OK</td>


                  </tr>
                })
              }

            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}

export default AllCustomer