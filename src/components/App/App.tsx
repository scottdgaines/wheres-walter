import React, { useState }from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import View from '../View/View'
import Form from '../Form/Form'
import Preview from '../Preview/Preview'
import { preview } from '../../preview'
import { data } from '../../data' //essentially my utility file where a fetch would have happened
import { Notice } from '../../interfaces'


const App = () => {
  const [notices, setNotices] = useState<Notice[]>([])

  const loadData = () => {
    setNotices(data) //fetch from utility file
  }

  React.useEffect(() => {
    loadData()
  }, [data])

  return (
    <main>
      <Nav />
      <Routes>
        <Route path='/' element={<Home notices={notices} />} />
        <Route path='/:id' element={<View notices={notices} />} />
        <Route path='/form' element={<Form />} />
        <Route path='/preview/:id' element={<Preview />} />
      </Routes>
    </main>
  )
}

export default App
