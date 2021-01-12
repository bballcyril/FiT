import React, {useState} from 'react'
import Set from './Set'

const handleKeyPress = (event) =>{
    if(event.key=='Enter'){
        event.preventDefault();
    }
}
const Exercise = (props) => {
    
    let [sets, setSets] = useState([{name: '1'},{name: '2'}])
    return (
        <div className = 'container'>
            <h1 contentEditable='true' onKeyDown = {handleKeyPress}>{props.name}</h1>
            <ul>
               {sets.map((currentSet)=>{
                   return <Set name = {currentSet.name}/>
               })}

            </ul>
            <button onClick= {() => setSets([...sets,{name:'2'}])}>Add Set</button>
        </div>
    )
}

export default Exercise
