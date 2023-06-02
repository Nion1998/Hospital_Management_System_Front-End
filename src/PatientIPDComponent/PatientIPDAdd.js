import React from 'react';
import {Form,Button,Table}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState,useEffect,useContext} from  'react'
import axios from "axios";
import "./PatientIPD.css";

const PatientIPDAdd = () => {
    const [Name, setName] = useState("");
    const [FatherName, setFatherName] = useState("");
    const [MotherName, setMotherName] = useState("");
    const [Address, setAddress] = useState("");
    const [Gender, setGender] = useState("");
    const [Age, setAge] = useState("");
    const [Phone, setPhone] = useState("");
    const [Occupation, setOccupation] = useState("");
    const [Nid, setNid] = useState("");
    const [AdmissionDate, setAdmissionDate] = useState("");
    const [RoomDetails, setRoomDetails] = useState("");
    const [RefdBy, setRefdBy] = useState("");
    const [DutyDoctor, setDutyDoctor] = useState("");
    const [PaidAmount, setPaidAmount] = useState("");
    const [DoctorId, setDoctorId] = useState("");
    const [CabinId, setCabinId] = useState("");
    
    
  
    
  
    const updateName = (e) => {
      setName(e.target.value);
    };

    const updateFatherName = (e) => {
        setFatherName(e.target.value);
      };

      const updateMotherName = (e) => {
        setMotherName(e.target.value);
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

    const updateOccupation= (e) => {
        setOccupation(e.target.value);
      };

      const updateNid= (e) => {
        setNid(e.target.value);
      };

      const updateAdmissionDate= (e) => {
        setAdmissionDate(e.target.value);
      };

      const updateRoomDetails= (e) => {
        setRoomDetails(e.target.value);
      };

      const updateRefdBy= (e) => {
        setRefdBy(e.target.value);
      };

      const updateDutyDoctor= (e) => {
        setDutyDoctor(e.target.value);
      };
  
    const updatePaidAmount = (e) => {
      setPaidAmount(e.target.value);
    };
  
    

      const updateDoctorId = (e) => {
        setDoctorId(e.target.value);
      };

      const updateCabinId = (e) => {
        setCabinId (e.target.value);
      };
  
  
    const addUser = (e) => {
      e.preventDefault();
      const data={Name:Name,FatherName:FatherName,MotherName:MotherName,Address:Address,Gender:Gender,Age:Age,Phone:Phone,Occupation:Occupation,Nid:Nid,AdmissionDate:AdmissionDate,RefdBy:RefdBy,DutyDoctor:DutyDoctor,PaidAmount:PaidAmount,DoctorId:DoctorId,CabinId:CabinId};
      axios.post("https://localhost:44388/api/patientIPD/add",data).then((rsp)=>{ 
          alert("Added successfully.")
          window.location.href="/patientIPD";
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
              <Form.Label>Father Name</Form.Label>
              <Form.Control
                type="text"
                name="FatherName"
                value={FatherName}
                onChange={updateFatherName}
                placeholder="Enter Father Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mother Name</Form.Label>
              <Form.Control
                type="text"
                name="MotherName"
                value={MotherName}
                onChange={updateMotherName}
                placeholder="Enter Mother Name"
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
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="text"
                name="Occupation"
                value={Occupation}
                onChange={updateOccupation}
                placeholder="Enter Occupation"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>NID</Form.Label>
              <Form.Control
                type="text"
                name="Nid"
                value={Nid}
                onChange={updateNid}
                placeholder="Enter NID Number"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Admission Date</Form.Label>
              <Form.Control
                type="date"
                name="AdmissionDate"
                value={AdmissionDate}
                onChange={updateAdmissionDate}
                placeholder="Enter AdmissionDate"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Room Details</Form.Label>
              <Form.Control
                type="text"
                name="RoomDetails"
                value={RoomDetails}
                onChange={updateRoomDetails }
                placeholder="Enter RoomDetails"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>RefdBy</Form.Label>
              <Form.Control
                type="text"
                name="RefdBy"
                value={RefdBy}
                onChange={updateRefdBy }
                placeholder="Enter RefdBy"
              />
            </Form.Group>
           
            <Form.Group>
              <Form.Label>Duty Doctor</Form.Label>
              <Form.Control
                type="text"
                name="DutyDoctor"
                value={DutyDoctor}
                onChange={updateDutyDoctor }
                placeholder="Enter DutyDoctor"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Paid Amount</Form.Label>
              <Form.Control
                type="text"
                name="PaidAmount"
                value={PaidAmount}
                onChange={updatePaidAmount }
                placeholder="Enter Paid Amount"
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

            <Form.Group>
              <Form.Label>CabinId</Form.Label>
              <Form.Control
                type="text"
                name="CabinId"
                value={CabinId}
                onChange={updateCabinId }
                placeholder="Enter CabinId"
              />
            </Form.Group>
          
            <Button className="create_btn" variant="success" type="submit">
              Add Patient
            </Button>
            <Button as="input" type="reset" value="Reset" />
            <Link to="/patientIPD">
              <Button className="create_btn" variant="info">
                Back to Home
              </Button>
            </Link>
          </Form>
        </div>
      );
  };

export default PatientIPDAdd;