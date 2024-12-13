import React from 'react'

const App=()=>
{
    const products=[
        {
            id:1,title:"dog",price:8500
        },

        {
            id:2,title:"dog",price:8500
        },

        {
            id:3,title:"dog",price:8500
        }
    ]
    return (
        {
            products.map((data)=>(
                <div key={data.id}>
                    <h1>{data.title}</h1>
                    <p>{data.price}</p>
                </div>
            ))
        }        

    )
}

export default App;
