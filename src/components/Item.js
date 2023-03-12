import React, {useState, useEffect} from 'react'

const Item = ({url, saveData}) => {
    const [data, setData] = useState(null)
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [startSaveTime, setStartSaveTime] = useState(null)
    const [endSaveTime, setEndSaveTime] = useState(null)

    useEffect(() => { 
        const timeOutId = setTimeout(()=>{
            fetchData()
        }, 5000)

        return () => {
            clearTimeout(timeOutId)
        }
    }, [])

    const handleClick = () => {
        fetchData()
    }

    const fetchData = () => {
        // Fetching the data 
        setStartTime(Math.floor(Date.now()/1000))
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setEndTime(Math.floor(Date.now()/1000))
                // Saving the data in local Storage
                setStartSaveTime(Math.floor(Date.now()/1000))
                localStorage.setItem(saveData, JSON.stringify(data))
                setEndSaveTime(Math.floor(Date.now()/1000))
            })
            .catch(err => console.error(err))
    }

    if(!data){
        return <div className='item'>Loading...</div>
    }
    
    return (
        <div className="item">
            <p>Start: {startTime}</p>
            <p>End: {endTime}</p>
            <p>Start Save: {startSaveTime}</p>
            <p>End Save: {endSaveTime}</p>
            <button className="item--btn" onClick={handleClick}>
                Fetch
            </button>
        </div>
    )
}

export default Item
