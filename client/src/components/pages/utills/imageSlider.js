// import React from 'react'
// import { Carousel } from 'antd';

// function ImageSlider(props) {
//     return (
//         <div>

//             <Carousel autoplay>
//                 {props.images.map((image, index) => (

            
//                     <div  key={index} style={{display: 'inline-block'}} >
//                         <img style={{ width: '100%',height:'200px', }}
//                             src={`http://localhost:5000/${image}`} alt={index} />
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     )
// }

// export default ImageSlider

import React from 'react'


function ImageSlider(props) {
    return (
        <div>

           
               

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
  </ol>
  <div class="carousel-inner">
    {props.images.map((image, index) => (
      
         <div className="carousel-item active" key={index}>
         <img className="d-block " style={{ width: '100%',height:'200px', }}
        src={`http://localhost:5000/${image}`} alt="product" />

       </div>
   
    ))}
   </div>
 
</div>
                    
               
         
        </div>
    )
}

export default ImageSlider


// import React from "react";

// import SmartSlider from "react-smart-slider";


// // DummyCaption component for example
// const DummyCaption = ({ caption }) => (
//   <div style={{
//    width:'100%',height:'200px'
//   }}>
//     {caption}
//   </div>
// )

// function ImageSlider(props) {
//   const slidesArray = [

//     props.images.map((image, index) => (

//       {
//       url:`http://localhost:5000/${image}`,
//        // (Optional) Set if you want to add any content on your slide
//         childrenElem: <DummyCaption caption={`caption${index}`} />
//       }

//     ))
      
              
//               //   <img class="d-block w-100 " style={{ width: '100%',height:'200px', }}
//               //  src={`http://localhost:5000/${image}`} alt="product" />
      
          
         
         

    
//     // {
//     //     url: "https://i.imgur.com/7u8i7L1.jpg",
 
//     //     // (Optional) Set if you want to add any content on your slide
//     //     childrenElem: <DummyCaption caption="Caption 1" />
//     //   },
     
//   ];
//   return (
//     <div className="App">
      
//       <SmartSlider
//         slides={slidesArray}
//         buttonShape="square" // round or square
//       />
//     </div>
//   );
// }

// export default ImageSlider

