import React from 'react'
import './update.css'
import Modal from 'react-modal'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaPoll,FaSchool} from 'react-icons/fa'

function Update({ isOpen, onClose, onUpdate, Aspname, position, represent, onChange, errmsg }) {


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

                    <input type="text" name="names" placeholder ='Enter the Aspirants name' value={Aspname} onChange={onChange} />

                </div>


                <div className="name">

                    <FaPoll/>
                    <select name ='position' value ={position} onChange={onChange}>

                        <option value="" disabled selected>Vying Position</option>
                        <option>President</option>
                        <option>Deputy President</option>
                        <option>Treasurer</option>
                        <option>Secretary General</option>
                        <option>Delegate</option>

                    </select>

                </div>


                <div className="name">

                    <FaSchool/>

                    <select name='represent' value={represent} onChange={onChange}>
                        
                        <option value="" disabled selected>School You Represent</option>
                        <option>Engineering and Technology</option>
                        <option>Science and Humanities</option>
                        <option>Economics</option>
                        <option>Education</option>
                        <option>Environment, water and Fishery</option>

                    </select>

                </div>


                <button onClick={onUpdate} className='update-modal-button' >Confirm Update</button>
                <button onClick={onClose} className ='modal-close-button'>Cancel</button>

                {errmsg && <p className ='error'>{errmsg}</p>}

        </div>


    </Modal>

  )
}

export default Update