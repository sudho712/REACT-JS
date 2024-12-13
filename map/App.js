import React from 'react'

const App=()=>{
    const items=['apple','banana','cheery'];

    return (
        <ul>
            {
            items.map(item,index)=(
                <li key={index}></li>
            )
                
        }
        </ul>
    )
}

export default App
