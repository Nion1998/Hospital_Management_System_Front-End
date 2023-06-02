import React from 'react';
import { Button,Table } from 'react-bootstrap';
import {useState,useEffect} from  'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import "./ItemExam.css";

const ItemExamHome = () => {
    const [ItemExam, setItemExam] = useState([]);
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/itemexam").then((rsp)=>{ 
            setItemExam(rsp.data);
        },(er)=>{
            console.log("nion");
        })
    },[]);

    const Delete=(id)=>{    
        var answer = window.confirm("Do you want to delete this item");

        if (answer) {
            axios.get("https://localhost:44388/api/itemexam/delete/"+id)
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
           
           <Link to="/itemexam/add"><Button className='action_btn' variant="success">Add New Item</Button></Link>

    <Table  striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {
            ItemExam&&ItemExam.map(ItemExam=>(
            <tr key={(ItemExam.Id)}>
                  <td>{ItemExam.Id}</td>
                  <td>{ItemExam.Name}</td>
                  <td>{ItemExam.Rate}</td>
                  <td>
                  <Link  to={`/itemexam/update/${ItemExam.Id}`}> <Button className='create_btn' variant="warning">Update</Button></Link>
                  <Button  onClick={(id)=>{Delete(ItemExam.Id)}} className= "create_btn" variant="danger">Delete</Button>{' '}

                  </td>

                </tr>
            ))
        }
      </tbody>
    </Table>
        </div>
    );
};

export default ItemExamHome;