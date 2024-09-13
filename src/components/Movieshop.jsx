import React from 'react'
import Header from './Header.jsx'
import Banner from './Banner.jsx'
import Movielist from './Movielist.jsx'


const Movieshop = () => {
  return (
    <div className='movie-shop'>
        <Header/>
        <Banner/>
        <Movielist/>
    </div>
  )
}

export default Movieshop
