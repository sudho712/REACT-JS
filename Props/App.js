import React from "react";
import person from "../Resuble components/person";

const App=()=>{
    return (
        <>
            <person name="suman" age="24" salary={1500}/>
            <person name="Spider" age="24" salary={1500}/>
            <person name="Super" age="24" salary={1500}/>
            {/* there is are props property  */}
        </>
    )
};

export default App;