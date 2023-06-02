import React from 'react';
import { Button,Table } from 'react-bootstrap';
import {useState,useEffect} from  'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import "./CustomerOPD.css";


const CustomerOPDHome = () => {
    const [customerOPD, setcustomerOPD] = useState([]);
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/CustomerOPD").then((rsp)=>{ 
            setcustomerOPD(rsp.data);
        },(er)=>{
            console.log("nion");
        })
    },[]);

    const Delete=(id)=>{    
        var answer = window.confirm("Do you want to delete this item");

        if (answer) {
            axios.get("https://localhost:44388/api/CustomerOPD/delete/"+id)
        .then((succ)=>{
            alert("Deleted successfully.")
            window.location.reload();
            
            
        },(err)=>{
            
        })
        }
        else {
            
        }
        
    }
   


    return (
        <div className='read'>
           
           <Link to="/customerOPD/add"><Button className='action_btn' variant="success">Add New Item</Button></Link>

    <Table  striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Patient Name</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Blood Group</th>
          <th>RefdBy</th>
          <th>Remark</th>
          <th>Delivery Date</th>
          <th>Delivery Status</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {
            customerOPD&&customerOPD.map(customerOPD=>(
            <tr key={(customerOPD.Id)}>
                  <td>{customerOPD.Id}</td>
                  <td>{customerOPD.Name}</td>
                  <td>{customerOPD.Address}</td>
                  <td>{customerOPD.Gender}</td>
                  <td>{customerOPD.Age}</td>
                  <td>{customerOPD.Phone}</td>
                  <td>{customerOPD.BloodGroup}</td>
                  <td>{customerOPD.RefdBy}</td>
                  <td>{customerOPD.Remark}</td>
                  <td>{customerOPD.DeliveryDate}</td>
                  <td>{customerOPD.DeliveryStatus}</td>
                  <td>
                  <Link  to={`/customeropd/cart/${customerOPD.Id}`}> <Button className='create_btn' variant="info">Create Order</Button></Link>
                  <Link  to={`/customerOPD/update/${customerOPD.Id}`}> <Button className='create_btn' variant="warning">Update</Button></Link>
                  <Button  onClick={(id)=>{Delete(customerOPD.Id)}} className= "create_btn" variant="danger">Delete</Button>{' '}

                  </td>

                </tr>
            ))
        }
      </tbody>
    </Table>
        </div>
    );
};

export default CustomerOPDHome;