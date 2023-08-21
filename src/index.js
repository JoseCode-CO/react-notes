import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))


function Greeting() {
    const person = {
        name: "Jose"
    };

    return (
        <h1>{person.name}</h1>
    )
}


root.render(
    <Greeting />
)