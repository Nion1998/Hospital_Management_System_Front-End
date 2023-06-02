import React from 'react';
import { Button,Table,Form } from 'react-bootstrap';
import {useState,useEffect,state,PureComponent} from  'react'
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SaleReport = () => {
    const[Report,setReport]=useState("");

    useEffect(()=>{
              
        axios.get("https://localhost:44388/api/r").then((rsp)=>{ 
            console.log(rsp.data)
            setReport(rsp.data)
             },(er)=>{
            console.log("nion");
             })
     },[]);


    return (
        <div>
            <h1 className='container d-flex justify-content-center'> Pharmacy Sell Report Chart</h1>
            <div className='container'>
            <BarChart width={1300} height={500} data={Report}>
            <CartesianGrid strokeDasharray="10 10" />
            <XAxis dataKey="OrderDate" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="TotalBill" fill="#8884d8" />
            </BarChart>
            </div>

        </div>
    );
};

export default SaleReport;