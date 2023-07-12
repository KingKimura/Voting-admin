import React from 'react'
import './voters.css'
import {AiFillDelete,AiFillPrinter} from 'react-icons/ai'
import {TbFidgetSpinner} from 'react-icons/tb'
import {Link, useNavigate} from 'react-router-dom'




function voters() {



    


  return (



    <>


      <section className="voters-reports">

          <p className= 'voter-title'>The voters are:</p>


          <div className="table-container">

              <AiFillPrinter className='print' title ='print report'/>
            

              <table className="user-table">

                  <thead>

                      <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Contact</th>
                      </tr>

                  </thead>

                  <tbody>

              
                    <tr>

                      <td>1</td>
                      <td>Customer</td>
                      <td>938934</td>
                      

                      {/* <td><AiFillDelete/></td> */}
                    </tr>
                


                  </tbody>


              </table>


          </div>

      </section>


              
              
              
              
    </>


  )
}

export default voters