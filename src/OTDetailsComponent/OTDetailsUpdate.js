import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from "axios";
import "./OTDetails.css";

const OTDetailsUpdate = () => {
    const { id } = useParams();
    const [Name, Namechange] = useState("");
   const [PatientId, PatientIdchange] = useState("");
   const [Details, Detailschange] = useState("");
   const [Surgeon, Surgeonchange] = useState("");
   const [Anesthetist, Anesthetistchange] = useState("");
   const [Date, Datechange] = useState("");

   
   useEffect(()=>{
       
       axios.get("https://localhost:44388/api/otdetails/"+id).then((rsp)=>{ 
           Namechange(rsp.data.Name);
           PatientIdchange(rsp.data.PatientId);
           Detailschange(rsp.data.Details);
           Surgeonchange(rsp.data.Surgeon);
           Anesthetistchange(rsp.data.Anesthetist);
           Datechange(rsp.data.Date);

       },(er)=>{
           console.log("nion");
       })
   },[]);


   
   const handlesubmit=(e)=>{
       e.preventDefault();
       
       const data={Name,PatientId,Details,Surgeon,Anesthetist,Date};
       
       axios.post("https://localhost:44388/api/otdetails/update/"+id,data).then((rsp)=>{ 
           alert("Information Updated Successfully.")
           window.location.href="/otdetails/update";
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
                           <h2>OT Details Update</h2>
                       </div>
                       <div className="card-body">

                           <div className="row">

                               

                               <div className="col-lg-12">
                                   <div className="form-group">
                                       <label>OT Category Name</label>
                                       <input  value={Name} onChange={e=>Namechange(e.target.value)} className="form-control"></input>
                                  
                                   </div>
                               </div>
                               <div className="col-lg-12">
                                   <div className="form-group">
                                       <label>Patient ID</label>
                                       <input  value={PatientId} onChange={e=>PatientIdchange(e.target.value)} className="form-control"></input>
                                  
                                   </div>
                               </div>
                               <div className="col-lg-12">
                                   <div className="form-group">
                                       <label>Details</label>
                                       <input  value={Details} onChange={e=>Detailschange(e.target.value)} className="form-control"></input>
                                  
                                   </div>
                               </div>
                               <div className="col-lg-12">
                                   <div className="form-group">
                                       <label>Surgeon</label>
                                       <input  value={Surgeon} onChange={e=>Surgeonchange(e.target.value)} className="form-control"></input>
                                  
                                   </div>
                               </div>
                               <div className="col-lg-12">
                                   <div className="form-group">
                                       <label>Anesthetist</label>
                                       <input  value={Anesthetist} onChange={e=>Anesthetistchange(e.target.value)} className="form-control"></input>
                                  
                                   </div>
                               </div>
                               
                               <div className="col-lg-12">
                                   <div className="form-group">
                                       <label>Date</label>
                                       <input type="date" value={Date} onChange={e=>Datechange(e.target.value)} className="form-control"></input>
                                  
                                   </div>
                               </div>
                               
                               <div className="col-lg-12">
                                   <div className="form-group">
                                   <Button className="create_btn" variant="success" type="submit">Update Item</Button>
                                      <Link to="/otdetails" className="btn btn-primary">Back</Link>
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

export default OTDetailsUpdate;