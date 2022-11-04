import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
return (
<div className="main-footer">
	<div className="container">
		<div className="row">
      {/* column1 */}    
    <div className="col mx-2">		
      <h2>EXCELENTE.</h2>
	
			<p> aims to connect people who aspire for personal growth for the brighter future</p>
    </div>  
		  {/*Column2*/}
<div className="col">     
	<h4>About Us</h4>
    <ul className="list-unstyled">
			<li class="active"><a href="#">Community</a></li>
			<li class="active"><a href="#">Success stories</a></li>
			<li class="active"><a href="#">Courses</a></li>
			<li class="active"><a href="#">Pricing</a></li>
    </ul>
	</div>
  	  {/*Column2*/}
<div className="col">     
	<h4>Contact Us</h4>
    <ul className="list-unstyled">
			<li class="active"><a href="#">eunishe@gmail.com</a></li>
			<li class="active"><a href="#">+630000000</a></li>
			<li class="active"><a href="#">Philippines Ilo-ilo</a></li>
			<li class="active"><a href="#">Chile Santiago</a></li>
    </ul>
	</div>
      {/*Column3*/}		    
<div className="col"> 		
	<h4>Social Media</h4>
    <ul className="social-icon">
	
		  <li class="active"><a href="fab fa-facebook">Facebook</a></li>
			<li class="active"><a href="fab fa-instagram">Instagram</a></li>
			<li class="active"><a href="fab fa-twitter">Twitter</a></li>
			<li class="active"><a href="fab fa-github">Github</a></li>
    </ul>					
 </div>	    
</div>
<br/>

<div className="row">
       <p className="col-sm">
         {new Date().getFullYear()} Copyright @  Excelente, Inc.
 <p>All rights reserved.</p>

       </p>
   </div>
 </div>
</div>
 
)
}


export default Footer;
