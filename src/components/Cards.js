import React from "react";
import Card from "./Card";

const Cards = ({units, onClick}) => {
    
    return (
        units.map( (u) => {
            return(
                <Card name={u} onClick={onClick} />
            )
        })
    )
}

export default Cards