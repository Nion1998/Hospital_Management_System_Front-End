import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from "axios";
import "./Employee.css";

const EmployeeUpdate = () => {
    const { id } = useParams();
    const [Name, Namechange] = useState("");
    const [Address, Addresschange] = useState("");
    const [Gender, Genderchange] = useState("");
    const [Phone, Phonechange] = useState("");
    const [Role, Rolechange] = useState("");
    const [Username, Usernamechange] = useState("");
    const [Password, Passwordchange] = useState("");
    
    
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/employee/"+id).then((rsp)=>{ 
            Namechange(rsp.data.Name);
            Addresschange(rsp.data.Address);
            Genderchange(rsp.data.Gender);
            Phonechange(rsp.data.Phone);
            Rolechange(rsp.data.Role);
            Usernamechange(rsp.data.Username);
            Passwordchange(rsp.data.Password);


            console.log(rsp.data)
        },(er)=>{
            console.log("nion");
        })
    },[]);



    
    const handlesubmit=(e)=>{
        e.preventDefault();
        
        const data={Name,Address,Gender,Phone,Role,Username,Password};
        
        axios.post("https://localhost:44388/api/employee/update/"+id,data).then((rsp)=>{ 
            alert("Information Updated Successfully.")
            window.location.href="/employee/update";
            console.log(rsp.data)
        },(er)=>{
            console.log(er.data);
        })
        
    }



    return (
        <div className='read'>
            <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Employee Information Update</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input  value={Name} onChange={e=>Namechange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input  value={Address} onChange={e=>Addresschange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <input  value={Gender} onChange={e=>Genderchange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Role</label>
                                        <input  value={Role} onChange={e=>Rolechange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input  value={Username} onChange={e=>Usernamechange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" value={Password} onChange={e=>Passwordchange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>
                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                    <Button className="create_btn" variant="success" type="submit">Update Item</Button>
                                       <Link to="/employee" className="btn btn-primary">Back</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
        </div>
    );
};

export default EmployeeUpdate;