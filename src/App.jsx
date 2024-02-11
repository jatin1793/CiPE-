import React from 'react'
import Form from '../src/components/Form'
import Page from '../src/components/Page'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Page />}></Route>
        <Route path='/form' element={<Form />}></Route>
      </Routes>
  )
}

export default App