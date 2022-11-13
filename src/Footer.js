import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
return (


<div className="main-footer">
	<div className="container" >
		<div className="row">
			<div className="col-3">
			<img src="./img1.png"  className = "footer-logo my-4"/>
			</div>
		</div>
	
	<div className="row">
				<div className="col-3 ">		   	
						<p> Aims to connect people who aspire for excellence and personal growth for a brighter future.</p>
				</div>  
					
				<div className="col-3">     
					<h4>About Us</h4>
					<ul className="list-unstyled">
						<li class="active"><a href="#">Community</a></li>
						<li class="active"><a href="#">Success stories</a></li>
						<li class="active"><a href="#">Courses</a></li>
						<li class="active"><a href="#">Pricing</a></li>			
					</ul>
				</div>

				<div className="col-3">     
				<h4>Contact Us</h4>
					<ul className="list-unstyled">
						<li class="active"><a href="#">eunishe@gmail.com</a></li>			
						<li class="active"><a href="#">+56959210000</a></li>
						<li class="active"><a href="#">Philippines Ilo-ilo</a></li>
						<li class="active"><a href="#">Chile Santiago</a></li>
					</ul>
				</div>

				<div className="col-2"> 		
				<h4>Social Media</h4>
					<ul className="social-icon">	
						<li class="active"><a href="fab fa-facebook">Facebook</a></li>
						<li class="active"><a href="fab fa-instagram">Instagram</a></li>
						<li class="active"><a href="fab fa-twitter">Twitter</a></li>
						<li class="active"><a href="fab fa-github">Github</a></li>		
					</ul>					
				</div>
			</div>
		
		


			<div className="row text-align-center">
       <div className="col-sm">
         <p className="m-2">{new Date().getFullYear()} Copyright @  Excelente. Learning Academy.</p>
			 		 <p>All rights reserved.</p>
			 </div>

   </div>
	 </div>
	 </div>

 
)
}


export default Footer;