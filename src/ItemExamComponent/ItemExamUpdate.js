import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from "axios";
import "./ItemExam.css";

const ItemExamUpdate = () => {
    const { id } = useParams();
    const[Name,Namechange]=useState("");
    const[Rate,Ratechange]=useState("");


    
    
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/itemexam/"+id).then((rsp)=>{ 
            Namechange(rsp.data.Name);
            Ratechange(rsp.data.Rate);
            console.log(rsp.data)
        },(er)=>{
            console.log("nion");
        })
    },[]);



    
    const handlesubmit=(e)=>{
        e.preventDefault();
        
        const data={Name,Rate};
        
        axios.post("https://localhost:44388/api/itemexam/update/"+id,data).then((rsp)=>{ 
            alert("Item Updated Successfully.")
            window.location.href="/itemexam/update";
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
                            <h2>Itemexam Update</h2>
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
                                        <label>Price</label>
                                        <input value={Rate} onChange={e=>Ratechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                    <Button className="create_btn" variant="success" type="submit">Update Item</Button>
                                       <Link to="/itemexam" className="btn btn-primary">Back</Link>
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

export default ItemExamUpdate;