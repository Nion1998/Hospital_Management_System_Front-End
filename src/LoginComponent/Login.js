import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button,Table,Form } from 'react-bootstrap';
import "./Login.css";

const Login = () => {

    const [UserName, setUserName] = useState("");
    const [PassWord, setPassWord] = useState("");
 
    const updateUserName = (e) => {
        setUserName(e.target.value);
    };

    const updatePassWord= (e) => {
        setPassWord(e.target.value);
      };
  
    const addUser = (e) => {
      e.preventDefault();
      const data={Username:UserName,Password:PassWord};
      axios.post("https://localhost:44388/api/login",data).then((rsp)=>{ 
          alert("Login successfully.")
          console.log(rsp.data);
          localStorage.setItem("Username",rsp.data.Username)
          localStorage.setItem("Tkey",rsp.data.TKey)

          axios.post("https://localhost:44388/api/Employee/search/",data ).then((rsp)=>{ 
             console.log(rsp.data)
             localStorage.setItem("Role",rsp.data.Role)

            if(rsp.data.Role='Admin'){
                window.location.href="/employee";
            }
            if(rsp.data.Role='Employe'){
                window.location.href="/customeropd";
            }
            if(rsp.data.Role='Pharmacist'){
                window.location.href="/customerpharmacy/list";
            }
            

        },(er)=>{
            console.log("nion");
        })

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
                value={UserName}
                onChange={updateUserName}
                placeholder="Enter Usename"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="PassWord"
                name="PassWord"
                value={PassWord}
                onChange={updatePassWord}
                placeholder="Enter Password"
              />
            </Form.Group>
 
            <Button className="create_btn" variant="success" type="submit">
              Login
            </Button>
           
            
          </Form>
        </div>
    );
};

export default Login;