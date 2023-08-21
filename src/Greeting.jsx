
export function Greeting(props) {
    const person = {
        name: "Jose"
    };

    return (
      <>
        <h1>{person.name}</h1>
        <h1>{props.title}</h1>
      </>
    )
}

export function LasName({name, car}) {
    const person = {
        LasName: "Diaz"
    };

    return (
        <h1>{name}, {car}</h1>
    )
}

