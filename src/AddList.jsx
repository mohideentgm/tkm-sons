import React, { useState } from "react"
import CustomerList from './CustomerList'
import { Db, auth } from './Fire'
import { FormControl, Input, InputLabel, Button } from '@material-ui/core';

function AddList() {
  const [customerName, setCustomerName] = useState("")
  const [customerFatherName, setCustomerFatherName] = useState("")
  const [customerDocumentNumber, setCustomerDocumentNumber] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")
  // ADD CUSTOMER
  const addData = (e) => {
    e.preventDefault()

    Db.collection("Customers")
      .doc(customerDocumentNumber)
      .set({
        customername: customerName[0].toUpperCase() + customerName.substring(1),
        customerfathername: customerFatherName[0].toUpperCase() + customerFatherName.substring(1),
        customerdocumentnumber: customerDocumentNumber,
        customeraddress: customerAddress[0].toUpperCase() + customerAddress.substring(1)
      }).then(() => {
         setCustomerName("")
         setCustomerFatherName("")
         setCustomerDocumentNumber("")
         setCustomerAddress("")
      })
  };

  // DISPLAY
  return (
    <div>
      <div className="header">
        <Button onClick={() => {auth.signOut()}} className="logout-btn" size="small" color="secondary">
          Logout
        </Button>
        <h3 className="main-heading">TKM SONS</h3>
      </div>
      <div className="add-form">
        <h4 className="sub-heading">Add New Customer</h4>
        <form autoComplete="off" onSubmit={(e) => addData(e)}>
          <FormControl className="field">
            <InputLabel htmlFor="name">Customer Name</InputLabel>
            <Input
              type="text"
              id="name"
              onChange={(e) => { 
                setCustomerName(e.target.value) 
               }
              }
              value={customerName}
              required
            />
          </FormControl>
          <FormControl className="field">
            <InputLabel htmlFor="id">Father Name</InputLabel>
            <Input
              type="text"
              id="id"
              onChange={(e) => { setCustomerFatherName(e.target.value) }}
              value={customerFatherName}
              required
            />
          </FormControl>
          <FormControl className="field">
            <InputLabel htmlFor="document-number">Document Number</InputLabel>
            <Input
              type="text"
              id="document-number"
              onChange={(e) => { setCustomerDocumentNumber(e.target.value) }}
              value={customerDocumentNumber}
              required
            />
          </FormControl>
          <FormControl className="field">
            <InputLabel htmlFor="address">Address</InputLabel>
            <Input
              type="text"
              id="address"
              onChange={(e) => { setCustomerAddress(e.target.value) }}
              value={customerAddress}
            />
          </FormControl>
          <FormControl className="field button">
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </FormControl>
        </form>
      </div>
      <div className="customer-list">
        <h4 className="sub-heading">Customers List</h4>
        <CustomerList />
      </div>
    </div>
  )
}
export default AddList









