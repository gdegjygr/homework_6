import React, {useRef, useEffect} from "react"


export default function ExampleCurrent() {
    const inputRef = useRef(0)

    const incrementCount = () => {
      inputRef.current += 1
      console.log(`${inputRef.current}`);
    }

    return(
      <>
      <button onClick={incrementCount}>Get count</button>
      </>
    )
};







