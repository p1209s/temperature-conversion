let inputCelsius = document.getElementById("exampleFormControlInput1")
let inputFahrenheit = document.getElementById("exampleFormControlInput3")
let celsius = document.getElementById("celsius")
let fahrenheit = document.getElementById("fahrenheit")

fahrenheit.style.display = "none"

function Celsius() {
    fahrenheit.style.display = "none"
    celsius.style.display = "inline-block"
}

function Fahrenheit() {
    celsius.style.display = "none"
    fahrenheit.style.display = "inline-block"
}

function convertCelsius() {
    let celsiusValue = Number(inputCelsius.value)
    let fahrenheitResult = (celsiusValue * 1.8) + 32
    let outputFahrenheit = document.getElementById("exampleFormControlTextarea1")
    outputFahrenheit.innerHTML = fahrenheitResult
}

function convertFahrenheit() {
    let fahrenheitValue = Number(inputFahrenheit.value)
    let celsiusResult = (fahrenheitValue - 32) * 0.5556
    let outputCelsius = document.getElementById("exampleFormControlTextarea2")
    outputCelsius.innerHTML = celsiusResult
}