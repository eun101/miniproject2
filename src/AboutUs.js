import React from "react";
import AboutUsVid from './AboutUsVid.mp4';


function AboutUs(){
  return (
    <div className="container">
    <div className="aboutus">
      <h1>About Excelente.</h1>
     <div className="m-4" >
     <video autoPlay muted loop width="auto" height="480" controls >
                        <source src={AboutUsVid} type="video/mp4"/>
                        </video>

    </div>

      <h4>Hello, wishes from Excelente Learning Academy!!</h4>
       <br />
       <h2>Mission</h2>
       <br />
       <p>
       The Excelente Learning Academy prepare students to understand, contribute to, and succeed in a rapidly changing
       society, thus making the world a better and more just place. We will ensure that our students develop both the
       skill that a sound education provides and the competencies essential for success and leadership in the emerging
       creative economy. We will also lead in generating practical and theoretical knowledge that enables people
       to better understand our world and improve conditions for local and global communities.
       </p>
        <br />
      <h2>Vision</h2>
      <br />
      <p>Our vision is to empower students to acquire, demonstrate, articulate and value knowledge and skills that
        will support them, as life-long learners, to participate in and contribute to the global world and 
        practise the core values of the school: respect, tolerance and inclusion, and excellence.           
       </p>
      <br />
      <div className="videos">               
        <iframe width="980" height="500" src="https://www.youtube.com/embed/pb7_YJp9bVA">       
        </iframe>
      </div>
    </div>
    </div>
    );
   }
  

export default AboutUs;