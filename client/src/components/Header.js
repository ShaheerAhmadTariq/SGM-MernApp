import React from 'react'
import {Link} from "react-router-dom"
function Header() {
  return (
    <>
        <div className="wrapper">
        
        <nav id="sidebar">
            <div id="dismiss">
                <i className="fas fa-arrow-left"></i>
            </div>

            <div className="sidebar-header">
                
                <h3><i className="bi-globe"></i>   SGM</h3>
            </div>

            <ul className="list-unstyled components">
                <li>
                    <a href="#">About</a>
                    <Link to="/dashboard">Dashboard</Link>
                    
                </li>
                <li >
                <Link to="/invoice">Invoices</Link>
                </li>
                
                <li>
                <Link to="/customer">Customers</Link>
                </li>
                <li>
                    <a href="items.html">Items</a>
                </li>
            </ul>

            
        </nav>

        
        <div>

            <nav className="navbar navbar-expand-lg navbar-light  bg-cream lightColor">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" className="btn btn-info">
                        <i className="fas fa-align-left"></i>
                        
                    </button>
                    
        
                    <div className="form-outline search">
                        <input type="text" id="typeText" className="form-control" placeholder="Search Invoice"/>
                    </div>
                    <div>
                        <a className="nav-link inlineNav" href="#"><i className="fas fa-cog"></i></a>
                        <a className="nav-link inlineNav" href="#"><i className="fas fa-bell"></i></a>
                        <a className="nav-link inlineNav" href="#"><i className="fas fa-question-circle"></i></a>
                        <a className="nav-link inlineNav" href="sign-in.html"><span>Shaheer Ahmad  </span><i className="fas fa-caret-down"></i></a>
                    </div>
                   
                </div>
            </nav>

            
        </div>
        
    </div>
    </>
  )
}

export default Header