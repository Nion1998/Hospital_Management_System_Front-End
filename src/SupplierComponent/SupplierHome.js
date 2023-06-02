import React from 'react';
import { Button,Table } from 'react-bootstrap';
import {useState,useEffect} from  'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Supplier.css";


const SupplierHome = () => {
    const [supplier, setsupplier] = useState([]);
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/supplier").then((rsp)=>{ 
            setsupplier(rsp.data);
        },(er)=>{
            console.log("nion");
        })
    },[]);

    const Delete=(id)=>{    
        var answer = window.confirm("Do you want to delete this item");

        if (answer) {
            axios.get("https://localhost:44388/api/supplier/delete/"+id)
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
           
           <Link to="/supplier/add"><Button className='action_btn' variant="success">Add New Item</Button></Link>

    <Table  striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          
        </tr>
      </thead>
      <tbody>
        {
            supplier&&supplier.map(supplier=>(
            <tr key={(supplier.Id)}>
                  <td>{supplier.Id}</td>
                  <td>{supplier.Name}</td>

                  <td>
                  <Link  to={`/supplier/update/${supplier.Id}`}> <Button className='create_btn' variant="warning">Update</Button></Link>
                  <Button  onClick={(id)=>{Delete(supplier.Id)}} className= "create_btn" variant="danger">Delete</Button>{' '}

                  </td>

                </tr>
            ))
        }
      </tbody>
    </Table>
        </div>
    );
};

export default SupplierHome;