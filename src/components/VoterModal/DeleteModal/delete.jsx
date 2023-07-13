import React from 'react'
import './delete.css'
import Modal from 'react-modal'



function Delete({ isOpen, onClose, onDelete }) {


  return (


    <Modal
    
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Delete Modal"
        className="modal-content delete-modal-content"
        overlayClassName="modal-overlay"
    >

        <div className ='modal-content-main'>


            <h2>Delete Aspirant</h2>
            <p>Are you sure you want to delete this aspirant?</p>
            <button onClick={onDelete} className='delete-modal-button'>Confirm Delete</button>
            <button onClick={onClose} className ='delete-modal-button'>Cancel</button>

        </div>



    </Modal>

  )
}

export default Delete