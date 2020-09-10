import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Die from './Die'
import { makeDie } from '../lib'
import './RandomDice.css'

const RandomDice = (props) => {

    let [dice, setDice] = useState([])
    let [sides, setSides] = useState(2)

    const addDieOnClickHandler = (event) => {

        event.preventDefault()

        let copyDice = [...dice]

        copyDice.push(makeDie(sides))

        setDice(copyDice)
    }

    const sidesOnChangeHandler = (event) => {

        event.preventDefault()  
        setSides(event.target.value)

    }

    return (
        <div>
            <h1>Dice Roller</h1>
            <h4>Add a New Die</h4>
            <InputGroup className="mb-3 makeDieField">
                <FormControl
                    placeholder="number of sides on dice"
                    aria-label="number of sides on dice"
                    aria-describedby="basic-addon2"
                    onChange={sidesOnChangeHandler}
                    value={sides}
                />
                <InputGroup.Append>
                <Button variant="info" onClick={addDieOnClickHandler}>Add</Button>
                </InputGroup.Append>
            </InputGroup>
            <br></br>
            {
                dice.map((die, index) => {
                    return (
                        <Die keu={index} sides={die.sides}></Die>
                    )
                })
            }
        </div>
    );
}

export default RandomDice;