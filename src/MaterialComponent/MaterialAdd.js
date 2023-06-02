import React from 'react';
import {Form,Button,Table}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState,useEffect,useContext} from  'react'
import axios from "axios";
import "./Material.css";

const MaterialAdd = () => {
    const [Name, setName] = useState("");
    const [Details, setSDetails] = useState("");
    const [Quantity, setQuantity] = useState("");
    const [Price, setPrice] = useState("");
    const [TotalPrice, setTotalPrice] = useState("");
 
  

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateDetails = (e) => {
    setSDetails(e.target.value);
  };

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const updateTotalPrice = (e) => {
    setTotalPrice(e.target.value);
  };


  const addUser = (e) => {
    e.preventDefault();
    const data={Name:Name,Details:Details,Quantity:Quantity,Price:Price,TotalPrice:TotalPrice};
    axios.post("https://localhost:44388/api/material/add",data).then((rsp)=>{ 
        alert("Added successfully.")
        window.location.href="/material";
        },(er)=>{
            console.log("nion");
        })
    
  }


    return (
        <div className="create">
          <Form onSubmit={addUser}>
          <Form.Group>
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={Name}
              onChange={updateName}
              placeholder="Enter Item Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Item Description</Form.Label>
            <Form.Control
              type="text"
              name="Details"
              value={Details}
              onChange={updateDetails}
              placeholder="Enter Item Details"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              name="Quantity"
              value={Quantity}
              onChange={updateQuantity }
              placeholder="Enter Quantity"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="Price"
              value={Price}
              onChange={updatePrice }
              placeholder="Enter Price"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Total Price</Form.Label>
            <Form.Control
              type="text"
              name="TotalPrice"
              value={TotalPrice}
              onChange={updateTotalPrice }
              placeholder="Total Price"
            />
          </Form.Group>
          
          <Button className="create_btn" variant="success" type="submit">
            Add Item
          </Button>
          <Button as="input" type="reset" value="Reset" />
          <Link to="/Material">
            <Button className="create_btn" variant="info">
              Back to Home
            </Button>
          </Link>
        </Form>
      </div>
    );
};

export default MaterialAdd;