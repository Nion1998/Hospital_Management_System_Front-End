import React from 'react';
import { Button,Table } from 'react-bootstrap';
import {useState,useEffect} from  'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Material.css";

const MaterialHome = () => {
    const [material, setmaterial] = useState([]);
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/material").then((rsp)=>{ 
            setmaterial(rsp.data);
        },(er)=>{
            console.log("nion");
        })
    },[]);

    const Delete=(id)=>{    
        var answer = window.confirm("Do you want to delete this item");

        if (answer) {
            axios.get("https://localhost:44388/api/material/delete/"+id)
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
           
           <Link to="/material/add"><Button className='action_btn' variant="success">Add New Item</Button></Link>

    <Table  striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Item Name</th>
          <th>Item Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total Price</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {
            material&&material.map(material=>(
            <tr key={(material.Id)}>
                  <td>{material.Id}</td>
                  <td>{material.Name}</td>
                  <td>{material.Details}</td>
                  <td>{material.Quantity}</td>
                  <td>{material.Price}</td>
                  <td>{material.TotalPrice}</td>
                  <td>
                  <Link  to={`/material/update/${material.Id}`}> <Button className='create_btn' variant="warning">Update</Button></Link>
                  <Button  onClick={(id)=>{Delete(material.Id)}} className= "create_btn" variant="danger">Delete</Button>{' '}

                  </td>

                </tr>
            ))
        }
      </tbody>
    </Table>
        </div>
    );
};

export default MaterialHome;