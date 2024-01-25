import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import View from '../View/View'
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
      <Route 
        exact path='/'
        render={() => 
          <Home notices={notices} />
        }
      />
      <Route 
        path='/:id'
        render={({ match }) => {
          const id = parseInt(match.params.id)
          return (
          <View 
            id={id}
            notices={notices}
          />
        )}}
      />
    </main>
  )
}

export default App
