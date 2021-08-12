import React, { useState, useEffect, useRef, useMemo } from 'react'
import ReactToPrint from 'react-to-print'
import { TextField } from '@material-ui/core'
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import PrintIcon from '@material-ui/icons/Print';
import EditIcon from '@material-ui/icons/Edit';

const CustomerList = ({editCell, customers}) => {
  
  const [searchTerm, setSearchTerm] = useState("")

  const componentRef = useRef(); 
  
  // DELETE CUSTOMERS
  const deleteCell = (id) => {
    const confirmation = confirm("Are you sure you want to delete this record")
    if (confirmation === true) {
      Db.collection("Customers").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    }
  }
  // CREATE TABLE
  const RenderHelper = () => {
    return (
      <TableContainer ref={componentRef} className="table-container">
        <Table className="table">
          <TableHead className="th">
            <TableRow className="th-tr">
              <TableCell className="th-td">Customer Name</TableCell>
              <TableCell className="th-td">Father Name</TableCell>
              <TableCell className="th-td">Document Number</TableCell>
              <TableCell className="th-td">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tb">
            {customers.filter((item) => {
              if (searchTerm === "") {
                return item;
              } else if (
                item.customername
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) || item.customerdocumentnumber.includes(searchTerm) ||
                item.customeraddress.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              }
            }).sort((a,b) => {
                if(a.customeraddress.toLowerCase() < b.customeraddress.toLowerCase()) return -1;
                if(a.customeraddress.toLowerCase() > b.customeraddress.toLowerCase()) return 1;
                return 0;
            })
            .map((item, index) => {
              return (
                <TableRow className="tb-tr" key={index}>
                  <TableCell className="tb-td">{item.customername}</TableCell>
                  <TableCell className="tb-td">{item.customerfathername}</TableCell>
                  <TableCell className="tb-td">{item.customerdocumentnumber}</TableCell>
                  <TableCell className="tb-td">{item.customeraddress}</TableCell>
                  <TableCell onClick={() => { editCell(item) }} className="edit-cell"><EditIcon /></TableCell>
                  <TableCell onClick={() => { deleteCell(item.customerdocumentnumber) }} className="delete-cell"><DeleteIcon /></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
  //  DISPLAY
  return (
     <div className="customer-list">
       <div className="user-action">
        <div className="search-field">
          <TextField
            onChange={(e) => { setSearchTerm(e.target.value) }}
            value={searchTerm}
            size="small"
            label="Search..."
            variant="outlined"
          />
        </div>
        <ReactToPrint 
          trigger= {() => {
            return  <PrintIcon className="print-btn"/>
          }}
          content= {() => componentRef.current}
        />
       </div>
       <div>{RenderHelper()}</div>
    </div> 
  )
}

export default CustomerList
