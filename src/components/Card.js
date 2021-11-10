import React from "react";

const Card = ({name}) => {

    return (
        <div className='card' id={name}>
            <img src={`portraits/${name}.jpg`}></img>
            <h2>{name}</h2>
        </div>
    )

}

export default Card