import React from 'react';
import { useParams } from 'react-router-dom';

const ColorfulText = (props) => {
    const {bgColor, textColor, value } = useParams()
    return (
        <>
            {isNaN(value) && 
                <div>
                    <h1 style={{ textAlign: "center", color: textColor, backgroundColor: bgColor }}>The Text is: {value}</h1>
                </div> 
            }
        </>
    )
}

export default ColorfulText