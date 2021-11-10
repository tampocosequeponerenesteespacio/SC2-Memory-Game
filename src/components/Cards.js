import React from "react";
import Card from "./Card";

const Cards = ({units}) => {
    return (
        units.map( (u) => {
            return(
                <Card name={u} />
            )
        })
    )
}

export default Cards