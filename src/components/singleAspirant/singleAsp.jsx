import React, {useState, useEffect} from 'react'
import './singleAsp.css'
import {BsFillPersonFill, BsFillImageFill} from 'react-icons/bs'
import {Link, useNavigate, useParams} from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import {Image} from 'cloudinary-react'
import sweetAlert from 'sweetalert2'
import {TbFidgetSpinner} from 'react-icons/tb'
import UpdateModal from '../Modals/updateModal/update'
import DeleteModal from '../Modals/DeleteModal/delete'


function SingleAsp() {

    const navigate = useNavigate()
    const {id} = useParams()
    

    const [loading, setloading] = useState(false)
    const [errmsg, seterrmsg] = useState('')
    const [image, setimage] = useState('')
    const [Aspname, setAspname] = useState('')
    const [position, setPosition] = useState('');
    const [represent, setRepresent] = useState('');
    const [singAsp, setsingAsp] = useState()
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    useEffect(()=>{

        const fetchSingleAsp = async()=>{

            try{

                setloading(true)

                const singleAspirant = await axios.get(`http://localhost:3007/api/admin/allaspirants/${id}`)
                // console.log(singleAspirant)

                const singleAspData = singleAspirant.data.singleAsp

                // console.log(singleAspData)

                // console.log(singAsp)

                setsingAsp(singleAspData)

                

                setloading(false)



            }

            catch(err){

                // console.log(err)
                seterrmsg('Oops, refresh the page, something is wrong')
                setloading(false)
            }


        }

        fetchSingleAsp()


    }, [id])


    const openUpdateModal = () => {

        setUpdateModalOpen(true);

      };
    
      const closeUpdateModal = () => {

        setUpdateModalOpen(false);

      };
    

      const openDeleteModal = () => {

        setDeleteModalOpen(true);

      };
    
      const closeDeleteModal = () => {

        setDeleteModalOpen(false);

      };


      const handleUpdateSubmit = async(e) => {
        // Perform update logic here
        // ...

        e.preventDefault()

        try{

            setloading(true)

            const updatedData ={

                name:Aspname,
                Position:position,
                Represent:represent
            }

            const updateData = await axios.patch(`http://localhost:3007/api/admin/updateaspirants/${id}`, updatedData)

            // console.log(updateData)

            sweetAlert.fire({

                title:'Details updated Successfully',
                text:updateData.data.msg,
                icon:'success',
                
              })

            setloading(false)


        }

        catch(err){

            console.log(err)
            seterrmsg('Oops, refresh the page, something is wrong')

            setloading(false)
        }



        closeUpdateModal();
      };

      const handleDeleteConfirm = async() => {
        // Perform delete logic here
        // ...

        try{


        }

        catch(err){

            console.log(err)
            seterrmsg('Oops, refresh the page, something is wrong')

            setloading(false)
            
        }



        closeDeleteModal();
      };


    
  return (


    <>


        <section className ='main-profile'>

            {singAsp?(
                
                <div className='profile-container'>

                            <div className="profile-pic">

                                <img src= {singAsp.image} className ='prof-pic-user' alt ={singAsp.name}/>

                                {/* <Image cloudName ='https://api.cloudinary.com/v1_1/djgk2k4sw/image/upload' publicId ={imageString} className ='prof-pic-user' alt ='profile'/> */}


                            </div> 

                            <div className ='updating-details'>

                                <h3>Aspirant Name:<span className='asp'>{singAsp.name}</span></h3>
                                <h3>Aspirant Position:<span className='asp'>{singAsp.Position}</span></h3>
                                <h3>Aspirant Represenation:<span className='asp'>{singAsp.Represent}</span></h3>



                            </div>

                            <div className='crucial-btns'>

                                <button className="sign-in-btn" onClick={openUpdateModal}>Update Details</button>
                                <button className ='delete-btn' onClick={openDeleteModal}>Delete Aspirant</button>

                            </div>

                
                </div>

                ):(

                  <TbFidgetSpinner className='spinner-loader'/>

                )
            
            }



        </section>

        <UpdateModal
        isOpen={updateModalOpen}
        onClose={closeUpdateModal}
        onUpdate={handleUpdateSubmit}
        name={Aspname}
        name={position}
        name={represent}

        onChange={(e) => {
          const { name, value } = e.target;
          if (name === 'names') setAspname(value);
          if (name === 'position') setPosition(value);
          if (name === 'represent') setRepresent(value);
        }}

      />

      <DeleteModal isOpen={deleteModalOpen} onClose={closeDeleteModal} onDelete={handleDeleteConfirm} />
    


    
    
    
    </>


  )
}

export default SingleAsp





{/* <form className="updating-details" >

<div className ='update-img'>


    <BsFillImageFill/>

    <input type ='file' name ='image' accept='image/*'/>


</div>

<div className ='name'>

    <BsFillPersonFill/>

    <input
        type="text"
        name="name"
        required
        placeholder="Enter Your name"
    />

</div>

<div className="reg-submit-btn">

    {/* {errmsg ? <p className ='error-msg'>{errmsg}</p>:( */}


        
        // <button type="submit" className="btn-reg" > Submit</button> 
        
    {/* // )} */}

//  </div>



// </form>
 
