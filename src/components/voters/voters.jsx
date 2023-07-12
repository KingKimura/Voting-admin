import React, {useState, useEffect} from 'react'
import './voters.css'
import {AiFillDelete,AiFillPrinter} from 'react-icons/ai'
import {TbFidgetSpinner} from 'react-icons/tb'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'



function Voters() {

  const [loading, setloading] = useState(false)
  const [errmsg, seterrmsg] = useState()
  const [voters, setvoters] = useState([])


  useEffect(()=>{

    const getAllVoters = async()=>{

      try{

        setloading(true)

        const Voters = await axios.get('http://localhost:3007/api/admin/allvoters')

        console.log(Voters)

        const realvoters = Voters.data.allvoters

        console.log(realvoters)

        setvoters(realvoters)


      }

      catch(err){

        console.log(err)
        seterrmsg('There was an error fetching the voters')
        setloading(false)
      }


    }


    getAllVoters()



  },[])



    


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

export default Voters