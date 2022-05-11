import React from 'react';
import './Card.css';

const Card = (props) => {
    const cardStyles = "card " + props.className;

    return (
        <div className={cardStyles}>
            {props.children}
        </div>
    )
}

export default Card;