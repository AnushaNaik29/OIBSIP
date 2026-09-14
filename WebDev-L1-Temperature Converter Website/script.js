const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convert-btn");

const celsiusResult = document.getElementById("celsius-result");
const fahrenheitResult = document.getElementById("fahrenheit-result");
const kelvinResult = document.getElementById("kelvin-result");

const errorMessage = document.getElementById("error-message");



function convertTemperature() {

    const inputValue = temperatureInput.value.trim();
    const unit = unitSelect.value;

    errorMessage.textContent = "";


 
    if (inputValue === "") {

        showError("Please enter a temperature value.");

        resetResults();

        return;
    }


    const temperature = Number(inputValue);


    if (!Number.isFinite(temperature)) {

        showError("Please enter a valid numeric value.");

        resetResults();

        return;
    }


    let celsius;
    let fahrenheit;
    let kelvin;



    if (unit === "celsius") {

        celsius = temperature;

        fahrenheit = (temperature * 9 / 5) + 32;

        kelvin = temperature + 273.15;
    }



    else if (unit === "fahrenheit") {

        fahrenheit = temperature;

        celsius = (temperature - 32) * 5 / 9;

        kelvin = celsius + 273.15;
    }



    else if (unit === "kelvin") {

        kelvin = temperature;

        celsius = temperature - 273.15;

        fahrenheit = (celsius * 9 / 5) + 32;
    }


  

    if (kelvin < 0) {

        showError(
            "Temperature cannot be below absolute zero (-273.15°C / 0 K)."
        );

        resetResults();

        return;
    }


  

    celsiusResult.textContent = formatNumber(celsius);

    fahrenheitResult.textContent = formatNumber(fahrenheit);

    kelvinResult.textContent = formatNumber(kelvin);
}



function formatNumber(value) {

    return Number(value.toFixed(2));
}



function showError(message) {

    errorMessage.textContent = message;
}




function resetResults() {

    celsiusResult.textContent = "--";

    fahrenheitResult.textContent = "--";

    kelvinResult.textContent = "--";
}




convertButton.addEventListener(
    "click",
    convertTemperature
);



temperatureInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            convertTemperature();
        }
    }
);