import React from 'react'
import { BrowserRouter as Router , Routes  , Route } from 'react-router-dom'
import From from '../pages/From'
import Table from '../pages/Table'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<From />} />
          <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  )
}

export default App
