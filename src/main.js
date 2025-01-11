// Bootstrap’s CSS and JS Import
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { celsiusToFahrenheit, fahrenheitToCelsius, celsiusToKelvin, kelvinToCelsius, fahrenheitToKelvin, kelvinToFahrenheit} from './coverter.js';
// dom elements

const tempValue = document.getElementById('tempValue')
const tempType = document.getElementById('tempType')
const result = document.getElementById('result')
const form= document.getElementById('converterForm')

// add event listener to the form
const C2F = 'c2f'; 
const F2C = 'f2c'; 
const C2K = 'c2k'; 
const K2C = 'k2c'; 
const F2K = 'f2k'; 
const K2F = 'k2f'; 

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const currentTempValue =  tempValue.value;
    const conversionTempType = tempType.value;

    let output;

    if(conversionTempType === C2F){
        // logic of conversion
        const fahrenheit = celsiusToFahrenheit(currentTempValue);
        output = `${currentTempValue}°C = ${fahrenheit}°F`;

    } else if (conversionTempType === F2C){
        // logic of conversion
        const celsius = fahrenheitToCelsius(currentTempValue);
        output = `${currentTempValue}°F = ${celsius}°C`;

    } else if (conversionTempType === C2K){
        const kelvin = celsiusToKelvin(currentTempValue);
        output = `${currentTempValue}°C = ${kelvin}K`;

    } else if(conversionTempType === K2C){
        const celsius = kelvinToCelsius(currentTempValue);
        output = `${currentTempValue}K = ${celsius}°C`;

    } else if(conversionTempType === F2K){
        const kelvin = fahrenheitToKelvin(currentTempValue);
        output = `${currentTempValue}°F = ${kelvin}K`;
    } else{
        const fahrenheit = kelvinToFahrenheit(currentTempValue);
        output = `${currentTempValue}K = ${fahrenheit}°F`;
    } 
    
    result.textContent = output
});
