import React from 'react'
import './voters.css'
import {AiFillDelete} from 'react-icons/ai'


function voters() {



    const users = [
        {
          firstName: "John",
          lastName: "Doe",
          id: "123456",
          county: "Sample County",
          subCounty: "Sample Sub-County",
        },
        {
          firstName: "John",
          lastName: "Doe",
          id: "123456",
          county: "Sample County",
          subCounty: "Sample Sub-County",
        }
      ];


  return (



    <>


<section className="voters-reports">



<div className="table-container">
    <table className="user-table">
        <thead>
        <tr>
            <th>#</th>
            {/* <th>Title</th> */}
            <th>First Name</th>
            {/* <th>Last Name</th> */}
            <th>Email</th>
            <th>Votes</th>
            {/* <th>Sub-County</th> */}
        </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
            <tr key={index}>
            <td>{index + 1}</td>
            <td>Customer</td>
            <td>{user.firstName}</td>
            {/* <td>{user.lastName}</td> */}
            <td>{user.id}</td>
            <td>{user.county}</td>
            {/* <td>{user.subCounty}</td> */}

            <td><AiFillDelete/></td>
            </tr>
        ))}
        </tbody>
    </table>
</div>

</section>


    
    
    
    
    </>


  )
}

export default voters