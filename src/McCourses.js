// import React, {useState, useEffect, useMemo} from "react";
// import './App.css';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { Link } from "react-router-dom";
// import CourseDetails from './CourseDetails';

// const apiPath = "http://localhost:9000/";


// function McCourses ()  {

//   const [courses, setCourses] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState();


//   useEffect(() =>{
//   fetch(apiPath + "courses")
//   .then(response => response.json())
//   .then(data => {
//       setCourses(data);
//   })
//   .catch((err) => {
//           console.log(err.message);
//         });
//       },[]);


//       function getFilteredList() {
//         if (!selectedCategory) {
//           return courses;
//         }
//         return courses.filter((item) => item.category === selectedCategory);
//       }
    
//       var filteredList = useMemo(getFilteredList, [selectedCategory, courses]);
    
//       function handleCategoryChange(event) {
//         setSelectedCategory(event.target.value);
//       }
    
      

//   return (

//     <section>
    
//         <div className="container">
         
//           <div className="filter-container">
//               <div onClick={handleCategoryChange}  >
            
//                     <button className="btn btn-c" value="" >All</button>
//                     <button className="btn btn-c" value="Personal-Development" >Personal Development</button>
//                     <button className="btn btn-c" value="Productivity-Hacks" >Productivity Hacks</button>
//                     <button className="btn btn-c" value="Communicating" >Communicating</button>
//                     <button className="btn btn-c" value="Leadership" >Leadership</button>
//                     <button className="btn btn-c" value="Creativity" >Creativity</button>
//                 </div>
//             </div>



//             <div className="container"> 
            
//               <Row xs={1} md={3} className="g-4">
                
//               {filteredList.map((course)=>(
                
//                   <Col>
//                     <Card className="h-100" id={'#course-' + course.id}>
//                       <Card.Img variant="top"/>
//                       <img src= {apiPath + course.photo}/>
                      
//                       <Card.Body>
//                       <Link to={"/coursedetail?id=" + course.id}> {course.course_title}</Link>
//                         <Card.Text className="mt-3">
                          
//                           <h6>{course.course_instructor}</h6>
//                         </Card.Text>
//                       </Card.Body>
                    
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>
//               </div>

//         </div>
//     </section>

//   );
// }
  
 

// export default McCourses;