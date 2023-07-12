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

        // console.log(Voters)

        const realvoters = Voters.data.allvoters

        // console.log(realvoters)

        setvoters(realvoters)

        console.log(voters)

        setloading(false)


      }

      catch(err){

        console.log(err)
        seterrmsg('There was an error fetching the voters')
        setloading(false)
      }


    }


    getAllVoters()



  },[])

  //DOWNLOADING REPORT  

  const handlePrint = () => {

    // Create the report content
    const reportContent = voters
      .map((allvoters, index) => `${index + 1}. ${allvoters.name}. ${allvoters.phoneNumber}`)
      .join('\n');

    // Create a temporary element to hold the report content
    const tempElement = document.createElement('textarea');
    tempElement.value = reportContent;

    // Append the temporary element to the document body
    document.body.appendChild(tempElement);

    // Select the content of the temporary element
    tempElement.select();
    tempElement.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected content to the clipboard
    document.execCommand('copy');

    // Remove the temporary element
    document.body.removeChild(tempElement);

    // Trigger the download of the report
    const fileName = 'Admin_voters_report.txt';
    const data = new Blob([reportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(data);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();

    // Release the URL object
    window.URL.revokeObjectURL(url);

  };





    


  return (



    <>


      <section className="voters-reports">

          <p className= 'voter-title'>The voters are:</p>


          <div className="table-container">

              <AiFillPrinter className='print' title ='print report' onClick ={handlePrint}/>
            

              {loading?  <TbFidgetSpinner className ='spinner-loader'/> :(
                
                <table className="user-table">

                  <thead>

                      <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Contact</th>
                      </tr>

                  </thead>

                  
                    
                  {voters ? voters.map((vote, index)=>(

                    
                      <tbody key ={vote._id}>

                  
                        <tr>

                          <td>{index +1}</td>
                          <Link to ={{ pathname: `/voter/${vote._id}`  }} className ='linkto'><td>{vote.name}</td></Link>
                          <td>{vote.phoneNumber}</td>
                          

                          {/* <td><AiFillDelete/></td> */}
                        </tr>
                    


                      </tbody>
                  
                

                    )):(

                      <p>There are no Voters To Fetch</p>

                    )
                  
                  }
                  
                  


              </table>
              
              )}

              {/* {errmsg && <p className ='error'>{errmsg}</p>} */}

          </div>

      </section>


              
              
              
              
    </>


  )
}

export default Voters