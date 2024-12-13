import React from 'react'
const App= ()=>{
    const handleClick=(e)=>{
        alert ("button is clicked ");
    }

    return (
        <button onClick={handleClick(10)}>
            Click Me
        </button>
    )
}

export default App
