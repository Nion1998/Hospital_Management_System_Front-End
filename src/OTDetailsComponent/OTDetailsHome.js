import React from 'react';
import { Button,Table } from 'react-bootstrap';
import {useState,useEffect} from  'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import "./OTDetails.css";

const OTDetailsHome = () => {
    const [otdetails, setotdetails] = useState([]);
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/otdetails").then((rsp)=>{ 
            setotdetails(rsp.data);
        },(er)=>{
            console.log("nion");
        })
    },[]);

    const Delete=(id)=>{    
        var answer = window.confirm("Do you want to delete this item");

        if (answer) {
            axios.get("https://localhost:44388/api/otdetails/delete/"+id)
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
           
           <Link to="/otdetails/add"><Button className='action_btn' variant="success">Add New Item</Button></Link>

    <Table  striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Category Name</th>
          <th>Patient ID</th>
          <th>OT Details</th>
          <th>Surgeon</th>
          <th>Anesthetist</th>
          <th>Date</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {
            otdetails&&otdetails.map(otdetails=>(
            <tr key={(otdetails.Id)}>
                  <td>{otdetails.Id}</td>
                  <td>{otdetails.Name}</td>
                  <td>{otdetails.PatientId}</td>
                  <td>{otdetails.Details}</td>
                  <td>{otdetails.Surgeon}</td>
                  <td>{otdetails.Anesthetist}</td>
                  <td>{otdetails.Date}</td>
                  <td>
                  <Link  to={`/otdetails/update/${otdetails.Id}`}> <Button className='create_btn' variant="warning">Update</Button></Link>
                  <Button  onClick={(id)=>{Delete(otdetails.Id)}} className= "create_btn" variant="danger">Delete</Button>{' '}

                  </td>

                </tr>
            ))
        }
      </tbody>
    </Table>
        </div>
    );
};

export default OTDetailsHome;