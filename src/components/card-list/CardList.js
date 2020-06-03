import React from 'react'
import { Card } from '../card/Card'
import './cardlist.style.css'

export const CardList = (props) => {
    console.log(props)
    return (
        <div className='card-list'>
            {props.monsters.map(monster =>
                <Card key={monster.id} monster={monster} />)
            }
        </div>
    )
}
