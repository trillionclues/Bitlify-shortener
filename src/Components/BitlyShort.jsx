import React, { useState } from 'react'

function BitlyShort({ setInputValue }) {
  const [value, setValue] = useState('')

  const handleClick = () => {
    setInputValue((arr) => [...arr, value])
    setValue([])
  }

  return (
    <div className='inputShortner section__margin'>
      <h1>
        Bitlify url <span>shortener</span>
      </h1>
      <p>Shorten any URL's, for your work, personal use, anything...</p>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type='text'
          placeholder='Enter your link here'
        />
        <button onClick={handleClick}>Shorten </button>
      </div>
    </div>
  )
}

export default BitlyShort
