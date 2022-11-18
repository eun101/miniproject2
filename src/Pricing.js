import {Container} from 'react-bootstrap';
import React, {useState, useEffect, useMemo} from "react";
import './App.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import pricing from './pricing.png';

const apiPath = "http://localhost:9000/";

function Pricing () {

    const [price, setPrice] = useState([]);
  
  
    useEffect(() =>{
    fetch(apiPath + "pricing")
    .then(response => response.json())
    .then(data => {
        setPrice(data);
    })
    .catch((err) => {
            console.log(err.message);
          });
        },[]);
  

      


    return (
        <section className='price-card'>
        <div className='container-fluid'>
        <div className="row mainbanner row-cols-12 row-cols-sm-12 row-cols-md-12 ">
                  
        <img src={pricing}></img>
        </div>

      

            
            <h1>Pricing</h1>
           
                 <Row xs={1} md={3}>
                 {price.map((price)=>(
                    <Col >
           
                        <Card className="h-100">
                            <Card.Header>
                               <h3> {price.plan} </h3>
                            </Card.Header>
                            <Card.Body>

                                <Card.Title>
                                  <h2>  {price.price} </h2> </Card.Title>

                                <Card.Text>
                                <h6>{price.description}</h6>
                                </Card.Text>

                                <Button><a href="/membership/checkout">{price.CTA}</a></Button>
                            </Card.Body>
                        </Card>
                    </Col>
            ))}
               </Row>
        </div>
        </section>
    );
}
export default Pricing;