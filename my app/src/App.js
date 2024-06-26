import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
import NavBar from './components/NavBar'



const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
       <NavBar/>
        <Routes>
          <Route path='/' element ={<Dashboard/>}/>
          <Route path='/ticket' element ={<TicketPage/>}/>
          <Route path='/ticket/:id' element ={<TicketPage editMde={true}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
