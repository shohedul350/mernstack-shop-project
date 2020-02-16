

import React,{useState,useEffect} from 'react';
import Axios from 'axios'
import { Icon, Col, Card, Row } from 'antd';
import ImageSlider  from './utills/imageSlider';



function Home (){
const [Products,setProducts]=useState([])
const [Skip,setSkip]=useState(0)
const [Limit,setLimit]=useState(8)
const [PostSize,setPostSize]=useState(0)



useEffect(()=>{
  
  const varibles={
    skip:Skip,
    limit:Limit
  }
  // console.log(varibles)
  getProduct(varibles)

},[])

//this function call limit data and show 8 data 
const getProduct=(varibles)=>{
  // console.log(varibles)
  Axios.post('/api/product/getProducts',varibles)
  .then(response=>{
         console.log(response)
    if(response.data.success){
      setProducts([...Products,...response.data.products])

      setPostSize(response.data.postSize)
        
    }
    // else{
    //   alert('Failed to fetch data')
    // }
  })

  .catch(err=>{
    console.log(err)
  })
  
}




//when this function call then show 8 data + more data
const loadMore=()=>{
  let skip=Skip+Limit;

  const varibles={
    skip:skip,
    limit:Limit
  }
  getProduct(varibles)
  setSkip(skip)
}


//product item 
const renderCards = Products.map((product, index) => {
  return(
  <div class="col" key={index}>
  <div className="card" style={{width:'212px',height:'280px' ,margin:'4px',overflow:'hidden' }}>
       <ImageSlider images={product.images} />
  <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{`$${product.price}`}</p>
      </div>
      </div>
    </div>)

 })


  return (
    <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>  Let's Travel Anywhere  <Icon type="rocket" />  </h2>
            </div>
            


      {/* Filter */}
      {/* search */}

      {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No post yet...</h2>
                </div> :



                <div class="container">
                  
                   <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                  
                      {   renderCards }
                 
                </div>
              </div>
                  
         
                 
            }
            <br></br>

            {
              PostSize >= Limit &&
              <div style={{display:'flex',justifyContent:'center'}}>
              <button onClick={loadMore}>Load More</button>
            </div>
            }
 
      
    </div>
  )
}
          

export default Home






