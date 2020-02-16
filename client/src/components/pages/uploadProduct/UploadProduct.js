import React, { useState, useContext, useEffect,Fragment } from "react";
import FileUpload from '../utills/FileUpload'
import Axios from 'axios'
import AuthContext from '../../../context/authContext/authContext'

function UploadProduct(props) {
  const {user}=useContext(AuthContext)


    const [TitleValue,setTitleValue]=useState("")
    const [DescriptionValue,setDescriptinValue]=useState("")
    const [PriceValue,setPriceValue]=useState(0)
    const [Containentsvalue,setContainentsvalue]=useState(1)
    const [Images,setImagevalue]=useState([])
  

    const onTitleChance=(e)=>{
      setTitleValue(e.currentTarget.value)
    }
    const onDescriptinChange=(e)=>{
      setDescriptinValue(e.currentTarget.value)
    }
    const onPriceChange=(e)=>{
      setPriceValue(e.currentTarget.value)
    }
    const onContainentsChance=(e)=>{
      setContainentsvalue(e.currentTarget.value)
    }
    const updateImages=(newImages)=>{

      
      setImagevalue(newImages)
    }
      


const onSubmit=e=>{
  e.preventDefault();
if(!TitleValue || !DescriptionValue || !PriceValue || !Containentsvalue || !Images){
  return alert('fill all the file')
}

  const varible={
    writer: user._id,
    title:TitleValue,
    description:DescriptionValue,
    price:PriceValue,
    images:Images,
    continents:Containentsvalue

  }
 
  Axios.post('/api/product/uploadProduct',varible)
  .then(response=>{
    if(response.data.success){
       alert('Product Successfully Upload')
       props.history.push('/')
    }else{
      alert('Failed to upload product')
    }
  })
  .catch()
  console.log('not submi')
  }


    const Containents=[
        {key:1, value:"Dhaka"},
        {key:2, value:"Khulna"},
        {key:3, value:"Rangpur"},
        {key:4, value:"Bogura"},
        {key:5, value:"Rajshahi"},
        {key:6, value:"Jhenaidah"},
    ]
    return (
        
        
        

        <div className="row">
                <div className="col-md-6 offset-md-3">
                <h3 className="text-center display-6">Upload product</h3>
               
                  <form  onSubmit={onSubmit}>
                  <div className="form-group">

                  <FileUpload refreshFunction={updateImages} />

                  </div>
                    <div className="form-group">
                      <label htmlFor="title"> Title: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your title"
                        name="title"
                         value={TitleValue}
                        onChange={onTitleChance}
                       
                      
                        
                       
                      />
                     
                    </div>
                    <div className="form-group">
                      <label htmlFor="descriptin"> Descriptin: </label>
                   


                      <textarea
                      rows="5"
                        className="form-control"
                        placeholder="Enter Your descriptin"
                        name="descriptin"
                        value={DescriptionValue}
                        onChange={onDescriptinChange}>
                       
                        </textarea>
                    </div>
        
                    <div className="form-group">
                      <label htmlFor="price"> Price: </label>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={PriceValue}
                        onChange={onPriceChange}
                       
                      />
                    </div>
                    <div className="form-group">
                    <select className="form-control" onChance={onContainentsChance} value={Containentsvalue}>
                        
                        {Containents.map(item=>(
                            <option key={item.key} value={item.key}>{item.value}</option>
                        ))}
                  
   
                   </select>
                       </div>
       
        
                    
                    
        
                    <button onSubmit={onSubmit} className="btn btn-primary my-3 d-block">Upload</button>
                  </form>
               </div>
               </div>
             
        
    
    )
}

export default UploadProduct



