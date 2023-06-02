import React from 'react';
import {Form,Button,Table}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState,useEffect,useContext} from  'react'
import axios from "axios";
import "./OTDetails.css";

const OTDetailsAdd = () => {
    const [Name, setName] = useState("");
    const [PatientId, setPatientId] = useState("");
    const [Details, setDetails] = useState("");
    const [Surgeon, setSurgeon] = useState("");
    const [Anesthetist, setAnesthetist] = useState("");
    const [Date, setDate] = useState("");
    const [DoctorId, setDoctorId] = useState("");

  
    const updateName = (e) => {
      setName(e.target.value);
    };

    const updatePatientId = (e) => {
        setPatientId(e.target.value);
      };

      const updateDetails = (e) => {
        setDetails(e.target.value);
      };
  
    const updateSurgeon = (e) => {
      setSurgeon(e.target.value);
    };
  
    const updateAnesthetist= (e) => {
      setAnesthetist(e.target.value);
    };


    const updateDate= (e) => {
        setDate(e.target.value);
      };
  
      const updateDoctorId= (e) => {
        setDoctorId(e.target.value);
      };
  
  
    const addUser = (e) => {
      e.preventDefault();
      const data={Name:Name,PatientId:PatientId,Details:Details,Surgeon:Surgeon,Anesthetist:Anesthetist,Date:Date,DoctorId:DoctorId};
      axios.post("https://localhost:44388/api/otdetails/add",data).then((rsp)=>{ 
          alert("Added successfully.")
          window.location.href="/otdetails";
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
                name="name"
                value={Name}
                onChange={updateName}
                placeholder="Enter Category Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Patient ID</Form.Label>
              <Form.Control
                type="text"
                name="PatientId"
                value={PatientId}
                onChange={updatePatientId}
                placeholder="Enter Patient ID"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Details</Form.Label>
              <Form.Control
                type="text"
                name="Details"
                value={Details}
                onChange={updateDetails}
                placeholder="Enter OT Details"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Surgeon</Form.Label>
              <Form.Control
                type="text"
                name="Surgeon"
                value={Surgeon}
                onChange={updateSurgeon }
                placeholder="Enter Surgeon Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Anesthetist</Form.Label>
              <Form.Control
                type="text"
                name="Anesthetist"
                value={Anesthetist}
                onChange={updateAnesthetist }
                placeholder="Enter Anesthetist Name"
              />
            </Form.Group>
                <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="Date"
                value={Date}
                onChange={updateDate }
                placeholder="Enter Date"
              />
            </Form.Group>
            
            <Form.Group>
              <Form.Label>DoctorId</Form.Label>
              <Form.Control
                type="text"
                name="DoctorId"
                value={DoctorId}
                onChange={updateDoctorId}
                placeholder=""
              />
            </Form.Group>
          
            <Button className="create_btn" variant="success" type="submit">
              Add Patient
            </Button>
            <Button as="input" type="reset" value="Reset" />
            <Link to="/otdetails">
              <Button className="create_btn" variant="info">
                Back to Home
              </Button>
            </Link>
          </Form>
        </div>
      );
  };

export default OTDetailsAdd;