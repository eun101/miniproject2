import React, { useState } from 'react';
import SignUpModal from './SignUpModal';

function Modal() {
    const [openModal, setOpenModal] = useState(false);

   
    return (
      <div>
        <button 
        onClick={() => setOpenModal(true)} 
        className='modalButton'>
          Modal
        </button>
        <SignUpModal
        open={openModal} 
        onClose={() => setOpenModal(false)} />
        </div>
    );
  }
  
  export default Modal;