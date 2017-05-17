"use strict";
const WIDTH = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const HEIGHT = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

var celsius = document.getElementById('celsius');
var fahrenheit = document.getElementById('fahrenheit');
var bottomCelsius = document.getElementById('bottom_celsius');
var bottomFahrenheit = document.getElementById('bottom_fahrenheit');
var topCelsius = document.getElementById('top_celsius');
var topFahrenheit = document.getElementById('top_fahrenheit');
var celsiusInput = document.getElementById('celsius_input');
var fahrenheitInput = document.getElementById('fahrenheit_input');

function setup() {
    celsius.style.left = WIDTH / 4 + 'px';
    celsius.style.top = HEIGHT / 10 + 'px';
    celsius.style.height = 2 * HEIGHT / 3 + 'px';

    fahrenheit.style.left = 3 * WIDTH / 4 + 'px';
    fahrenheit.style.top = HEIGHT / 10 + 'px';
    fahrenheit.style.height = 2 * HEIGHT / 3 + 'px';

    bottomCelsius.style.left = WIDTH / 4 + 'px';
    bottomCelsius.style.top = HEIGHT / 10 + 'px';
    bottomCelsius.style.height = 2 * HEIGHT / 3 + 'px';

    bottomFahrenheit.style.left = 3 * WIDTH / 4 + 'px';
    bottomFahrenheit.style.top = HEIGHT / 10 + 'px';
    bottomFahrenheit.style.height = 2 * HEIGHT / 3 + 'px';

    topCelsius.style.left = WIDTH / 4 + 'px';
    topCelsius.style.top = HEIGHT / 10 + 'px';
    topCelsius.style.height = 2 * HEIGHT / 3 + 'px';

    topFahrenheit.style.left = 3 * WIDTH / 4 + 'px';
    topFahrenheit.style.top = HEIGHT / 10 + 'px';
    topFahrenheit.style.height = 2 * HEIGHT / 3 + 'px';
}

function celsiusToFahrenheit() {
    var celsiusValue = celsiusInput.value;
    var fahrenheitValue = '';

    if (celsiusValue !== '' && !isNaN(celsiusValue)) {
        fahrenheitValue = 1.8 * celsiusValue + 32;
        fahrenheitInput.value = fahrenheitValue;

        celsius.innerHTML = celsiusValue + '&deg;C';
        fahrenheit.innerHTML = fahrenheitValue + '&deg;F';

        if (celsiusValue > 0) {
            changeTemperature(celsiusValue, fahrenheitValue);
        }
    } else {
        resetTemperature(celsiusValue, fahrenheitValue);
        fahrenheitInput.value = '';
    }
}

function fahrenheitToCelsius() {
    var fahrenheitValue = fahrenheitInput.value;
    var celsiusValue = '';

    if (fahrenheitValue !== '' && !isNaN(fahrenheitValue)) {
        celsiusValue = (fahrenheitValue - 32) / 1.8;
        celsiusInput.value = celsiusValue;

        celsius.innerHTML = celsiusValue + '&deg;C';
        fahrenheit.innerHTML = fahrenheitValue + '&deg;F';

        if (fahrenheitValue > 0) {
            changeTemperature(celsiusValue, fahrenheitValue);
        }
    } else {
        resetTemperature(celsiusValue, fahrenheitValue);
        celsiusInput.value = '';
    }
}

function changeTemperature(celsiusValue, fahrenheitValue) {
    topCelsius.style.height =  2 * HEIGHT / 3 - Math.min(celsius.clientHeight, celsiusValue) + 'px';
    bottomCelsius.style.backgroundColor = '#F00';
    topCelsius.style.backgroundColor = '#FFF';
    topCelsius.style.borderRadius = '30px 30px 0 0';

    topFahrenheit.style.height =  2 * HEIGHT / 3 - Math.min(fahrenheit.clientHeight, fahrenheitValue) + 'px';
    bottomFahrenheit.style.backgroundColor = 'red';
    topFahrenheit.style.backgroundColor = 'white';
    topFahrenheit.style.borderRadius = '30px 30px 0 0';
}

function resetTemperature(celsiusValue, fahrenheitValue) {
    celsius.innerHTML = celsiusValue;
    fahrenheit.innerHTML = fahrenheitValue;

    celsius.backgroundColor = "#FFF";
    fahrenheit.backgroundColor = "#FFF";
    topCelsius.style.borderRadius = '30px 30px 30px 30px';
    topCelsius.style.height = 2 * HEIGHT / 3 + 'px';
    topFahrenheit.style.borderRadius = '30px 30px 30px 30px';
    topFahrenheit.style.height = 2 * HEIGHT / 3 + 'px';
    bottomFahrenheit.style.backgroundColor = '#FFF';
}