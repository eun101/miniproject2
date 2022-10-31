import React from 'react';
import "./Footer.css";
import "./App.css";

const Footer = () => {
  return(
    <div className="main-footer">
      <div className="container">
        <div className="row">
          
           <div className="col">
             <h4>ECELLENTE LEARNING ACADEMY</h4>
             <ul className="list-unstyled">
                 <li>+6314314344</li>
                 <li>eunishe</li>
                 <li>philiChile</li>
             </ul>
           </div>
          
           <div className="col">
              <h4>STUFF</h4>
              <ul className="list-unstyled">
                 <li>sheryl</li>
                 <li>sheryl</li>
                 <li>sheryl</li>
              </ul>
           </div>
           
           <div className="col">
              <h4>Eunice</h4>
              <ul className="list-unstyled">
                 <li>sheryl</li>
                 <li>sheryl</li>
                 <li>sheryl</li>
              </ul>
           </div>
        </div>
        <hr />
        <div className="row">
            <p className="col-sm">
               &copy;{new Date().getFullYear()} ECXCELLENTE LEARNING ACADEMY | all right reserved | terms Of Service | Privacy
            </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;