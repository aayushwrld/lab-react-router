import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Contact from '../Contact'
import About from '../About'
import PageNotFound from '../PageNotFound'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
  )
}

export default AllRoutes