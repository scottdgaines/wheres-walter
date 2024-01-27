import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import View from '../View/View'
import { data } from '../../data' //essentially my utility file where a fetch would have happened
import { Notice } from '../../interfaces'

const App = () => {
  const [notices, setNotices] = React.useState<Notice[]>([])

  const loadData = () => {
    //fetch from utility file
    setNotices(data)
  }

  React.useEffect(() => {
    loadData()
  }, [data])

  return (
    <main>
        <Nav />
      <Routes>
        <Route path='/' element={<Home notices={notices} />} />
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
       </Routes>
    </main>
  )
}

export default App
