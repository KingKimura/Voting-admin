import React, {useState, useEffect} from 'react'
import './asp.css'
import {AiFillDelete,AiFillPrinter} from 'react-icons/ai'
import {TbFidgetSpinner} from 'react-icons/tb'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'



function Aspirant() {

  const [loading, setloading] = useState(false)
  const [errmsg, seterrmsg] = useState()
  const [Asps, setAsps] = useState([])


  useEffect(()=>{

    const getAllAspirants = async()=>{

      try{

        setloading(true)

        const Aspirants = await axios.get('http://localhost:3007/api/admin/allaspirants')

        // console.log(Aspirants)

        const realAspirants = Aspirants.data.allaspirants

        // console.log(realAspirants)

        setAsps(realAspirants)

        // console.log(Asps)

        setloading(false)


      }

      catch(err){

        // console.log(err)
        seterrmsg('There was an error fetching the voters')
        setloading(false)
      }


    }


    getAllAspirants()



  },[])

  //DOWNLOADING REPORT  

  const handlePrint = () => {

    // Create the report content
    const reportContent = Asps
      .map((allasps, index) => `${index + 1}. ${allasps.name}. ${allasps.email}.${allasps.phoneNumber}. ${allasps.Position}. ${allasps.Represent}`)
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
    const fileName = 'Admin_Aspirants_report.txt';
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

          <p className= 'voter-title'>The Aspirants are:</p>


          <div className="table-container">

              <AiFillPrinter className='print' title ='print report' onClick ={handlePrint}/>
            

              {loading?  <TbFidgetSpinner className ='spinner-loader'/> :(
                
                <table className="user-table">

                  <thead>

                      <tr>
                          <th>No.</th>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Contact</th>
                          <th>Position</th>
                          <th>Represent</th>
                      </tr>

                  </thead>

                  
                    
                  {Asps ? Asps.map((allasps, index)=>(

                    
                      <tbody key ={allasps._id}>

                  
                        <tr>

                          <td>{index +1}</td>
                          <td><img src={allasps.image} className ='img' alt={allasps.name}/></td>
                          <Link to ={{ pathname: `/aspirants/${allasps._id}`  }} className ='linkto'><td>{allasps.name}</td></Link>
                          <td>{allasps.email}</td>
                          <td>{allasps.phoneNumber}</td>
                          <td>{allasps.Position}</td>
                          <td>{allasps.Represent}</td>
                          

                          {/* <td><AiFillDelete/></td> */}
                        </tr>
                    


                      </tbody>
                  
                

                    )):(

                      <p>There are no Voters To Fetch</p>

                    )
                  
                  }
                  
                  


              </table>
              
              )}

              {errmsg && <p className ='error'>{errmsg}</p>}

          </div>

      </section>


              
              
              
              
    </>


  )
}

export default Aspirant