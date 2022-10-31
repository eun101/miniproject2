import React from 'react';



function Footer(){
  return(
    <div className="main-footer">
      <div className="container">
        <div className="row">
          
           <div className="col">
             <h4>EXCELLENTE LEARNING ACADEMY</h4>             
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

           <div className="col">
              <h4>STUFF</h4>
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
               &copy;{new Date().getFullYear()} EXCELLENTE LEARNING ACADEMY | all right reserved | terms Of Service | Privacy
            </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;