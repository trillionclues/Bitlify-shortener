import React, { useEffect, useState } from 'react'
import { FaRegCopy } from 'react-icons/fa'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useShortenUrl } from 'react-shorten-url'
import axios from 'axios'

function LinkResult({ inputValue }) {
  const [shortLink, setShortLink] = useState([])
  const [copied, setCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  // shorten link input
  const fetchInput = async () => {
    try {
      setIsLoading(true)
      const resp = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      )
      setShortLink([...shortLink, resp.data.result.full_short_link])
    } catch (err) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (inputValue.length) {
      fetchInput()
      // setShortLink([...shortLink])
    }
  }, [inputValue])

  // manage state change on code copy
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [copied])

  // check if IsLoading
  if (isLoading) {
    return <p className='loadingData'>Loading...</p>
  }
  // check if error
  if (error) {
    return <p className='noData'> Something went wrong :( </p>
  }

  return (
    <>
      {shortLink && (
        <div className='linkresult '>
          <p>Previous links</p>
          <div className='previousLinks'>
            <div>
              {inputValue.map((input) => (
                <h4>{input}</h4>
              ))}
              {/* {inputValue && inputValue} */}
            </div>
            <div className='shortlink'>
              <div>
                {shortLink.map((link, index) => (
                  <div className='rowResult'>
                    <CopyToClipboard text={link} onCopy={() => setCopied(true)}>
                      <p className={copied ? 'copied' : ''}>{link}</p>
                    </CopyToClipboard>

                    {/* <div>
                      <CopyToClipboard
                        text={link}
                        onCopy={() => setCopied(true)}
                      >
                        <button className={copied ? 'copied' : ''}>
                          <FaRegCopy size='20px' color='white' />
                        </button>
                      </CopyToClipboard>
                    </div> */}
                  </div>
                ))}
              </div>

              {/* <CopyToClipboard text={shortLink} onCopy={() => setCopied(true)}>
                <button className={copied ? 'copied' : ''}>
                  <FaRegCopy size='20px' color='white' />
                </button>
              </CopyToClipboard> */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LinkResult
