import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import { data } from '../../data' //essentially my utility file where a fetch would have happened
import { Notice } from '../../interfaces'

const App = () => {
  const [notices, setNotices] = useState<Notice[]>([])

  const loadData = () => {
    //fetch from utility file
    setNotices(data)
  }

  useEffect(() => {
    loadData()
  }, [data])

  return (
    <main>
      <Nav />
      <Route exact path='/'>
        <Home notices={notices} />
      </Route>
    </main>
  )
}

export default App
