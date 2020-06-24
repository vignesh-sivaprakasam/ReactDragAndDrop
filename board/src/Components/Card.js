import React from 'react';

function Card(props) {
        const card = props.card;
        return (
                <div style={{
                        minHeight:50,
                        border: '1px solid'
                }}>
                        {card.content}
                </div>
        )
}

export default Card;
