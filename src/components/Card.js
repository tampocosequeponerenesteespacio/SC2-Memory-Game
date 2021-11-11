import React from "react";

const Card = ({name, onClick}) => {

    return (
        <div className='card' id={name} onClick={ () => onClick(name) }>
            <img src={`portraits/${name}.jpg`} alt={name}></img>
            <h2>{name.toUpperCase()}</h2>
        </div>
    )

}

export default Card