import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogPages from '../src/pages/login/login'




function App() {


  return (


    <>

      <BrowserRouter>

        <Routes>


          <Route path="/" element={<LogPages/>} />

          

        </Routes>


      </BrowserRouter>

    
    
    </>



  )
}

export default App