import React from 'react'
import './product.css'

const product = () =>{
    const obj={
        title:"phone",
        price:1500,
        camera:"16mp"
    }
    return (
        <>
            <div className='product-style'>
                <h1 title={obj.title}></h1>
                <h1 title={obj.title}></h1>
                <h1 title={obj.title}></h1>
            </div>
        </>
    )
}
export default product
