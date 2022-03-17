import React from 'react';
import { useParams } from 'react-router-dom';

const Hello = () => {
    const { word } = useParams()
    return (
        <>
            {isNaN(word) && 
                <div>
                    <h1 style={{ textAlign: "center", color: "tomato" }}>The Text is: {word}</h1>
                </div> 
            }
        </>
    )
}

export default Hello

