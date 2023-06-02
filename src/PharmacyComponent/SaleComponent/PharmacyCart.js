import React from 'react';
import { Button,Table,Form } from 'react-bootstrap';
import {useState,useEffect,state} from  'react'
import axios from "axios";
import {useParams } from "react-router-dom";
import "./Pharmacy.css";

const PharmacyCart = () => {
    const { id } = useParams();
    var CId=id;
    const[Id,Idchange]=useState("");
    const[Name,Namechange]=useState("");
    const [search, setSearch] = useState('');
    const [medicine, setmedicine] = useState([]);
    const [PharmacyOrderDetails, setPharmacyOrderDetails] = useState([]);
    const[Quantity,Quantitychange]=useState("");
    const[Price,Pricechange]=useState("");
    const[Total_Item,Total_Itemchange]=useState("");
    const[Total_Price,MTotalPricechange]=useState("");
    const[Pay,Paycechange]=useState("");
    const[Due,Duechange]=useState("");
    const[Discount,Discountchange]=useState("");
    const[Bill,Billchange]=useState("");
    
    

    
    

    useEffect(()=>{
        const data = {name:search}
        axios.post("https://localhost:44388/api/medicine/search",data).then
        ((rsp)=>{
            setmedicine(rsp.data)

        
        },(err)=>{
            
        })
        },[search])

        const drop=(Id,Name,Price)=>{    
            Idchange(Id);
            Namechange(Name);
            Pricechange(Price);
            
        }

        
        
        const addUser = (e) => {
            e.preventDefault();
            

           
            const data={MedicineName:Name,Quantity:Quantity,TotalPrice:Price,CustomerPharmacyId:CId,MedicineId:Id};
            console.log(data);
            
            axios.post("https://localhost:44388/api/PharmacyOrderDetails/add",data).then((rsp)=>{ 
                window.location.href="/customerpharmacy/cart/"+id;
                },(er)=>{
                })
            
          }


          const addBill = (e) => {
            e.preventDefault();

           
            const data={ItemTotal:Total_Item,Discount:Discount,TotalBill:Bill,PaidAmount:Pay,DueAmount:Due,CustomerPharmacyId:CId};
            
            axios.post("https://localhost:44388/api/PharmacyBilling/add",data).then((rsp)=>{ 
                window.location.href="/customerpharmacy/list";
                },(er)=>{
                })
            
          }

        let Total=0;
        let MTotalPrice=0;
          useEffect(()=>{
              
            axios.get("https://localhost:44388/api/PharmacyOrderDetails/"+CId).then((rsp)=>{ 
                setPharmacyOrderDetails(rsp.data);
                //total item
                rsp.data.forEach(item=>{
                    Total++;
                })
                console.log(Total);
                //total price0.
                debugger
                Total_Itemchange(Total);
                rsp.data.forEach(item=>{
                    MTotalPrice+=item.TotalPrice;
                })
                console.log(MTotalPrice);
                MTotalPricechange(MTotalPrice);

            },(er)=>{
                console.log("nion");
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
            <div className='form_cartt'>
            <dev className="row align-items-start">

            <dev  className="col" >
             <input type="text" name="search" className='form_search' placeholder='Search Item' value={search} onChange={(e)=>{setSearch(e.target.value)}} />

             <div className='form_cart'>
             <form onSubmit={addUser}>
                <table>
                <tr>
                <input type="text" name="search" placeholder='ID' value={Id} onChange={(e)=>{Idchange(e.target.value)}} />
                <input type="text" name="search" placeholder='Item Name' value={Name} onChange={e=>Namechange(e.target.value)} />
                <input type="text" name="search" placeholder='Price' value={Price} onChange={(e)=>{Pricechange(e.target.value)}} />
                <input type="text" name="search" placeholder='Enter Quantity' value={Quantity} onChange={(e)=>{Quantitychange(e.target.value)}} />
                <Button className="action_btn" variant="info" type="submit">Add</Button>
                </tr>
                </table>
             </form>
            </div>
            
            <div className='form_cart'>
            <tbody>
        {
            medicine&&medicine.map(medicine=>(
            <tr key={(medicine.Id)}>
                  
                  <td>
                  <tr><Button className='button_search' onClick={(id)=>{drop(medicine.Id,medicine.Name,medicine.Price)}} >{medicine.Name}</Button>{' '}</tr>
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
          <th>Quantity</th>
          <th>Price</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody className='form_cart'>
        {
            PharmacyOrderDetails&&PharmacyOrderDetails.map(PharmacyOrderDetails=>(
            <tr key={(PharmacyOrderDetails.Id)}>
                  <td>{PharmacyOrderDetails.MedicineName}</td>
                  <td>{PharmacyOrderDetails.Quantity}</td>
                  <td>{PharmacyOrderDetails.TotalPrice}</td>
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

                    <Button className="action_btn" variant="primary" type="submit">Save</Button>
                    
                </td>
            
             
             </form>

            </dev>
            
            
            </dev>

        
            
        </div>
        </div>
        
        
    );
};

export default PharmacyCart;