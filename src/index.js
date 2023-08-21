import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, LasName } from "./Greeting";
import Button from "./Button";

const root = ReactDOM.createRoot(document.getElementById('root'))

const  handleChange = (e) =>{
    console.log(e.target.value)
}
root.render(
    <>
        <Greeting title="Parametro 1" />
        <LasName name="Lora" car="Mazda"/>
        <Button text="BACK"/>
        <Button text="OK"/>
        <input id="hola" onChange={handleChange}/>
    </>
)