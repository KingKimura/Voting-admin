import React, {useState, useEffect} from 'react'
import './singleAsp.css'
import {BsFillPersonFill, BsFillImageFill} from 'react-icons/bs'
import {Link, useNavigate, useParams} from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import {Image} from 'cloudinary-react'
import sweetAlert from 'sweetalert2'
import {TbFidgetSpinner} from 'react-icons/tb'



function SingleAsp() {

    const navigate = useNavigate()

    

    const [loading, setloading] = useState(false)
    const [errmsg, seterrmsg] = useState('')
    const [image, setimage] = useState('')
    const [name, setname] = useState('')

    
  return (


    <>


        <section className ='main-profile'>

            <div className='profile-container'>

                <div className="profile-pic">

                    {/* <img src= {aspsimg} className ='prof-pic-user' alt ='profile'/> */}

                    {/* <Image cloudName ='https://api.cloudinary.com/v1_1/djgk2k4sw/image/upload' publicId ={imageString} className ='prof-pic-user' alt ='profile'/> */}


                </div> 

                <div className ='updating-details'>

                    <h3>Aspirant Name:</h3>
                    <h3>Aspirant Position:</h3>
                    <h3>Aspirant Represenation:</h3>



                </div>

                <div className='crucial-btns'>

                    <button className="sign-in-btn" >Update Details</button>
                    <button className ='delete-btn'>Delete Aspirant</button>

                </div>

                 

                



            </div>



        </section>



    
    
    
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
 
