import React from 'react'
import Slider from '../Slider'
import Feedy from './Feedy'
import Suggestion from '../Suggestion'


function App() {
  return (
    <div className='d-flex vh-100'>
      <div className='w-25'><Slider/></div>
      <div><Feedy/></div>
      <div><Suggestion/></div>
      
    </div>
  )
}

export default App