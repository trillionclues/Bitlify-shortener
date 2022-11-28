import React from 'react'
import { useShortenUrl } from 'react-shorten-url'
import shortener from 'shortmyurl'

function Test() {
  async function shortenUrl() {
    const shortenedUrl = await shortener('https://www.google.com')
  }

  shortenUrl()
  return <h1> {shortenedUrl} </h1>
}

export default Test
