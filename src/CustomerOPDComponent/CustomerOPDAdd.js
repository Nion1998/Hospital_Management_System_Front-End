import React from 'react';
import {Form,Button,Table}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState,useEffect,useContext} from  'react'
import axios from "axios";
import "./CustomerOPD.css";

const CustomerOPDAdd = () => {
    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");
    const [Gender, setGender] = useState("");
    const [Age, setAge] = useState("");
    const [Phone, setPhone] = useState("");
    const [BloodGroup, setBloodGroup] = useState("");
    const [RefdBy, setRefdBy] = useState("");
    const [DeliveryDate, setDeliveryDate] = useState("");
    const [Remark, setRemark] = useState("");
    const [DeliveryStatus, setDeliveryStatus] = useState("");
    const [DoctorId, setDoctorId] = useState("");
    
    
  
    
  
    const updateName = (e) => {
      setName(e.target.value);
    };

    const updateAddress = (e) => {
      setAddress(e.target.value);
    };
  
    const updateGender= (e) => {
      setGender(e.target.value);
    };


    const updateAge= (e) => {
        setAge(e.target.value);
      };
  
    const updatePhone= (e) => {
      setPhone(e.target.value);
    };


      const updateBloodGroup= (e) => {
        setBloodGroup(e.target.value);
      };

      const updateRefdBy= (e) => {
        setRefdBy(e.target.value);
      };

      
      const updateDeliveryDate= (e) => {
        setDeliveryDate(e.target.value);
      };


      const updateRemark= (e) => {
        setRemark(e.target.value);
      };
  
    const updateDeliveryStatus = (e) => {
      setDeliveryStatus(e.target.value);
    };

      const updateDoctorId = (e) => {
        setDoctorId(e.target.value);
      };

  
    const addUser = (e) => {
      e.preventDefault();
      const data={Name:Name,Address:Address,Gender:Gender,Age:Age,Phone:Phone,BloodGroup:BloodGroup,RefdBy:RefdBy,DeliveryDate:DeliveryDate,Remark:Remark,DeliveryStatus:DeliveryStatus,DoctorId:DoctorId};
      axios.post("https://localhost:44388/api/CustomerOPD/add",data).then((rsp)=>{ 
          alert("Added successfully.")
          window.location.href="/customeropd";
          },(er)=>{
              console.log("nion");
          })
      
    } 
  
      return (
          <div className="create">
            <Form onSubmit={addUser}>
            <Form.Group>
              <Form.Label>Patient Name</Form.Label>
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
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                name="Age"
                value={Age}
                onChange={updateAge }
                placeholder="Enter Age"
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
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                type="text"
                name="BloodGroup"
                value={BloodGroup}
                onChange={updateBloodGroup}
                placeholder="Enter Blood Group"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>RefdBy</Form.Label>
              <Form.Control
                type="text"
                name="RefdBy"
                value={RefdBy}
                onChange={updateRefdBy}
                placeholder="Enter RefdBy"
              />
            </Form.Group>
           
            <Form.Group>
              <Form.Label>Remark</Form.Label>
              <Form.Control
                type="text"
                name="Remark"
                value={Remark}
                onChange={updateRemark }
                placeholder="Enter Remark"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Delivery Date</Form.Label>
              <Form.Control
                type="date"
                name="DeliveryDate"
                value={DeliveryDate}
                onChange={updateDeliveryDate }
                placeholder="Enter DeliveryDate"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Delivery Status</Form.Label>
              <Form.Control
                type="text"
                name="DeliveryStatus"
                value={DeliveryStatus}
                onChange={updateDeliveryStatus }
                placeholder="Enter Delivery Status"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>DoctorId</Form.Label>
              <Form.Control
                type="text"
                name="DoctorId"
                value={DoctorId}
                onChange={updateDoctorId}
                placeholder="Enter Doctor Id"
              />
            </Form.Group>
          
            <Button className="create_btn" variant="success" type="submit">
              Add Patient
            </Button>
            <Button as="input" type="reset" value="Reset" />
            <Link to="/customeropd">
              <Button className="create_btn" variant="info">
                Back to Home
              </Button>
            </Link>
          </Form>
        </div>
      );
  };

export default CustomerOPDAdd;