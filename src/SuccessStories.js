import React from "react";
import {Container} from 'react-bootstrap';
import ImageSlider from './ImageSlider';


class SuccessStories extends React.Component {
    constructor(props){
        super (props);
    }

    
render () {
    return (
         
      
    <div className="banner">
     <div className="container-flex">
      <div className="center"> 
       <div className="img">
        <div className="center topMargin">
        <img src="./Story4.png" alt="" />
      </div>      
        <h1>Success Stories</h1>                                                                              
      </div> 
      <br/>

    <div className="row">
     <div className="col-6 center">
      <img className="img-responsive img-thumbnail" src="./Story1.png" 
      />
    </div>
    <div className="text col-6" >
      <p>adhifgbggwfpfprugwokjhfbifbiu
        huffbveufheufjdvbjdbvjdbv
        jsdhvbdhgeirqpihggananfboahfhv
        nsiohyf8ejfalnachahoghosvnslv.
      </p>
     </div>
     </div>
     <div className="row">
     <div className="col-6 center">
     <p>adhifgbggwfpfprugwokjhfbifbiu
        huffbveufheufjdvbjdbvjdbv
        jsdhvbdhgeirqpihggananfboahfhv
        nsiohyf8ejfalnachahoghosvnslv.
      </p>
      
    </div>
    <div className="text col-6" >
    <img className="img-responsive img-thumbnail" src="./Story2.png" 
      />
     
     </div>
     </div>
     <div className="row">
     <div className="col-6 center">
      <img className="img-responsive img-thumbnail" src="./Story3.png" 
      />
    </div>

    <div className="text col-6" >
      <p>"I find that we all think we're alone. We're not alone but we feel alone. But when we hear
        someone else saying the same thing that we are going through, it feels different. that's what 
        motivated me to share my poetry because i feel like I have helped a lot of people with what they
        are going through, and I also realized I am not alone. Excelence Learning Academy class helped me 
        become a more consistent writer and it helped me meet people who were going through some of the same 
        things. This new year has gifted me with such a beautiful beginning. I am not talking about just this 
        year but for a life where I stop just surviving and start living."
        <br />
        
        <h3 text-align="center">"Chelsea"</h3>
      </p>

     </div>
     </div>
          
    
                                        
<div
  id="carouselExampleCrossfade"
  class="carousel slide carousel-fade relative"
  data-bs-ride="carousel"
>
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active float-left w-full">
      <img
        src="Story1.png"
        class="block w-full"
        alt="learning english"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="Story2.png"
        class="block w-full"
        alt="success story"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="Story3.png"
        class="block w-full"
        alt="Story3.png"
      />
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
   </div>
  </div>
 </div>
</div>

  );
 } 
}  
      



export default SuccessStories;