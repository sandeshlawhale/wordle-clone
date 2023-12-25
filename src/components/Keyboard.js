import { useEffect, useState } from "react"


export default function Keyboard({ usedKey }) {
  const [letter, setLetter] =useState(null)

    useEffect(() => {
        fetch('http://localhost:3001/letter')
        .then((res) => res.json())
        .then(json => setLetter(json))
    },[])

    return (
        <div className="keypad">
            {letter && letter.map((l) => {
                const color = usedKey[l.key]

                return (
                    <div key={l.key} className={color}>{ l.key }</div>
                )
            })}
        </div>
    )
}