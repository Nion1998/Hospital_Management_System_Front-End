import React from 'react';
import { Button,Table,Form } from 'react-bootstrap';
import {useState,useEffect,state} from  'react'
import axios from "axios";
import {useParams } from "react-router-dom";
import "./CustomerOPD.css";

const CustomerOPDCart = () => {
    const { id } = useParams();
    var CId=id;
    const[Id,Idchange]=useState("");
    const[Name,Namechange]=useState("");
    const [search, setSearch] = useState('');
    const [item, setitem] = useState([]);
    const [OPDOrderDetails, setOPDOrderDetails] = useState([]);
    const[Rate,Pricechange]=useState("");
    const[Total_Item,Total_Itemchange]=useState("");
    const[Total_Price,MTotalPricechange]=useState("");
    const[Pay,Paycechange]=useState("");
    const[Due,Duechange]=useState("");
    const[Discount,Discountchange]=useState("");
    const[Bill,Billchange]=useState("");


    useEffect(()=>{
        const data = {name:search}
        axios.post("https://localhost:44388/api/itemexam/search",data).then
        ((rsp)=>{
            setitem(rsp.data)

        
        },(err)=>{
            
        })
        },[search])

        const drop=(Id,Name,Rate)=>{    
            Idchange(Id);
            Namechange(Name);
            Pricechange(Rate);
            
        }


        
        const addUser = (e) => {
            e.preventDefault();

           
            const data={ItemName:Name,TotalPrice:Rate,CustomerOPDId:CId,ItemExamId:Id};
            console.log(data);
            
            axios.post("https://localhost:44388/api/OPDOrderDetails/add",data).then((rsp)=>{ 
                window.location.href="/customeropd/cart/"+id;
                },(er)=>{
                })
            
          }


          const addBill = (e) => {
            e.preventDefault();
           
            const data={ItemTotal:Total_Item,Discount:Discount,TotalBill:Bill,PaidAmount:Pay,DueAmount:Due,CustomerOPDId:CId};
            console.log(data);
            
            axios.post("https://localhost:44388/api/OPDBilling/add",data).then((rsp)=>{ 
                window.location.href="/customeropd";
                },(er)=>{
                })
            
          }

        let Total=0;
        let MTotalPrice=0;
          useEffect(()=>{
              
            axios.get("https://localhost:44388/api/OPDOrderDetails/"+CId).then((rsp)=>{ 
                setOPDOrderDetails(rsp.data);
                //total item
                rsp.data.forEach(item=>{
                    Total++;
                })
                //total price
                let Dtotal=Total;
                Total_Itemchange(Dtotal);
                rsp.data.forEach(item=>{
                    MTotalPrice+=item.TotalPrice;
                })
                console.log(MTotalPrice);
                MTotalPricechange(MTotalPrice);

            },(er)=>{
            })
        },[]);

        
        useEffect(()=>{
            
            let Discountamount=Total_Price-Discount;

            Billchange(Discountamount);

            },[Discount])




        //due calculation
        useEffect(()=>{
            
            let Due=Bill-Pay;

            Duechange(Due);

            },[Pay])
        
        


    return (
        <div>
             
             <div>

            <dev className="row align-items-start">

            <dev  className="col" >
             <input type="text"  className='form_search' placeholder='Search Item' name="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />

             <div className='form_cart'>
             <form onSubmit={addUser}>
                <table>
                <tr>
                <input type="text" name="search" placeholder='Item ID' value={Id} onChange={(e)=>{Idchange(e.target.value)}} />
                <input type="text" name="search" placeholder='Item Name' value={Name} onChange={e=>Namechange(e.target.value)} />
                <input type="text" name="search" placeholder='Item Price' value={Rate} onChange={(e)=>{Pricechange(e.target.value)}} />
                <Button className="action_btn" variant="info" type="submit">Add</Button>
                </tr>
             </table>
             </form>
            </div>

            <div className='form_cart'>
            <tbody >
        {
            item&&item.map(medicine=>(
            <tr key={(medicine.Id)}>
                  
                  <td>
                  <td><Button variant="light" onClick={(id)=>{drop(medicine.Id,medicine.Name,medicine.Rate)}} >{medicine.Name}</Button>{' '}</td>
                  

                  </td>

                </tr>
            ))
        }
      </tbody>
            </div>
            </dev>
            
            <dev className="col" >
            <Table  striped bordered hover size="sm">
      <thead className='form_cart'>
        <tr>
          <th>Item Name</th>
          <th>Price</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody className='form_cart'>
        {
            OPDOrderDetails&&OPDOrderDetails.map(OPDOrderDetails=>(
            <tr key={(OPDOrderDetails.Id)}>
                  <td>{OPDOrderDetails.ItemName}</td>
                  <td>{OPDOrderDetails.TotalPrice}</td>
                 
                  <td>
                   
                  </td>
                  

                </tr>
            ))
        }
      </tbody>
            </Table>

            <form onSubmit={addBill}>
            <td >
                    <tr> Total Item </tr>
                    <tr> <input type="text" name="Total_Item" value={Total_Item} onChange={(e)=>{Total_Itemchange(e.target.value)}} /></tr>
                    <tr> Total Price </tr>
                    <tr> <input type="text" name="Total_Price" value={Total_Price} onChange={(e)=>{MTotalPricechange(e.target.value)}} /> </tr>
                    <tr> Discount </tr>
                    <tr> <input type="text" name="Discount" placeholder='0' value={Discount} onChange={(e)=>{Discountchange(e.target.value)}} /></tr>
                    <tr> Total Bill </tr>
                    <tr> <input type="text" name="Bill" value={Bill} onChange={(e)=>{Billchange(e.target.value)}} /></tr>
                    <tr> Paid Amount </tr>
                    <tr> <input type="text" name="Pay" placeholder='0' value={Pay} onChange={(e)=>{Paycechange(e.target.value)}} /> </tr>
                    <tr> Due Amount </tr>
                    <tr> <input type="text" name="Due" value={Due} onChange={(e)=>{Duechange(e.target.value)}} /></tr>

                    <Button className="action_btn" variant="info" type="submit">Save</Button>
                    
                </td>
             </form>

            </dev>
            
            
            </dev>

        
            </div>
        </div>
        
    );
};

export default CustomerOPDCart;