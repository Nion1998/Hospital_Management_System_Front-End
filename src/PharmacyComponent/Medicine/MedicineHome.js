import React from 'react';
import { Button,Table } from 'react-bootstrap';
import {useState,useEffect} from  'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Medicine.css";


const MedicineHome = () => {
    const [medicine, setmedicine] = useState([]);
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/medicine").then((rsp)=>{ 
            setmedicine(rsp.data);
        },(er)=>{
            console.log("nion");
        })
    },[]);

    const Delete=(id)=>{    
        var answer = window.confirm("Do you want to delete this item");

        if (answer) {
            axios.get("https://localhost:44388/api/medicine/delete/"+id)
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
           
           <Link to="/medicine/add"><Button className='action_btn' variant="success">Add New Item</Button></Link>

    <Table  striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total Price</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {
            medicine&&medicine.map(medicine=>(
            <tr key={(medicine.Id)}>
                  <td>{medicine.Id}</td>
                  <td>{medicine.Name}</td>
                  <td>{medicine.Quantity}</td>
                  <td>{medicine.Price}</td>
                  <td>{medicine.TotalPrice}</td>
                  <td>
                  <Link  to={`/medicine/update/${medicine.Id}`}> <Button className='create_btn' variant="warning">Update</Button></Link>
                  <Button  onClick={(id)=>{Delete(medicine.Id)}} className= "create_btn" variant="danger">Delete</Button>{' '}

                  </td>

                </tr>
            ))
        }
      </tbody>
    </Table>
        </div>
    );
};

export default MedicineHome;