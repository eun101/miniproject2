
import { Link } from 'react-router-dom'
import React, {useState, useEffect, useMemo} from "react";


const apiPath = "http://localhost:9000/";
// const apiPathCategory = "http://localhost:9000/courses/category/";




function CourseDetails() {
    const [courses, setCourses] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [visible, setVisible] = useState(6);
    const showMoreItems = () => {
      setVisible ((prevValue) => prevValue +6);
    };
  
    useEffect(() =>{
    fetch(apiPath + "courses")
    .then(response => response.json())
    .then(data => {
        setCourses(data);
    })
    .catch((err) => {
            console.log(err.message);
          });
        },[]);

   const onClickView = (event, item) =>{
        fetch(apiPath + "courses" + item.id)
        .then(response => response.json())
        .then(data => {
            setVisible(data);
        })
        .catch((err) => {
                console.log(err.message);
                });
            };
  
  return (
<section>
<div className='container'>

        <Link to="/courses/all" >return</Link> 
        {courses.map((course)=>{
            return(
                <h1>{course.id}</h1>
            );


        
})}
<Link to="/courses" >return</Link> 


    </div>
    </section>
  )
}

export default CourseDetails;