import React, {useState, useEffect} from 'react'
import './login.css'
import {MdEmail} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {RiLockPasswordFill} from 'react-icons/ri'


function Login() {

    const [email, setemail] = useState()
    const [pwd, setpwd] = useState()

    const handleEmail = ()=>{
        setemail('ryanwanjiedistortion@gmail.com')
    }

    const handlePwd = ()=>{

        setpwd('74hihb!')
    }

    const handleLogin = ()=>{

        
    }



  return (


    <>


        <section className="login-part">


            <form className="login" >

                <h2 className="sign-in-h2">Sign-In to Sisi Voters Admin</h2>

                <div className="name">

                    <MdEmail/>

                     <input
                        type="email"
                        name ='email'
                        value ={email}
                        onChange={handleEmail}
                        placeholder="Enter your email"
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

                <Link to ='/dashboard'><button className="sign-in-btn"> Submit</button></Link>

               
                
            </form>


        </section>
    
    
    </>



  )
}

export default Login