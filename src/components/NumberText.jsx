import React from 'react'
import { useParams } from 'react-router-dom'

const NumberText = () => {
    const { value } = useParams()
    return (
        <>
            {isNaN(value) ?
                <div>
                    <h1 style={{ textAlign: "center", color: "midnightblue" }}>The word is: {value}</h1>
                </div> :
                <h1 style={{ textAlign: "center", color: "firebrick" }}>The number is: {value}</h1>
            }
        </>
    )
}

export default NumberText