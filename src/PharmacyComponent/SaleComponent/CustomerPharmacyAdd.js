import React from 'react';
import {Form,Button,Table,Dropdown}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState,useEffect,useContext} from  'react'
import axios from "axios";

const CustomerPharmacyAdd = () => {
    const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Gender, setGender] = useState("");
  const [Phone, setPhone] = useState("");


  

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateAddress = (e) => {
    setAddress(e.target.value);
  };

  const updateGender = (e) => {
    setGender(e.target.value);
  };

  const updatePhone = (e) => {
    setPhone(e.target.value);
  };

  



  const addUser = (e) => {
    e.preventDefault();
    const data={Name:Name,Address:Address,Gender:Gender,Phone:Phone};
    console.log(data);
    axios.post("https://localhost:44388/api/CustomerPharmacy/add",data).then((rsp)=>{ 
        alert("Add successfully.")
        window.location.href="/customerpharmacy/list";
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
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="Address"
              value={Address}
              onChange={updateAddress }
              placeholder="Enter Address"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              name="Gender"
              value={Gender}
              onChange={updateGender }
              placeholder="Enter Gender"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="Phone"
              value={Phone}
              onChange={updatePhone}
              placeholder="Enter Phone"
            />
          </Form.Group>
          
          <Button className="action_btn" variant="primary" type="submit">
            Create User
          </Button>
          <Link to="/">
            <Button className="action_btn" variant="info">
              Back to Home
            </Button>
          </Link>
        </Form>
      </div>
    );
};

export default CustomerPharmacyAdd;