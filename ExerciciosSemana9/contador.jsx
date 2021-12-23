import { useState } from "react";

export default function Contador() {
    const [contador, setContador] = useState(0)

    console.log(setInterval(setContador((cont) => cont++), 1000))
    return (
        <div>{setInterval(setContador((cont) => cont++), 1000)}</div>
    )
}