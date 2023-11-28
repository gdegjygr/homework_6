import React, {useRef, useEffect} from "react";


export default function TwoHooks() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return(
        <>
            <input ref={inputRef} type="text"/>
        </>
    )
};







