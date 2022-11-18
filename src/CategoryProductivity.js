import React, {useState, useEffect, useMemo} from "react";
import './App.css';
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const apiPath = "http://localhost:9000/";
// const apiPathCategory = "http://localhost:9000/courses/category/";


function Courses  ()  {
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
          <div class="card-container">
            <div class="row">
              <div class="col-3 sidebar" onClick={handleCategoryChange}>
                <ul>
                  <li><Link to="/courses/all" className="btn btn-c" value="" >All</Link></li>
                  <li><Link to="/courses/category/personal-development" className="btn btn-c" value="Personal-Development" >Personal Development</Link></li>
                  <li><Link to= "/courses/category/productivity-hacks"><button className="btn btn-c" value="Productivity-Hacks" >Productivity Hacks</button></Link></li>
                  <li><Link to= "/courses/category/communicating"> <button className="btn btn-c" value="Communicating" >Communicating</button></Link></li>
                  <li> <Link to= "/courses/category/leadership"><button className="btn btn-c" value="Leadership" >Leadership</button></Link></li>
                  <li> <Link to="/courses/category/creativity" className="btn btn-c" value="Creativity" >Creativity</Link></li>
                </ul>
              </div>
              <div class="col-9 main_content">
                 <h2>Productivity Hacks</h2>
                <div class="row">
           
                </div>
                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-3">
                {filteredList.slice( 0, visible).map((course)=>(
                  <div>
                    <div class="col main_content_course">
                        <Card className="h-100">
                          <Card.Img variant="top"/>
                          <img src= {apiPath + course.photo}/>
                          
                          <Card.Body>
                          <Link to={"/coursedetail?id=" + course.id}> 
                          <Card.Title>{course.course_title}</Card.Title>
                          </Link>   

                          {/* <Button>onClick ={(event)} => onClickView (event,item) </Button> */}
                            <Card.Text>
                              <h5>{course.course_instructor}</h5>
                              <h6>{course.duration}</h6>
                            </Card.Text>
                          </Card.Body>
                        
                        </Card>
                    </div>
                    </div>
                ))}
                </div>
                <button onClick={showMoreItems}> View More </button>
              </div>
            </div>
          </div>
        </section>
  )

  
  }

export default Courses;