import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from "axios";
import "./Cabin.css";

const CabinUpdate = () => {
    const { id } = useParams();
    const[CategoryName,CategoryNamechange]=useState("");
    const[Status,Statuschange]=useState("");
    const[Rent,Rentchange]=useState("");
    
    
    
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/cabin/"+id).then((rsp)=>{ 
            CategoryNamechange(rsp.data.CategoryName);
            Statuschange(rsp.data.Status);
            Rentchange(rsp.data.Rent);
            console.log(rsp.data)
        },(er)=>{
            console.log("nion");
        })
    },[]);



    
    const handlesubmit=(e)=>{
        e.preventDefault();
        
        const data={CategoryName,Status,Rent};
        
        axios.post("https://localhost:44388/api/cabin/update/"+id,data).then((rsp)=>{ 
            alert("Item Updated Successfully.")
            window.location.href="/cabin/update";
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
                            <h2>Cabin Update</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Category Name</label>
                                        <input  value={CategoryName} onChange={e=>CategoryNamechange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Status</label>
                                        <input  value={Status} onChange={e=>Statuschange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Rent</label>
                                        <input value={Rent} onChange={e=>Rentchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                    <Button className="create_btn" variant="success" type="submit">Update Item</Button>
                                       <Link to="/cabin" className="btn btn-primary">Back</Link>
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

export default CabinUpdate;