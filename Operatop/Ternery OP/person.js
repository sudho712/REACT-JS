import React from 'react'

const person = ()=>
{
    const age =20;
    return (
        <>
            <div>
                <h1>
                    {age>18?
                    (
                        <>
                            <div>
                                you are eligible
                            </div>
                        </>
                        <div>
                            you aree not eligible for driving
                        </div>
                    )};    
                </h1>                
            </div>
        </>
    )
}

export default person
