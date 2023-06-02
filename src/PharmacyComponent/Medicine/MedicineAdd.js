import React from 'react';
import {Form,Button,Table}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState,useEffect,useContext} from  'react'
import axios from "axios";
import "./Medicine.css";


const MedicineAdd = () => {

  const [Name, setName] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Price, setPrice] = useState("");
  const [TotalPrice, setTotalPrice] = useState("");
  const [SupplierId, setSupplierId] = useState("");
  
  

  

  const updateName = (e) => {
    setName(e.target.value);
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

  const updateSupplierId = (e) => {
    setSupplierId(e.target.value);
  };



  const addUser = (e) => {
    e.preventDefault();
    const data={Name:Name,Quantity:Quantity,Price:Price,TotalPrice:TotalPrice,SupplierId:SupplierId};
    axios.post("https://localhost:44388/api/medicine/add",data).then((rsp)=>{ 
        alert("Added successfully.")
        window.location.href="/medicine";
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
          
          <Form.Group>
            <Form.Label>Supplier Name</Form.Label>
            <Form.Control
              type="text"
              name="SupplierId"
              value={SupplierId}
              onChange={updateSupplierId}
              placeholder="Enter Supplier Name"
            />
          </Form.Group>
          <Button className="create_btn" variant="success" type="submit">
            Add Item
          </Button>
          <Button as="input" type="reset" value="Reset" />
          <Link to="/medicine">
            <Button className="create_btn" variant="info">
              Back to Home
            </Button>
          </Link>
        </Form>
      </div>
    );
};

export default MedicineAdd;