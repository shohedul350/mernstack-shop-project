

import React,{useState,useEffect} from 'react';
import Axios from 'axios'
import { Icon, Col, Card, Row } from 'antd';
import ImageSlider  from './utills/imageSlider';



function Home (){
const [Products,setProducts]=useState([])
const [skip,setSkip]=useState(0)
const [limite,setLimite]=useState(8)



useEffect(()=>{
  Axios.get('/api/product/getProducts')
  .then(response=>{
         
    if(response.data.success){
      setProducts(response.data.products)
        
    }
    // else{
    //   alert('Failed to fetch data')
    // }
  })

  .catch(err=>{
    console.log(err)
  })

},[])





const loadMore=()=>{
  let skip=skip+limite
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
  <div style={{display:'flex',justifyContent:'center'}}>
    <button onClick={loadMore}>Load More</button>
  </div>
      
    </div>
  )
}
          

export default Home






