import React from 'react';
import {Droppable} from 'react-beautiful-dnd';

import Card from './Card';

function Stack(props){
        const stack = props.stack;

        const cards = stack.items.map(card => {
                console.log(" cardd : ",card);
                return (
                        <Card key={card.id} card={card}/>
                );
        });
        return (
                <div style={{ display:'flex',  flexDirection:'column', height:'100%', width:'300px', backgroundColor: '#f5f5f5'}}>
                        <header>{stack.name}</header>
                                <Droppable droppableId = {props.id}>
                                        {
                                                (provided, snapshot) =>{
                                                        return (
                                                        <main 
                                                                {...provided.droppableProps}
                                                                ref={provided.innerRef}
                                                                style={{
                                                                        flex:1,
                                                                        background : snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                                                        padding: 4
                                                                }}
                                                        >
                                                        {cards}
                                                        </main>
                                                        );

                                                }
                                        }
                                </Droppable>
                        <footer> Create Card</footer>
                </div>
        );
}

export default Stack;