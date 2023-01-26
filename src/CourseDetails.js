
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
        <Link to="/courses/all">return</Link> 

              <div className= "course-details-content">
                <div className='my-5'>
                <h2> How to Develop Mindset </h2>
                <h3> Course Description </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adi Maecenas in metus a erat gravida sollicitudin. Praesent urna libero, porttitor id faucibus non, posuere at libero. Nam a condimentum ante. Etiam ornare, nibh sed placerat sodales, augue leo pharetra augue, in aliquam nisl mauris ac elit. Sed rutrum, sem pharetra ultrices congue, nulla dui efficitur nisi, vel elementum libero ipsum non lorem. Nunc volutpat ligula nisl, ut placerat mi semper vel. Praesent pharetra non ante vitae laoreet. Integer id arcu in turpis efficitur hendrerit id ut odio. Cras viverra ligula sed porttitor pulvinar. Quisque elementum at </p>
                </div>


                <div className='my-5'>
                <h3> About Instructor</h3>
                <img src='./1.png' width="400px"></img>
                <div className='m-5'>
                <p>Jim Carn sit amet, consectetur adipiscing elit. Nunc vitae massa ac felis varius scelerisque. Nullam quis justo porta, convallis metus eu, eleifend tellus. Curabitur quis ultrices purus. Maecenas in metus a erat gravida sollicitudin. Praesent urna libero, porttitor id faucibus non, posuere at libero. Nam a condimentum ante. Etiam ornare, nibh sed placerat sodales, augue leo pharetra augue, in aliquam nisl mauris ac elit. Sed rutrum, sem pharetra ultrices congue, nulla dui efficitur nisi, vel elementum libero ipsum non lorem. Nunc volutpat ligula nisl, ut placerat t. Vivamus aliquet velit quam, non accumsan felis mollis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                </div>
              </div>

      <Link to="/courses/all" >return</Link> 


    </div>
    </section>
  )
}

export default CourseDetails;