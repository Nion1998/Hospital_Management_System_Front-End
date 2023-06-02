import React from 'react';
import { Button,Table } from 'react-bootstrap';
import {useState,useEffect} from  'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Pharmacy.css";

const PharmacyCustomerList = () => {
    const [customer, setcustomer] = useState([]);
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/CustomerPharmacy").then((rsp)=>{ 
            setcustomer(rsp.data);
        },(er)=>{
            console.log("nion");
        })
    },[]);

    const Delete=(id)=>{    
        var answer = window.confirm("Do you want to delete");

        if (answer) {
            axios.get("https://localhost:44388/api/CustomerPharmacy/delete/"+id)
        .then((succ)=>{
            alert("Delete successfully.")
            window.location.reload();
            
            
        },(err)=>{
            
        })
        }
        else {
            
        }
        
    }



    return (
        <div>
           
           <Link to="/customerpharmacy" className='btn btn-success'>Add New (+)</Link>

    <Table  striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Adress</th>
          <th>Gendar</th>
          <th>Phone</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {
            customer&&customer.map(customer=>(
            <tr key={(customer.Id)}>
                  <td>{customer.Id}</td>
                  <td>{customer.Name}</td>
                  <td>{customer.Address}</td>
                  <td>{customer.Gender}</td>
                  <td>{customer.Phone}</td>
                  <td>
                  <Link  to={`/customerpharmacy/cart/${customer.Id}`} className='btn btn-success'>Create Order</Link>
                  <Button  onClick={(id)=>{Delete(customer.Id)}} variant="danger">Delete</Button>{' '}

                  </td>

                </tr>
            ))
        }
      </tbody>
    </Table>
        </div>
    );
};

export default PharmacyCustomerList;