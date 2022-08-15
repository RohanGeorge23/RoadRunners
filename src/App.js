import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Services from './components/Services'
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
        <Route path='contact' element={<Contact/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;