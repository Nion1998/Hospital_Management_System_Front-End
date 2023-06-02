import React from 'react';
import {Form,Button,Table}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState,useEffect,useContext} from  'react'
import axios from "axios";
import "./Supplier.css";

const SupplierAdd = () => {
    const [Name, setName] = useState("");
 
    const updateName = (e) => {
      setName(e.target.value);
    };
  
    const addUser = (e) => {
      e.preventDefault();
      const data={Name:Name};
      axios.post("https://localhost:44388/api/supplier/add",data).then((rsp)=>{ 
          alert("Supplier Added successfully.")
          window.location.href="/supplier";
          },(er)=>{
              console.log("nion");
          })
      
    }
  
  
      return (
          <div className="create">
            <Form onSubmit={addUser}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={Name}
                onChange={updateName}
                placeholder="Enter Name"
              />
            </Form.Group>
 
            <Button className="create_btn" variant="success" type="submit">
              Add Item
            </Button>
            <Button as="input" type="reset" value="Reset" />
            <Link to="/supplier">
              <Button className="create_btn" variant="info">
                Back to Home
              </Button>
            </Link>
          </Form>
        </div>
      );
  };

export default SupplierAdd;