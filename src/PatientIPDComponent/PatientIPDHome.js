import React from 'react';
import { Button,Table } from 'react-bootstrap';
import {useState,useEffect} from  'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import "./PatientIPD.css";

const PatientIPDHome = () => {
    const [patientIPD, setpatientIPD] = useState([]);
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/patientIPD").then((rsp)=>{ 
            setpatientIPD(rsp.data);
        },(er)=>{
            console.log("nion");
        })
    },[]);

    const Delete=(id)=>{    
        var answer = window.confirm("Do you want to delete this item");

        if (answer) {
            axios.get("https://localhost:44388/api/patientIPD/delete/"+id)
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
           
           <Link to="/patientIPD/add"><Button className='action_btn' variant="success">Add New Item</Button></Link>

    <Table  striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Patient Name</th>
          <th>Father's Name</th>
          <th>Mother's Name</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Occupation</th>
          <th>NID</th>
          <th>Admission Date</th>
          <th>Room Details</th>
          <th>RefdBy</th>
          <th>Duty Doctor</th>
          <th>Paid Amount</th>
          <th>Payment Status</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {
            patientIPD&&patientIPD.map(patientIPD=>(
            <tr key={(patientIPD.Id)}>
                  <td>{patientIPD.Id}</td>
                  <td>{patientIPD.Name}</td>
                  <td>{patientIPD.FatherName}</td>
                  <td>{patientIPD.MotherName}</td>
                  <td>{patientIPD.Address}</td>
                  <td>{patientIPD.Gender}</td>
                  <td>{patientIPD.Age}</td>
                  <td>{patientIPD.Phone}</td>
                  <td>{patientIPD.Occupation}</td>
                  <td>{patientIPD.Nid}</td>
                  <td>{patientIPD.AdmissionDate}</td>
                  <td>{patientIPD.RoomDetails}</td>
                  <td>{patientIPD.RefdBy}</td>
                  <td>{patientIPD.DutyDoctor}</td>
                  <td>{patientIPD.PaidAmount}</td>
                  <td>{patientIPD.PaymentStatus}</td>
                  <td>
                  <Link  to={`/patientIPD/update/${patientIPD.Id}`}> <Button className='create_btn' variant="warning">Update</Button></Link>
                  <Button  onClick={(id)=>{Delete(patientIPD.Id)}} className= "create_btn" variant="danger">Delete</Button>{' '}

                  </td>

                </tr>
            ))
        }
      </tbody>
    </Table>
        </div>
    );
};


export default PatientIPDHome;