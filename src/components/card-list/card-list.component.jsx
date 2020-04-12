import React from 'react';
import { Card } from '../card/card.component';  
import './card-list.styles.css';

export const CardList = props => (
    <div className="card-list"> 
    {props.monsters.map(monster => ( //This will be as props for card.component
        <Card key={monster.id} monster={monster} />
    ))}
    </div>
);  