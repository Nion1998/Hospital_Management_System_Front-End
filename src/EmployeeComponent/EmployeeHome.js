import React from 'react';
import { Button,Table } from 'react-bootstrap';
import {useState,useEffect} from  'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Employee.css";

const EmployeeHome = () => {
    const [employee, setemployee] = useState([]);
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/employee").then((rsp)=>{ 
            setemployee(rsp.data);
        },(er)=>{
            console.log("nion");
        })
    },[]);

    const Delete=(id)=>{    
        var answer = window.confirm("Do you want to delete this item");

        if (answer) {
            axios.get("https://localhost:44388/api/employee/delete/"+id)
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
           
           <Link to="/employee/add"><Button className='action_btn' variant="success">Add New Item</Button></Link>

    <Table  striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>Role</th>
          <th>Username</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {
            employee&&employee.map(employee=>(
            <tr key={(employee.Id)}>
                  <td>{employee.Id}</td>
                  <td>{employee.Name}</td>
                  <td>{employee.Address}</td>
                  <td>{employee.Gender}</td>
                  <td>{employee.Phone}</td>
                  <td>{employee.Role}</td>
                  <td>{employee.Username}</td>
                  <td>
                  <Link  to={`/employee/update/${employee.Id}`}> <Button className='create_btn' variant="warning">Update</Button></Link>
                  <Button  onClick={(id)=>{Delete(employee.Id)}} className= "create_btn" variant="danger">Delete</Button>{' '}

                  </td>

                </tr>
            ))
        }
      </tbody>
    </Table>
        </div>
    );
};

export default EmployeeHome;