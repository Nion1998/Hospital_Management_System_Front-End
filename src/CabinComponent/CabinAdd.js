import React from 'react';
import {Form,Button,Table}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState,useEffect,useContext} from  'react'
import axios from "axios";
import "./Cabin.css";

const CabinAdd = () => {
    const [CategoryName, setCategoryName] = useState("");
  const [Status, setStatus] = useState("");
  const [Rent, setRent] = useState("");

  
  const updateCategoryName = (e) => {
    setCategoryName(e.target.value);
  };

  const updateStatus = (e) => {
    setStatus(e.target.value);
  };

  const updateRent = (e) => {
    setRent(e.target.value);
  };


  const addUser = (e) => {
    e.preventDefault();
    const data={CategoryName:CategoryName,Status:Status,Rent:Rent};
    axios.post("https://localhost:44388/api/cabin/add",data).then((rsp)=>{ 
        alert("Added successfully.")
        window.location.href="/cabin";
        },(er)=>{
            console.log("nion");
        })
    
  }

  


    return (
        <div className="create">
          <Form onSubmit={addUser}>
          <Form.Group>
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              CategoryName="CategoryName"
              value={CategoryName}
              onChange={updateCategoryName}
              placeholder="Enter Category Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              name="Status"
              value={Status}
              onChange={updateStatus }
              placeholder="Enter Status"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rent</Form.Label>
            <Form.Control
              type="text"
              name="Rent"
              value={Rent}
              onChange={updateRent }
              placeholder="Enter Rent"
            />
          </Form.Group>

          <Button className="create_btn" variant="success" type="submit">
            Add Item
          </Button>
          <Button as="input" type="reset" value="Reset" />
          <Link to="/cabin">
            <Button className="create_btn" variant="info">
              Back to Home
            </Button>
          </Link>
        </Form>
      </div>
    );
};

export default CabinAdd;