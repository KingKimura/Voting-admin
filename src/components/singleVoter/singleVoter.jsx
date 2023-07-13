import React, {useState, useEffect} from 'react'
import './singleVoter.css'
import {BsFillPersonFill, BsFillImageFill} from 'react-icons/bs'
import {Link, useNavigate, useParams} from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import {Image} from 'cloudinary-react'
import sweetAlert from 'sweetalert2'
import {TbFidgetSpinner} from 'react-icons/tb'
import UpdateModal from '../Modals/updateModal/update'
import DeleteModal from '../Modals/DeleteModal/delete'


function SingleVoter() {

    const navigate = useNavigate()
    const {id} = useParams()
    

    const [loading, setloading] = useState(false)
    const [errmsg, seterrmsg] = useState('')
    const [votername, setvotername] = useState('')
    const [contact, setcontact] = useState('');
    const [singVoter, setsingVoter] = useState()
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    useEffect(()=>{

        const fetchSingleVoter = async()=>{

            try{

                setloading(true)

                const singleVoter = await axios.get(`http://localhost:3007/api/admin/allaspirants/${id}`)
                // console.log(singleAspirant)

                const singleVoterData = singleVoter.data.singlevoter

                // console.log(singleAspData)

                // console.log(singAsp)

                setsingVoter(singleVoterData)

                

                setloading(false)



            }

            catch(err){

                // console.log(err)
                seterrmsg('Oops, refresh the page, something is wrong')
                setloading(false)
            }


        }

        fetchSingleVoter()


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

                name:votername,
                phoneNumber:contact,
            
            }

            const updateData = await axios.patch(`http://localhost:3007/api/admin/updatevoter/${id}`, updatedData)

            // console.log(updateData)

            sweetAlert.fire({

                title:'Voter Details updated Successfully',
                text:updateData.data.msg,
                icon:'success',
                
              })

            setloading(false)


        }

        catch(err){

            // console.log(err)
            seterrmsg('Oops, refresh the page, something is wrong')

            setloading(false)
        }



        closeUpdateModal();
      };

      const handleDeleteConfirm = async() => {
        // Perform delete logic here
        // ...

        try{

            const deleteVoter = await axios.delete(`http://localhost:3007/api/admin/deleteaspirants/${id}`)

            // console.log(deleteAsp)

            sweetAlert.fire({

                title:'Voter Deleted Successfully',
                text:deleteVoter.data.msg,
                icon:'success',
                
              })

            setloading(false)

            setTimeout(()=>{

                navigate('/dashboard')

            },2000)
              


        }

        catch(err){

            // console.log(err)
            seterrmsg('Oops, refresh the page, something is wrong')

            setloading(false)
            
        }



        closeDeleteModal();
      };


      const [count, setcount] = useState()

  
        useEffect(()=>{

            const fetchCount = async()=>{

            try{

                setloading(true)

                const countData = await axios.get(`http://localhost:3007/api/aspirant/allvoters/${id}`)
                console.log(countData)
                
                const voterCount = countData.data.count

                // console.log(aspCount)
                
                setcount(voterCount)
                
                setloading(false)
            }

            catch(err){

                // console.log(err)
                setloading(false)
            }


            }

            fetchCount()


        }, [])

        if(count == undefined){

            setcount(0)
        }


    
  return (


    <>


        <section className ='main-profile'>

            {singVoter?(
                
                <div className='profile-container'>


                            <div className ='updating-details'>

                                <h3>Aspirant Name:<span className='asp'>{singVoter.name}</span></h3>
                                <h3>Aspirant Position:<span className='asp'>{singVoter.phoneNumber}</span></h3>
                                <h3>Number of Voted for:{count}</h3>



                            </div>

                            <div className='crucial-btns'>

                                <button className="sign-in-btn" onClick={openUpdateModal}>Update Details</button>
                                <button className ='delete-btn' onClick={openDeleteModal}>Delete Aspirant</button>

                            </div>

                
                </div>

                ):(

                  <TbFidgetSpinner className='spinner-loader'/>

                )

                // {deleteAsp ? <p>User has already been deleted </p>}d 
            
            }



        </section>

        <UpdateModal
        isOpen={updateModalOpen}
        onClose={closeUpdateModal}
        onUpdate={handleUpdateSubmit}
        name={votername}
        name={contact}

        onChange={(e) => {
          const { name, value } = e.target;
          if (name === 'names') setvotername(value);
          if (name === 'contact') setcontact(value);
        }}

      />

      <DeleteModal isOpen={deleteModalOpen} onClose={closeDeleteModal} onDelete={handleDeleteConfirm} />
    


    
    
    
    </>


  )
}

export default SingleVoter






