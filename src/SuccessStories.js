import React from "react";
import {Container} from 'react-bootstrap';


class SuccessStories extends React.Component {
    constructor(props){
        super (props);
    }

    
render () {
    return (
         <section className="success-stories">
          <div className="container-fluid mt-5">
      <div className="banner">
        <div className="img">
         <div className="center mt-5">
          <img src=".//Success Stories.png" alt="success stories" />
        <div className="banner-title-wrapper mt-5">  
          <h1>Success Stories</h1>                                                                              
        </div>  
      </div>  
 

    <div className="row">
      <div className="col-6 center">
        <img className="img-responsive img-thumbnail" src="./Story3.png" 
        />
      </div>
    <div className="text col-6" >
      
      <h4>"This new year has gifted me with such a beautiful beginning. 
           I am not talking about just this year but for a life 
           where I stop just surviving and start living."
      </h4>
        <p text-align="center">~Johnny~</p>
    </div>
   </div>


   <div className="row">
   <div className="text col-6" >
      
      <h4>"This new year has gifted me with such a beautiful beginning. 
           I am not talking about just this year but for a life 
           where I stop just surviving and start living."
      </h4>
        <p text-align="center">~Johnny~</p>
    </div>
      <div className="col-6 center">
        <img className="img-responsive img-thumbnail" src="./Story2.png" 
        />
      </div>
    
   </div>




       <div className="row">
  
       <div className="col-6 center">
         <img className="img-responsive img-thumbnail" src="./Story1.png" 
         />
       </div>

    <div className="text col-6 " >
   
      <h4>"I would have never had this chance at life
           without the help of Excelence Learning academy. 
           You are the reason why I am and who I am today."
      </h4>
         <p text-align="center">~Chelsea~</p>
     
     </div>
   </div>    
  </div>
 </div>
 </div>
 </section>

  );
 } 
}  
      



export default SuccessStories;