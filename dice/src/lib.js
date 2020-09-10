// factory function to make a die
const makeDie = (sides) => {
    return {
        sides
    }
}

// random integer
function randomNumber(min, max) {
    return Math.floor (Math.random() * max) + min;
}

export {makeDie, randomNumber}