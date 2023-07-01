import React from 'react'
import './login.css'
import {MdEmail} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {RiLockPasswordFill} from 'react-icons/ri'


function Login() {



  return (


    <>


        <section className="login-part">


            <form className="login" >

                <h2 className="sign-in-h2">Sign-In to Sisi Voters Admin</h2>

                <div className="name">

                    <MdEmail/>

                     <input
                        type="email"
                        placeholder="Enter your email"
                        required
                    />

                </div>

                <div className="name">  

                    <RiLockPasswordFill/>

                    <input
                    type="password"
                    placeholder=" Enter your Password"
                    required
                    />

                </div>

                <Link to ='/dashboard'><button className="sign-in-btn"> Submit</button></Link>

               
                
            </form>


        </section>
    
    
    </>



  )
}

export default Login