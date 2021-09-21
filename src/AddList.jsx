import React, { useState, useEffect } from "react"
import CustomerList from './CustomerList'
import { Db, auth } from './Fire'
import { FormControl, Input, InputLabel, Button } from '@material-ui/core';

function AddList({customers}) {
  const [customerName, setCustomerName] = useState("")
  const [customerFatherName, setCustomerFatherName] = useState("")
  const [customerDocumentNumber, setCustomerDocumentNumber] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")
  const [isDocNumExist, setIsDocNumExist] = useState(false)

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if(customerDocumentNumber.length === 12) {
        customers.find((item) => {
          if(item.customerdocumentnumber === customerDocumentNumber) {
            setIsDocNumExist(true)
          }
        })
      }
    }, 1000) 
    return () => {
      clearTimeout(timeOutId)
      setIsDocNumExist(false)
    }
  }, [customerDocumentNumber])

  const addToDatabase = () => {
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
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(isDocNumExist) {
      const confirmation = confirm("This document number already exist. do you want to replace the customer")
      confirmation === true ? addToDatabase() : setCustomerDocumentNumber("")
    } else {
      addToDatabase()
    }
  };

  const resetForm = () => {
    setCustomerName("")
    setCustomerFatherName("")
    setCustomerDocumentNumber("")
    setCustomerAddress("")
  }

  const editCell = (data) => {
    const confirmation = confirm("Are you sure you want to edit this record")
    if(confirmation) {
      setCustomerName(data.customername)
      setCustomerFatherName(data.customerfathername)
      setCustomerDocumentNumber(data.customerdocumentnumber)
      setCustomerAddress(data.customeraddress)
      window.scrollTo(0, 0)
    }
  }

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
        <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
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
              autoFocus
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
              type="number"
              id="document-number"
              inputProps={{
                minLength: 12,
                maxLength: 12
              }}
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
            <span onClick={() => {resetForm()}} className="reset-btn">Reset</span>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </FormControl>
        </form>
      </div>
      <div className="customer-list">
        <h4 className="sub-heading">Customers List</h4>
        <CustomerList customers={customers} editCell={editCell}/>
      </div>
    </div>
  )
}
export default AddList









