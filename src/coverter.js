// (°C → °F): F = (C * 9/5) + 32
// (°F → °C): C = (F - 32) * 5/9
// (K → °C): K = C + 273.15
// (°C → K): C = K - 273.15
// (K → °F): K = (F-32) (5/9) + 273.15
// (°F → K): F = (K-273.15) (9/5) + 32



export function celsiusToFahrenheit(celsius){
  if (celsius === "") {
    throw new Error("Input cannot be empty");
}
    const c = parseFloat(celsius);
    const fahrenheit = (c * 9/5) + 32;
    return Number.isInteger(fahrenheit) ? fahrenheit : parseFloat(fahrenheit.toFixed(2));
}

export function fahrenheitToCelsius(fahrenheit){
  if (fahrenheit === "") {
    throw new Error("Input cannot be empty");
}
const f = parseFloat(fahrenheit);
const celsius = (f - 32) * 5 / 9;
return Number.isInteger(celsius) ? celsius : parseFloat(celsius.toFixed(2));
}

export function celsiusToKelvin(celsius){
  if (celsius === "" || celsius < -273.15) {
    throw new Error("Input cannot be empty or less than -273.15");
}
 const c = Number(celsius);
 const kelvin = c + 273.15;
 return Number.isInteger(kelvin) ? kelvin : parseFloat(kelvin.toFixed(2));
}

export function kelvinToCelsius(kelvin){
  if (kelvin === "" || kelvin < 0) {
    throw new Error("Input cannot be empty or negative");
}

  const k = parseFloat(kelvin);
  const celsius = k - 273.15;
  return Number.isInteger(celsius) ? celsius : parseFloat(celsius.toFixed(2));
}

export function fahrenheitToKelvin(fahrenheit){
  if (fahrenheit === "" || fahrenheit < -459.67) {
    throw new Error("Input cannot be empty or less than -459.67");
}
  const f = parseFloat(fahrenheit);
  const kelvin = (f-32) * (5/9) + 273.15;
  return Number.isInteger(kelvin) ? kelvin : parseFloat(kelvin.toFixed(2));
}

export function kelvinToFahrenheit(kelvin){
  if (kelvin === "" || kelvin < 0) {
    throw new Error("Input cannot be empty or negative");
}
  const k = parseFloat(kelvin);
  const fahrenheit = (k-273.15) * (9/5) + 32;
  return Number.isInteger(fahrenheit) ? fahrenheit : parseFloat(fahrenheit.toFixed(2));
}
