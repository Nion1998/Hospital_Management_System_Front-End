import React from 'react';
import { Button,Table } from 'react-bootstrap';
import {useState,useEffect} from  'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Doctor.css";

const DoctorHome = () => {
    const [doctor, setdoctor] = useState([]);
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/doctor").then((rsp)=>{ 
            setdoctor(rsp.data);
        },(er)=>{
            console.log("nion");
        })
    },[]);

    const Delete=(id)=>{    
        var answer = window.confirm("Do you want to delete this item");

        if (answer) {
            axios.get("https://localhost:44388/api/doctor/delete/"+id)
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
           
           <Link to="/doctor/add"><Button className='action_btn' variant="success">Add New Item</Button></Link>

    <Table  striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Doctor Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Qualification</th>
          <th>Specialization</th>
          
        </tr>
      </thead>
      <tbody>
        {
            doctor&&doctor.map(doctor=>(
            <tr key={(doctor.Id)}>
                  <td>{doctor.Id}</td>
                  <td>{doctor.Name}</td>
                  <td>{doctor.Address}</td>
                  <td>{doctor.Phone}</td>
                  <td>{doctor.Qualification}</td>
                  <td>{doctor.Specialization}</td>
                  <td>
                  <Link  to={`/doctor/update/${doctor.Id}`}> <Button className='create_btn' variant="warning">Update</Button></Link>
                  <Button  onClick={(id)=>{Delete(doctor.Id)}} className= "create_btn" variant="danger">Delete</Button>{' '}

                  </td>

                </tr>
            ))
        }
      </tbody>
    </Table>
        </div>
    );
};


export default DoctorHome;