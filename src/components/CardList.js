import React from 'react'
import Card from './Card'
// import { robots } from '../robots'

const CardList = (props) => {
    // if(true){
    //     throw new Error('Nooooo')
    // }
    const cardArray = props.robots.map((robot, i) => {
        return <Card key={i}
            id={props.robots[i].id}
            name={props.robots[i].name}
            email={props.robots[i].email} />
    })
    return (
        <div>
        {cardArray}
        </div>
    )
}

export default CardList