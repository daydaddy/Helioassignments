import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { randomNumber } from '../lib'

const Die = (props) => {

    let [roll, setRoll] = useState(0)

    const rollDie = () => {
        setRoll(randomNumber(1, props.sides))
    }

    const rollOnClickHandler = (event) => {
        rollDie()
    }

    React.useEffect(rollDie, [])

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{`${props.sides} Sided Die`}</Card.Title>
                    <Card.Text>
                        {`${roll}`}
                    </Card.Text>
                    <Button variant="primary" onClick={rollOnClickHandler}>Roll</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Die;