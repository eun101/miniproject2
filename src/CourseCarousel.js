import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


const apiPath = "http://localhost:9000/";
// const apiPathCategory = "http://localhost:9000/courses/category/";

function CourseCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

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

      function getFilteredList() {
        if (!selectedCategory) {
          return courses;
        }
        return courses.filter((item) => item.category === selectedCategory);
      }
    
      // Avoid duplicate function calls with useMemo
      var filteredList = useMemo(getFilteredList, [selectedCategory, courses]);
    
      function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
      }

  return (
    <section className='course-carousel'>
    <div className="container">
    <div class="row sidebar" onClick={handleCategoryChange}>
				<ul>
           <button className="btn btn-c" value="" >All</button>
            <button className="btn btn-c" value="Personal Development" >Personal Development</button>
            <button className="btn btn-c" value="Productivity Hacks" >Productivity Hacks</button>
             <button className="btn btn-c" value="Communicating" >Communicating</button>
             <button className="btn btn-c" value="Leadership" >Leadership</button>
              <button className="btn btn-c" value="Creativity" >Creativity</button>
				</ul>
   
			</div>
      <Slider {...settings}>
      {filteredList.slice (0, 7).map((course)=>(
        <div className='row h-100'>
            <div className='col'>
                <div className="card">
                    <div className="card-top">
                        <img src= {apiPath + course.photo}/>
                    </div>
                    <div className="card-bottom p-3">
                    <Link to={"/coursedetail?id=" + course.id}><h5>{course.course_title}</h5></Link>
                   <h5>{course.course_instructor}</h5>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
}

export default CourseCarousel;