import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from "axios";
import "./Doctor.css";

const DoctorUpdate = () => {
    const { id } = useParams();
    const[Name,Namechange]=useState("");
    const[Address,Addresschange]=useState("");
    const[Gender,Genderchange]=useState("");
    const[Phone,Phonechange]=useState("");
    const[Qualification,Qualificationchange]=useState("");
    const[Specialization,Specializationchange]=useState("");
    

    
    
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/doctor/"+id).then((rsp)=>{ 
            Namechange(rsp.data.Name);
            Addresschange(rsp.data.Address);
            Genderchange(rsp.data.Gender);
            Phonechange(rsp.data.Phone);
            Qualificationchange(rsp.data.Qualification);
            Specializationchange(rsp.data.Specialization);
            console.log(rsp.data)
        },(er)=>{
            console.log("nion");
        })
    },[]);



    
    const handlesubmit=(e)=>{
        e.preventDefault();
        
        const data={Name,Address,Gender,Phone,Qualification,Specialization};
        
        axios.post("https://localhost:44388/api/doctor/update/"+id,data).then((rsp)=>{ 
            alert("Information Updated Successfully.")
            window.location.href="/doctor/update";
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
                            <h2>Material Update</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Item Name</label>
                                        <input  value={Name} onChange={e=>Namechange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Item Description</label>
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
                                        <label>Phone</label>
                                        <input value={Phone} onChange={e=>Phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Qualification</label>
                                        <input  value={Qualification} onChange={e=>Qualificationchange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Specialization</label>
                                        <input  value={Specialization} onChange={e=>Specializationchange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>

                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                    <Button className="create_btn" variant="success" type="submit">Update Item</Button>
                                       <Link to="/doctor" className="btn btn-primary">Back</Link>
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

export default DoctorUpdate;