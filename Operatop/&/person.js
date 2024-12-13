import React from 'react'


    const person =()=>{
        const PANCard=true;
        const mailId=false;

    }
    return (
        <>
            {
                (PANCard)&& <h1>you can open Bank Account </h1>
            }
            {
                (mailId)&& <h1> You can make youtube Account</h1>
            }
        </>
    )

export default person
