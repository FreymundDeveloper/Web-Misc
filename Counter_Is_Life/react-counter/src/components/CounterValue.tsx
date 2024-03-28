import React from "react";

interface CounterValueProps {
    counter: number
}

export default (props: CounterValueProps) => {
    return (
        <p>{props.counter}</p>
    )
}