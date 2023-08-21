import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, LasName } from "./Greeting";
import Button from "./Button";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <Greeting title="Parametro 1" />
        <LasName name="Lora" car="Mazda"/>
        <Button text="BACK"/>
        <Button text="OK"/>
    </>
)