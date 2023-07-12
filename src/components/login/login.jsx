import React, {useState, useEffect} from 'react'
import './login.css'
import {MdEmail} from 'react-icons/md'
import {Link, useNavigate} from 'react-router-dom'
import {RiLockPasswordFill} from 'react-icons/ri'
import sweetAlert from 'sweetalert2'


function Login() {

    const [username, setusername] = useState()
    const [pwd, setpwd] = useState()

    const handleUsername = ()=>{
        setusername('Ryan Wanjie')
    }

    const handlePwd = ()=>{

        setpwd('74hihb!')
    }

    const navigate = useNavigate()
    
    const HandleLogin = (e)=>{
        
        
        e.preventDefault()
        
        if(!username || !pwd){

            sweetAlert.fire({

                icon:'error',
                title:'oops...',
                text:'Please Enter all Details of the Submission form'
                
            })
            
            return
        }
        
        else{
            
            sweetAlert.fire({
                
                icon:'success',
                title:'Login Successful',
                text:'Details correct'
                
            })
            
    
            setTimeout(()=>{

                navigate('/dashboard')

            },2000)

            return

        }

    }



  return (


    <>


        <section className="login-part">


            <form className="login" onSubmit = {HandleLogin} >

                <h2 className="sign-in-h2">Sign-In to Sisi Voters Admin</h2>

                <div className="name">

                    <MdEmail/>

                     <input
                        type="text"
                        name ='text'
                        value ={username}
                        onChange={handleUsername}
                        placeholder="Enter your username"
                        required
                    />

                </div>

                <div className="name">  

                    <RiLockPasswordFill/>

                    <input
                    type="password"
                    name ='pwd'
                    value ={pwd}
                    onChange ={handlePwd}
                    placeholder=" Enter your Password"
                    required
                    />

                </div>

                <button className="sign-in-btn"> Submit</button>

               
                
            </form>


        </section>
    
    
    </>



  )
}

export default Login