import React from "react";
import {useState} from "react";
import { ModalBody } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';  

function TopBanner() {
    const [show, setShow] = useState(true);

        
    const handleClose = () => setShow(false);
 



return (
    <div >

    

    <Modal show={show} onHide={handleClose} className="top-banner-modal modal-default "> 
    <button className = "modal-close" onClick={handleClose}>
            X
        </button>
    <ModalBody className="">

   

          <div class="row">
                <div class="col-5 top-banner-image">
                    <img src="topbanner.png" />
                </div>
                <div class="col-7">
                        <div class="form-row mt-5">
                            
                            <h5>Join Excelente. Annual Online Summit for FREE!</h5>
                            <button className="top-banner-btn"> Click here to join </button>


                            </div>
            </div>  
            </div>
    </ModalBody>
    </Modal>
     

        
    </div>


);

}

export default TopBanner;