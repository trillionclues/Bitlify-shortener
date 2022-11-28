import React from 'react'
import { useShortenUrl } from 'react-shorten-url'

function Test() {
  const { loading, error, data } = useShortenUrl('http://example.com/this')
  console.log(data)
  console.log(loading)
  console.log(error)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Something went wrong</p>

  // return <h1>{data.link}</h1>
}

export default Test
