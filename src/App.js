import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogPages from '../src/pages/login/login'
import DashboardPages from '../src/pages/dashboard/dash'
import VoterPages from '../src/pages/voters/voters'


function App() {


  return (


    <>

      <BrowserRouter>

        <Routes>


          <Route path="/" element={<LogPages/>} />
          <Route path ='/dashboard' element ={<DashboardPages/>}/>
          <Route path ='/voters' element={<VoterPages/>} />



        </Routes>


      </BrowserRouter>

    
    
    </>



  )
}

export default App