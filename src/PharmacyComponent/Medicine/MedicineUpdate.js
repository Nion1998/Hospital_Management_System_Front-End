import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from "axios";
import "./Medicine.css";

const MedicineUpdate = () => {
    const { id } = useParams();
    const[Name,Namechange]=useState("");
    const[Quantity,Quantitychange]=useState("");
    const[Price,Pricechange]=useState("");
    const[TotalPrice,TotalPricechange]=useState("");
    const[SupplierId,SupplierIdchange]=useState("");

    
    
    useEffect(()=>{
        
        axios.get("https://localhost:44388/api/medicine/"+id).then((rsp)=>{ 
            Namechange(rsp.data.Name);
            Quantitychange(rsp.data.Quantity);
            Pricechange(rsp.data.Price);
            TotalPricechange(rsp.data.TotalPrice);
            console.log(rsp.data)
        },(er)=>{
            console.log("nion");
        })
    },[]);



    
    const handlesubmit=(e)=>{
        e.preventDefault();
        
        const data={Name,Quantity,Price,TotalPrice};
        
        axios.post("https://localhost:44388/api/medicine/update/"+id,data).then((rsp)=>{ 
            alert("Item Updated Successfully.")
            window.location.href="/medicine/update";
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
                            <h2>Medicine Update</h2>
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
                                        <label>Quantity</label>
                                        <input  value={Quantity} onChange={e=>Quantitychange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input value={Price} onChange={e=>Pricechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Total Price</label>
                                        <input  value={TotalPrice} onChange={e=>TotalPricechange(e.target.value)} className="form-control"></input>
                                   
                                    </div>
                                </div>

                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                    <Button className="create_btn" variant="success" type="submit">Update Item</Button>
                                       <Link to="/medicine" className="btn btn-primary">Back</Link>
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

export default MedicineUpdate;