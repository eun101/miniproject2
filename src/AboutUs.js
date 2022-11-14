import React from "react";

//class AboutUs extends React.Component {
  //constructor(props){
   // super(props);
   //}
  //render(){    

function AboutUs(){
  return (
    <div className="about us">
      <h1>About Excelente.</h1>
     <div className="m-4" >
       <img src="/smartphone.jpg"></img>
       <img src="/smartphone.jpg"></img>
      </div>

      <h4>Hello, wishes from Excelente Learning Academy</h4>
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
        <iframe width="1080" height="500" src="https://www.youtube.com/embed/pb7_YJp9bVA">       
        </iframe>
        <iframe width="1080" height="500" src="https://www.youtube.com/embed/pb7_YJp9bVA">
        </iframe> 
      </div>
    </div>
    );
   }
  

export default AboutUs;