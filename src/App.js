import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Services from './components/Services'
import Galler from './components/Galler'
import BookNow from './components/BookNow'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='services' element={<Services/>} />
        <Route path='galler' element={<Galler/>} />
        <Route path='blogs' element={<Blogs/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='booknow' element={<BookNow/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;