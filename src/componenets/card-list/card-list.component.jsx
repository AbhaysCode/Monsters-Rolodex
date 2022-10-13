import React from 'react';

import './card-list.styles.css';
import {Card} from '../card/card.component.jsx';

export const CardList = props=>(
    <div className='card-list'>{
    props.monster.map(monster => (
    <Card monster={monster} key={monster.id}/>
))
}</div>
);
