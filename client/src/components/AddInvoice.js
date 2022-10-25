import React from 'react'
import Header from './Header'
import NewInvoice from './invoice/NewInvoice'
import '../resources/css/invoice.css';
import '../resources/css/newCustomer.css';
function AddInvoice() {
  return (
    <>
        <Header/>
        <NewInvoice/>
    </>
  )
}

export default AddInvoice