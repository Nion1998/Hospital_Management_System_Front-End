import React from 'react';
import {Form,Button,Table}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState,useEffect,useContext} from  'react'
import axios from "axios";
import "./Doctor.css";

const DoctorAdd = () => {
    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");
    const [Gender, setGender] = useState("");
    const [Phone, setPhone] = useState("");
    const [Qualification, setQualification] = useState("");
    const [Specialization, setSpecialization] = useState("");
    

  
    const updateName = (e) => {
      setName(e.target.value);
    };
  
    const updateAddress = (e) => {
      setAddress(e.target.value);
    };
  
    const updateGender= (e) => {
      setGender(e.target.value);
    };
  
    const updatePhone= (e) => {
      setPhone(e.target.value);
    };
  
    const updateQualification = (e) => {
      setQualification(e.target.value);
    };
  
    const updateSpecialization = (e) => {
        setSpecialization(e.target.value);
      };
  
  
    const addUser = (e) => {
      e.preventDefault();
      const data={Name:Name,Address:Address,Gender:Gender,Phone:Phone,Qualification:Qualification,Specialization:Specialization};
      axios.post("https://localhost:44388/api/doctor/add",data).then((rsp)=>{ 
          alert("Added successfully.")
          window.location.href="/doctor";
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
                onChange={updateGender}
                placeholder="Gender"
              />
            </Form.Group>
  
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="Phone"
                value={Phone}
                onChange={updatePhone}
                placeholder="+880"
              />
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                name="Qualification"
                value={Qualification}
                onChange={updateQualification}
                placeholder="Enter Qualification"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Specialization</Form.Label>
              <Form.Control
                type="text"
                name="Specialization"
                value={Specialization}
                onChange={updateSpecialization}
                placeholder="Enter Specialization"
              />
            </Form.Group>
          
            <Button className="create_btn" variant="success" type="submit">
              Add Item
            </Button>
            <Button as="input" type="reset" value="Reset" />
            <Link to="/doctor">
              <Button className="create_btn" variant="info">
                Back to Home
              </Button>
            </Link>
          </Form>
        </div>
      );
  };

export default DoctorAdd;