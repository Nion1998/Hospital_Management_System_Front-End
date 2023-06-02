import React from 'react';
import {Form,Button,Table}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState,useEffect,useContext} from  'react'
import axios from "axios";
import "./ItemExam.css";

const ItemExamAdd = () => {
    const [Name, setName] = useState("");
    const [Rate, setRate] = useState("");
 
    const updateName = (e) => {
      setName(e.target.value);
    };
  
    const updateRate = (e) => {
      setRate(e.target.value);
    };
  
  
    const addUser = (e) => {
      e.preventDefault();
      const data={Name:Name,Rate:Rate};
      axios.post("https://localhost:44388/api/itemexam/add",data).then((rsp)=>{ 
          alert("Added successfully.")
          window.location.href="/itemexam";
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
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="Rate"
                value={Rate}
                onChange={updateRate }
                placeholder="Enter Price"
              />
            </Form.Group>
  
            <Button className="create_btn" variant="success" type="submit">
              Add Item
            </Button>
            <Button as="input" type="reset" value="Reset" />
            <Link to="/itemexam">
              <Button className="create_btn" variant="info">
                Back to Home
              </Button>
            </Link>
          </Form>
        </div>
      );
  };
  

export default ItemExamAdd;