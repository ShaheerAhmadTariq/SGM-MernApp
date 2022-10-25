import React from 'react'
import Header from './Header'
import DashboardBody from './Dashboard/DashboardBody'
import '../resources/css/invoice.css' 
import '../resources/css/newDashboard.css'
import Footer from './Footer'
function Dashboard() {
  return (
    <>
        <Header/>
        <DashboardBody/>
        <Footer/>
    </>
  )
}

export default Dashboard
