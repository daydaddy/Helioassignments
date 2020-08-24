class Animal {
    constructor() {
       
        return this
    }
    speak() {
        console.log(this._sound)
        return undefined 
    }

    sayName() {
        console.log(this._name)
    }
}

class Dog extends Animal {
    constructor(name, sound) {
        super()
        this._name = name
        this._sound = sound
    }
    get name() {
        return this._name
    }
    set name(newValue) {
        this._name=newValue
    }
}
let dog=new Dog("fido","woof")
console.log(dog)

dog.speak()
dog.name='taco'
console.log(dog.name)

