import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
return (

	<div className="container-fluid">

<div className="main-footer">
	<div className="container" >
		<div className="row">
			<div className="col-3">
			<img src="./img1.png"  className = "footer-logo my-4"/>
			</div>
		</div>
	
	<div className="row">
				<div className="col">		   	
						<h6> Aims to connect people who aspire for excellence and personal growth for a brighter future.</h6>
				</div>  
					
				<div className="col">     
					<h4>Company</h4>
					<ul className="list-unstyled">
					  <li class="active"><a href="about">About us</a></li>
						<li class="active"><a href="community">Community</a></li>
						<li class="active"><a href="successstories">Success stories</a></li>
						<li class="active"><a href="courses/all">Courses</a></li>
						<li class="active"><a href="pricing">Pricing</a></li>			
					</ul>
				</div>

				<div className="col"> 		
				<h4>Social Media</h4>
					<ul className="social-icon">	
						<li class="active"><a href="https://facebook.com" target="_blank">Facebook</a></li>
						<li class="active"><a href="https://instagram" target="_blank">Instagram</a></li>						
						<li class="active"><a href="https://linkedin" target="_blank">Linkedin</a></li>	
						<li class="active"><a href="https://twitter" target="_blank">Twitter</a></li>
					</ul>					
				</div>

				<div className="col">     
				<h4>Contact Us</h4>
					<ul className="list-unstyled">
						<li class="active">eunishe@gmail.com</li>			
						<li class="active">+63959210000</li>
						<li class="active">Philippines Ilo-ilo</li>
						<li class="active">Chile Santiago</li>
					</ul>
				</div>

				
			</div>
		
			<div className="row text-align-center">
       <div className="col-sm float-right">
         <hr></hr>
			 </div>
			 </div>


			<div className="row text-align-center">
       <div className="col-sm float-right">
         <p className="m-2">{new Date().getFullYear()} Excelente. Learning Academy.    All rights reserved.</p>
			 </div>

   </div>
	</div>
</div>
</div>

 
)
}


export default Footer;