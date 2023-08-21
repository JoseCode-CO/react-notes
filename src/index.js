import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, LasName } from "./Greeting";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <Greeting />
        <LasName />
    </>
)