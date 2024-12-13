import React from 'react'
const App= ()=>{
    const handleClick=()=>{
        alert ("button is clicked ");
    }

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    )
}

export default App
