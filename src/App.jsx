import React, { useState } from 'react'
import BgAnimate from './Components/BgAnimate'
import BitlyShort from './Components/BitlyShort'
import LinkResult from './Components/LinkResult'
import Test from './Components/Test'

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className='container'>
      <BitlyShort setInputValue={setInputValue} />
      <BgAnimate />
      <LinkResult inputValue={inputValue} />
      {/* <Test /> */}
    </div>
  )
}

export default App
