import React from 'react';
import { Button,Table } from 'react-bootstrap';
import {useState,useEffect} from  'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Cabin.css";

const CabinHome = () => {
    const [cabin, setcabin] = useState([]);
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/cabin").then((rsp)=>{ 
            setcabin(rsp.data);
        },(er)=>{
            console.log("nion");
        })
    },[]);

    const Delete=(id)=>{    
        var answer = window.confirm("Do you want to delete this item");

        if (answer) {
            axios.get("https://localhost:44388/api/cabin/delete/"+id)
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
           
           <Link to="/cabin/add"><Button className='action_btn' variant="success">Add New Item</Button></Link>

    <Table  striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Category Name</th>
          <th>Status</th>
          <th>Rent</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {
            cabin&&cabin.map(cabin=>(
            <tr key={(cabin.Id)}>
                  <td>{cabin.Id}</td>
                  <td>{cabin.CategoryName}</td>
                  <td>{cabin.Status}</td>
                  <td>{cabin.Rent}</td>
                  <td>
                  <Link  to={`/cabin/update/${cabin.Id}`}> <Button className='create_btn' variant="warning">Update</Button></Link>
                  <Button  onClick={(id)=>{Delete(cabin.Id)}} className= "create_btn" variant="danger">Delete</Button>{' '}

                  </td>

                </tr>
            ))
        }
      </tbody>
    </Table>
        </div>
    );
};

export default CabinHome;

    
    
    
    
    