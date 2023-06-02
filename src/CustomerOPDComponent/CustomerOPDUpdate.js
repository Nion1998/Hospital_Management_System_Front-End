import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from "axios";
import "./CustomerOPD.css";

const CustomerOPDUpdate = () => {
    const { id } = useParams();
    const [Name, Namechange] = useState("");
    const [Address, Addresschange] = useState("");
    const [Gender, Genderchange] = useState("");
    const [Age, Agechange] = useState("");
    const [Phone, Phonechange] = useState("");
    const [BloodGroup, BloodGroupchange] = useState("");
    const [RefdBy, RefdBychange] = useState("");
    const [DeliveryDate, DeliveryDatechange] = useState("");
    const [Remark, Remarkchange] = useState("");
    const [DeliveryStatus, DeliveryStatuschange] = useState("");
      

    
    
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/CustomerOPD/"+id).then((rsp)=>{ 
            Namechange(rsp.data.Name);
            Addresschange(rsp.data.Address);
            Genderchange(rsp.data.Gender);
            Agechange(rsp.data.Age);
            Phonechange(rsp.data.Phone);
            BloodGroupchange(rsp.data.BloodGroup);
            RefdBychange(rsp.data.RefdBy);
            DeliveryDatechange(rsp.data.DeliveryDate);
            RefdBychange(rsp.data.RefdBy);
            Remarkchange(rsp.data.Remark);
            DeliveryStatuschange(rsp.data.DeliveryStatus);
            console.log(rsp.data)
        },(er)=>{
            console.log("nion");
        })
    },[]);



    
    const handlesubmit=(e)=>{
        e.preventDefault();
        
        const data={Name,Address,Gender,Age,Phone,BloodGroup,RefdBy,Remark,DeliveryStatus};
        
        axios.post("https://localhost:44388/api/CustomerOPD/update/"+id,data).then((rsp)=>{ 
            alert("Information Updated Successfully.")
            window.location.href="/customeropd/update";
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
                            <h2>OPD Patient Update</h2>
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
                                        <label>Blood Group</label>
                                        <input  value={BloodGroup} onChange={e=>BloodGroupchange(e.target.value)} className="form-control"></input>
                                   
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
                                        <label>Remark</label>
                                        <input value={Remark} onChange={e=>Remarkchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Delivery Date</label>
                                        <input value={DeliveryDate} onChange={e=>DeliveryDatechange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Delivery Status</label>
                                        <input  value={DeliveryStatus} onChange={e=>DeliveryStatuschange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>

                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                    <Button className="create_btn" variant="success" type="submit">Update Item</Button>
                                       <Link to="/CustomerOPD" className="btn btn-primary">Back</Link>
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

export default CustomerOPDUpdate;