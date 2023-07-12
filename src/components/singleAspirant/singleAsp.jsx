import React, {useState, useEffect} from 'react'
import './singleAsp.css'
import {BsFillPersonFill, BsFillImageFill} from 'react-icons/bs'
import {Link, useNavigate} from 'react-router-dom'
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

                 

                <form className="updating-details" >

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


                            
                            <button type="submit" className="btn-reg" > Submit</button> 
                            
                        {/* // )} */}
                    
                     </div>



                </form>

               



            </div>



        </section>



    
    
    
    </>


  )
}

export default SingleAsp