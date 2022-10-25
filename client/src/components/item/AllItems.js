import React,{ useEffect, useState }  from 'react'

function AllItems() {
  const [items, setitems] = useState([])
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:3001/items");
        const data = await res.json();
        console.log(data)
        setitems(data)
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
                <span><h2>Active Items  </h2> <i className="fas fa-caret-down"></i></span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="left">
                    <button className="btn btn-primary"><a className="nav-link inlineNav"  href="newItem.html">+ New</a></button>
                    
                    <button className="btn btn-primary"><i className="fas fa-caret-down "></i></button>
                    <i className="fas fa-bars marginIcon"></i>
                    <i className="fas fa-cog marginIcon"></i>
                    <span className="blue marginIcon">Page Tips <i className="fas fa-question-circle"></i></span>
                </div>
                
            </div>
        </div>  
        <div className="row">
            <table className="table ">
                <thead>
                  <tr>
                    <th scope="col">
                      <div className="form-check">
                        <input type="checkbox" />
                      </div>
                    </th>
                    <th scope="col">NAME</th>
                    <th scope="col">DESCRIPTION</th>
                    <th scope="col">RATE</th>
                    <th scope="col">USAGE UNIT</th>
                    
                    
                  </tr>
                </thead>
                <tbody>
                {
                items?.map((item, index) => {
               return   <tr key={index}>
                    <td scope="col">
                      <div className="form-check">
                        <input type="checkbox" />
                      </div>
                    </td>
                    <td scope="col">{item?.name}</td>
                    <td scope="col">{item?.description}</td>
                    <td scope="col">{item?.unitPrice}</td>
                    <td scope="col">{item?.unit}</td>
                  


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

export default AllItems