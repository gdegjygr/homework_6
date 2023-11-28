import React, {useState, useEffect} from "react";


export default function UseEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `We have ${count} currents`
    }, [])

    return(
        <>
        <p>You must clicked {count} currents</p>
        <button onClick={() => setCount(count + 1)}>+ count</button>
        </>
    )
}; 

