import React from 'react'
import './dash.css'
import {Link} from 'react-router-dom'


function dash() {


  return (


    <>


<section className ='dashboard'>

<div className ='dashboard__container'>


    <div className="orders">

        <h3 className='orders-title'>Voters</h3>

        <Link to='/voters'><div className="lm"><button className="next-page">Know Them</button></div></Link>



    </div>


    <div className="reports">

        <h3 className='orders-title'>Aspirants</h3>

        <Link to ='/aspirants'><div className="lm"><button className="next-page">Know Them</button></div></Link>


    </div>

</div>



</section>
    
    
    
    
    </>


  )
}

export default dash