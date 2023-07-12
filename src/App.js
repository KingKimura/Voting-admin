import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogPages from '../src/pages/login/login'
import DashboardPages from '../src/pages/dashboard/dash'
import VoterPages from '../src/pages/voters/voters'
import Aspirantpages from '../src/pages/aspirants/asp'
import singleAspPages from '../src/pages/singleAspirant/singleAsp'


function App() {


  return (


    <>

      <BrowserRouter>

        <Routes>


          <Route path="/" element={<LogPages/>} />
          <Route path ='/dashboard' element ={<DashboardPages/>}/>
          <Route path ='/voters' element={<VoterPages/>} />
          <Route path ='/aspirants' element={<Aspirantpages/>} />
          <Route path ='/aspirants/:id' element ={<singleAspPages/>}/>




        </Routes>


      </BrowserRouter>

    
    
    </>



  )
}

export default App