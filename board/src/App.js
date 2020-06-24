import React, {useState} from 'react';
import  { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Stack from './Components/Stack';

const itemsFromBackEnd = [
  	{id : 'card1',content : "First Card"},
  	{id:  'card2',content : "Second Card"}
]

const columnsFromBackEnd = 
  	{
    		1 : {
      			name : "To do",
      			items : itemsFromBackEnd
    		}
  	}

const onDropEnd = (result) => {
	console.log("result  : ", result);
}

function App() {

	const [columns, setColumns] = useState(columnsFromBackEnd);
	let stacks = Object.entries(columns).map((entry)=>{
		let [stackID, stack] = entry;
		console.log(stackID, "stack :  ", stack);
		return <Stack key={stackID} id={stackID} stack={stack}/>
	});
	console.log("columns : ", columns);
	return (
		<div style={{ display:'flex', justifyContent:'center', height:'100%'}}>
			<DragDropContext onDropEnd={onDropEnd}>
				{stacks}
			</DragDropContext>
		</div>
	);
}

export default App;
