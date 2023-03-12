import React, {useEffect, useState} from 'react'

const Footer = () => {
    const [timeStamp, setTimeStamp] = useState(
        Math.floor(Date.now() / 1000)
    )
    
    useEffect(() => {
      const interval = setInterval(()=>{
        setTimeStamp(Math.floor(Date.now()/1000))
      }, 1000)
    
      return () => {
        clearInterval(interval)
      }
    }, [])
  return (
    <div className='footer'>
        <button className="footer--btn">
            {timeStamp}
        </button>
        <p className="footer--text">
            Unix TimeStamp
        </p>
    </div>
  )
}

export default Footer
