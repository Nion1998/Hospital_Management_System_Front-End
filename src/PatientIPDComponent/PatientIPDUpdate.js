import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from "axios";
import "./PatientIPD.css";

const PatientIPDUpdate = () => {
    const { id } = useParams();
    const [Name, Namechange] = useState("");
    const [FatherName, FatherNamechange] = useState("");
    const [MotherName, MotherNamechange] = useState("");
    const [Address, Addresschange] = useState("");
    const [Gender, Genderchange] = useState("");
    const [Age, Agechange] = useState("");
    const [Phone, Phonechange] = useState("");
    const [Occupation, Occupationchange] = useState("");
    const [Nid, Nidchange] = useState("");
    const [AdmissionDate, AdmissionDatechange] = useState("");
    const [RoomDetails, RoomDetailschange] = useState("");
    const [RefdBy, RefdBychange] = useState("");
    const [DutyDoctor, DutyDoctorchange] = useState("");
    const [PaidAmount, PaidAmountchange] = useState("");
    const [PaymentStatus, PaymentStatuschange] = useState("");
    
    

    
    
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/patientIPD/"+id).then((rsp)=>{ 
            Namechange(rsp.data.Name);
            FatherNamechange(rsp.data.FatherName);
            MotherNamechange(rsp.data.MotherName);
            Addresschange(rsp.data.Address);
            Genderchange(rsp.data.Gender);
            Agechange(rsp.data.Age);
            Phonechange(rsp.data.Phone);
            Occupationchange(rsp.data.Occupation);
            Nidchange(rsp.data.Nid);
            AdmissionDatechange(rsp.data.AdmissionDate);
            RoomDetailschange(rsp.data.RoomDetails);
            RefdBychange(rsp.data.RefdBy);
            DutyDoctorchange(rsp.data.DutyDoctor);
            PaidAmountchange(rsp.data.PaidAmount);
            PaymentStatuschange(rsp.data.PaymentStatus);
            console.log(rsp.data)
        },(er)=>{
            console.log("nion");
        })
    },[]);



    
    const handlesubmit=(e)=>{
        e.preventDefault();
        
        const data={Name,FatherName,MotherName,Address,Gender,Age,Phone,Occupation,Nid,AdmissionDate,RefdBy,DutyDoctor,PaidAmount,PaymentStatus};
        
        axios.post("https://localhost:44388/api/patientIPD/update/"+id,data).then((rsp)=>{ 
            alert("Information Updated Successfully.")
            window.location.href="/patientIPD/update";
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
                            <h2>IPD Patient Update</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Patient Name</label>
                                        <input  value={Name} onChange={e=>Namechange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Father Name</label>
                                        <input  value={FatherName} onChange={e=>FatherNamechange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Mother Name</label>
                                        <input  value={MotherName} onChange={e=>MotherNamechange(e.target.value)} className="form-control"></input>
                                   
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
                                        <label>Age</label>
                                        <input  value={Age} onChange={e=>Agechange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Occupation</label>
                                        <input  value={Occupation} onChange={e=>Occupationchange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>NID</label>
                                        <input  value={Nid} onChange={e=>Nidchange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Admission Date</label>
                                        <input  value={AdmissionDate} onChange={e=>AdmissionDatechange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Room Details</label>
                                        <input  value={RoomDetails} onChange={e=>RoomDetailschange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>RefdBy</label>
                                        <input  value={RefdBy} onChange={e=>RefdBychange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Duty Doctor</label>
                                        <input value={DutyDoctor} onChange={e=>DutyDoctorchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Paid Amount</label>
                                        <input  value={PaidAmount} onChange={e=>PaidAmountchange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Payment Status</label>
                                        <input  value={PaymentStatus} onChange={e=>PaymentStatuschange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>

                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                    <Button className="create_btn" variant="success" type="submit">Update Item</Button>
                                       <Link to="/patientIPD" className="btn btn-primary">Back</Link>
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

export default PatientIPDUpdate;