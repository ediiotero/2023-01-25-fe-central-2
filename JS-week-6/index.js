// Write a class called Temperature that will take fahrenheit as a property, this will be a number
// the number should be between 212 and -459.67
// Temperature should have 2 methods one for converting fahrenheit to celsius-> ((this.fahrenheit - 32)*5)/9
// and another to convert celsius to kelvin->   celsius + 273.15
// create a new object with this class


class Temperature {
    constructor(fahrenheit) {
        if(fahrenheit <= 212 && fahrenheit >= -459.67) {
            this.fahrenheit = fahrenheit
        } else {
            console.error(`${fahrenheit} is not a valid fahrenheit temperature`)
        }
    }

    celsius() {
        const fahrenheitToC = ((this.fahrenheit - 32)*5)/9
        return fahrenheitToC
    }

    kelvin() {
        const celsius = this.celsius()
        return celsius + 273.15
    }
}

const temp = new Temperature(100)

console.log(temp)
console.log(temp.celsius().toFixed(2))
console.log(temp.kelvin().toFixed(2))