import React from 'react'
import Browse from '../Browse/Browse'

const App = () => {
  return (
    <div>
      <Browse lostNotices={true} />
      <Browse foundNotices={true} />
    </div>
  )
}

export default App
