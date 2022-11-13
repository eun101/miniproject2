import React, {useState, useEffect, useMemo} from "react";
import './App.css';
import SideNav from './SideNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApiService from './ApiService';
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { Button } from "react-bootstrap";


const apiPath = "http://localhost:9000/";
// const apiPathCategory = "http://localhost:9000/courses/category/";




function Courses  ()  {

  const [courses, setCourses] = useState([]);
//   const [personalDevCateg, setpersonalDevCateg] = useState([]);
//   const [productivityHacksCateg, setProductivityHacksCateg] = useState([]);
//   const [personalFinCateg, setPersonalFinCateg] = useState([]);
//   const [communicatingCateg, setCommunicatingCateg] = useState([]);
//   const [writingCateg, setWritingCateg] = useState([]);
//   const [leadershipCateg, setLeadershipCateg] = useState([]);
//   const [creativityCateg, setCreativityCateg] = useState([]);
//   const [show, setShow] = useState(false);


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
        // Avoid filter when selectedCategory is null
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
    





    // useEffect(() =>{
    //     fetch(apiPath + "courses/category/personal-development")
    //     .then(response => response.json())
    //     .then(data => {
    //         setpersonalDevCateg(data);
    //     })
    //     .catch((err) => {
    //             console.log(err.message);
    //             });
    //         },[]);


    // useEffect(() =>{
    //     fetch(apiPath + "courses/category/productivity-hacks")
    //     .then(response => response.json())
    //     .then(data => {
    //         setProductivityHacksCateg(data);
    //     })
    //     .catch((err) => {
    //             console.log(err.message);
    //             });
    //         },[]);


    // useEffect(() =>{
    //     fetch(apiPath + "courses/category/personal-finance")
    //     .then(response => response.json())
    //     .then(data => {
    //         setPersonalFinCateg(data);
    //     })
    //     .catch((err) => {
    //             console.log(err.message);
    //             });
    //         },[]);
        
            
    // useEffect(() =>{
    //     fetch(apiPath + "courses/category/communicating")
    //     .then(response => response.json())
    //     .then(data => {
    //         setCommunicatingCateg(data);
    //     })
    //     .catch((err) => {
    //             console.log(err.message);
    //             });
    //         },[]);


    // useEffect(() =>{
    //     fetch(apiPath + "courses/category/writing")
    //     .then(response => response.json())
    //     .then(data => {
    //         setWritingCateg(data);
    //     })
    //     .catch((err) => {
    //             console.log(err.message);
    //             });
    //         },[]);


    // useEffect(() =>{
    //     fetch(apiPath + "courses/category/leadership")
    //     .then(response => response.json())
    //     .then(data => {
    //         setLeadershipCateg(data);
    //     })
    //     .catch((err) => {
    //             console.log(err.message);
    //             });
    //         },[]);


    //     useEffect(() =>{
    //         fetch(apiPath + "courses/category/creativity")
    //         .then(response => response.json())
    //         .then(data => {
    //             setCreativityCateg(data);
    //         })
    //         .catch((err) => {
    //                 console.log(err.message);
    //                 });
    //             },[]);
            
    //     const CustomLink = ({ to, children, ...props }) => { 
    //         const resolvedPath = useResolvedPath(to)
    //         const isActive = useMatch({path: resolvedPath.pathname})
            
    //         return (
    //             <li className= {isActive ? "active" : ""}>
    //                 <Link to={to} {...props}>
    //                 {children}
    //                 </Link>
    //             </li>
    //         )
    //     }

  return (

    <section>
    
        <div className="container">
         
            {/* <ul>
                <li> <a href = "http://localhost:9000/courses/category/personaldevelopment"> Personal Development</a></li>
                <li> <a href="http://localhost:9000/courses/category/productivityhacks">Productivity Hacks</a></li>
                <li> <a href="http://localhost:9000/courses/category/personalfinance">Personal Finance</a></li>
                <li> <a href="http://localhost:9000/courses/category/communicating">Communicating</a></li>
                <li> <a href="http://localhost:9000/courses/category/writing">Writing</a></li>
                <li> <a href="http://localhost:9000/courses/category/leadership">Leadership</a></li>
                <li> <a href="http://localhost:9000/courses/category/creativity">Creativity</a></li>
            </ul> */}

            
            {/* <ul>
                <CustomLink to = "/personal-development"> Personal Development</CustomLink>
                <CustomLink to ="/productivityhacks">Productivity Hacks</CustomLink>
                <CustomLink to ="/personalfinance">Personal Finance</CustomLink>
                <CustomLink to ="/communicating">Communicating</CustomLink>
                <CustomLink to ="/writing">Writing</CustomLink>
                <CustomLink to ="/leadership">Leadership</CustomLink>
                <CustomLink to ="/creativity">Creativity</CustomLink>
            </ul> */}

            <select
                        name="category-list"
                        id="category-list"
                        onChange={handleCategoryChange}
                    >
                        <option value="">All</option>
                        <option value="Communicating" >Communicating</option>
                        <option value="Writing">Writing</option>
                        <option value="Speaking">Speaking</option>
                    </select>
    <div className="filter-container">
        <div>Filter by Category:</div>
        <div onClick={handleCategoryChange}  >
            
                    <button className="btn btn-c" value="" >All</button>
                    <button className="btn btn-c" value="Personal-Development" >Personal Development</button>
                    <button className="btn btn-c" value="Productivity-Hacks" >Productivity Hacks</button>
                    <button className="btn btn-c" value="Communicating" >Communicating</button>
                    <button className="btn btn-c" value="Leadership" >Leadership</button>
                    <button className="btn btn-c" value="Creativity" >Creativity</button>
                </div>
                </div>


          

            <SideNav />


            {filteredList.map((course)=>{
                return (
                    <div>
                        <div> 
                            <div>{course.course_title}</div>
                            <div>{course.course_instructor}</div>
                            <div>{course.duration}</div>
                            <div>{course.age}</div>
                            <img src= {apiPath + course.photo}/>
                        </div>
                    </div>
                    );
                
                })}






        </div>
        

    </section>

  );
}
  
 

export default Courses;