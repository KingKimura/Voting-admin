import React from 'react'
import './update.css'
import Modal from 'react-modal'
import {BsFillPersonFill, BsFillTelephoneFill} from 'react-icons/bs'
import {FaPoll,FaSchool} from 'react-icons/fa'

function Update({ isOpen, onClose, onUpdate, votername, contact,  onChange, errmsg }) {


  return (

    <Modal
    
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Update Modal"
      className="modal-content update-modal-content"
      overlayClassName="modal-overlay"

    >

        <div className ='modal-content-main'>

                <h2>Update Details</h2>

                <div className ='name'>

                    <BsFillPersonFill/>

                    <input type="text" name="namesvoter" placeholder ='Enter the Voters name' value={votername} onChange={onChange} />

                </div>


                <div className="name">
                    
                  <BsFillTelephoneFill/>


                  <input type="text" name="contact" placeholder ='Enter the Voters PhoneNumber' value={contact} onChange={onChange} />

                   
                </div>


                

                <button onClick={onUpdate} className='update-modal-button' >Confirm Update</button>
                <button onClick={onClose} className ='modal-close-button'>Cancel</button>

                {errmsg && <p className ='error'>{errmsg}</p>}

        </div>


    </Modal>

  )
}

export default Update