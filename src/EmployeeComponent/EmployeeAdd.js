import React from 'react';
import {Form,Button,Table}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState,useEffect,useContext} from  'react'
import axios from "axios";
import "./Employee.css";

const EmployeeAdd = () => {
    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");
    const [Gender, setGender] = useState("");
    const [Phone, setPhone] = useState("");
    const [Role, setRole] = useState("");
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

  
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

    const updateRole= (e) => {
        setRole(e.target.value);
      };

      const updateUsername= (e) => {
        setUsername(e.target.value);
      };

      const updatePassword= (e) => {
        setPassword(e.target.value);
      };

 
    const addUser = (e) => {
      e.preventDefault();
      const data={Name:Name,Address:Address,Gender:Gender,Phone:Phone,Role:Role,Username:Username,Password:Password,};
      axios.post("https://localhost:44388/api/employee/add",data).then((rsp)=>{ 
          alert("Added successfully.")
          window.location.href="/employee";
          },(er)=>{
              console.log("nion");
          })
      
    } 
  
      return (
          <div className="create">
            <Form onSubmit={addUser}>
            <Form.Group>
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={Name}
                onChange={updateName}
                placeholder="Enter Employee Name"
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
                placeholder="+880"
              />
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                name="Role"
                value={Role}
                onChange={updateRole}
                placeholder="Enter Role"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="Username"
                value={Username}
                onChange={updateUsername}
                placeholder="Enter Username"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="Password"
                value={Password}
                onChange={updatePassword}
                placeholder="Enter Password"
              />
            </Form.Group>
          
            <Button className="create_btn" variant="success" type="submit">
              Add Patient
            </Button>
            <Button as="input" type="reset" value="Reset" />
            <Link to="/employee">
              <Button className="create_btn" variant="info">
                Back to Home
              </Button>
            </Link>
          </Form>
        </div>
      );
  };

export default EmployeeAdd;