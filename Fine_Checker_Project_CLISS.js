let DrivingSpeed = document.getElementById("DrivingSpeed");
let DrivingSpeedTolerance = document.getElementById("DrivingSpeedTolerance");
let AllowedSpeed = document.getElementById("AllowedSpeed");
let SubmitButton = document.getElementById("Submit");
let BuiltUpAreas = document.getElementById("BuiltUp")
let WetWeather = document.getElementById("WetWeather")
let WetWeather2 = document.getElementById("WetWeather2");
let FineText = document.getElementById("Fine")
let OutsideBuiltUpAreas = document.getElementById("OutsideBuiltUp")
let Motorway = document.getElementById("Motorway")
let StoreDrivingSpeedToleranceValue = 0;
let Difference = 0;

SubmitButton.addEventListener("click", GetValue)
WetWeather.style.visibility = "hidden";
WetWeather2.style.visibility = "hidden";

Motorway.addEventListener("click", ShowMotorwayWeather)
OutsideBuiltUpAreas.addEventListener("click", HideMotorwayWeather)
BuiltUpAreas.addEventListener("click", HideMotorwayWeather)

function ShowMotorwayWeather() {
    WetWeather.style.visibility = "visible";
    WetWeather2.style.visibility = "visible";
}
function HideMotorwayWeather() {
    WetWeather.style.visibility = "hidden";
    WetWeather2.style.visibility = "hidden";
}


function GetValue() {
    if (BuiltUpAreas.checked == true) {
        CheckSpeedBuiltUpAreas()
    }
    if (OutsideBuiltUpAreas.checked == true) {
        CheckSpeedOutsideBuildUpAreas()
    }
    if (Motorway.checked == true) {
        CheckSpeedMotorway()
    }
}

function BuiltUpAreasFunction() {
    CheckForTolerance()

    if (StoreDrivingSpeedToleranceValue > 75) {
        FineText.innerHTML = "Fine of between €500 and €10,000 and imprisonment for between 8 days and 3 years"
    }

    else if (Difference <= 15 && Difference > 0) {
        FineText.innerHTML = "Your fine is 49 Euros fixed penalty notice"
    }

    else if (Difference > 15 && Difference <= 75) {
        FineText.innerHTML = "Your fine is 145 Euros fixed penalty notice + 2 points deducted"
    }

    else {
        FineText.innerHTML = "No fine"

    }
}
function OutsideBuiltUpAreasFunction() {
    CheckForTolerance()

    if (StoreDrivingSpeedToleranceValue > 135) {
        FineText.innerHTML = "Fine of between €500 and €10,000 and imprisonment for between 8 days and 3 years"

    }

    else if (Difference <= 20 && Difference > 0) {
        FineText.innerHTML = "Your fine is 49 Euros fixed penalty notice"

    }
    else if (Difference > 20 && Difference <= 135) {
        FineText.innerHTML = "Your fine is 145 Euros fixed penalty notice + 2 points deducted"

    }

    else {
        FineText.innerHTML = "No fine"
    }
}

function MotorwayValueFunction() {
    CheckForTolerance()

    if (StoreDrivingSpeedToleranceValue > 195) {
        FineText.innerHTML = "Fine of between €500 and €10,000 and imprisonment for between 8 days and 3 years"
    }

    else if (Difference <= 25 && Difference > 0) {
        FineText.innerHTML = "Your fine is 49 Euros fixed penalty notice"

    }
    else if (Difference > 25 && Difference <= 195) {
        FineText.innerHTML = "Your fine is 145 Euros fixed penalty notice + 2 points deducted"

    }

    else {
        FineText.innerHTML = "No fine"
    }
}

function MotorwayValueFunctionWetWeather() {
    CheckForTolerance()

    if (StoreDrivingSpeedToleranceValue > 165) {
        FineText.innerHTML = "Fine of between €500 and €10,000 and imprisonment for between 8 days and 3 years"
    }

    else if (Difference <= 25 && Difference > 0) {
        FineText.innerHTML = "Your fine is 49 Euros fixed penalty notice"

    }
    else if (Difference > 25 && Difference <= 165) {
        FineText.innerHTML = "Your fine is 145 Euros fixed penalty notice + 2 points deducted"

    }

    else {
        FineText.innerHTML = "No fine"
    }
}


function CheckSpeedBuiltUpAreas() {
    if (AllowedSpeed.value > 75) {
        FineText.innerHTML = "Allowed speed can't be bigger than 75"
    }
    else {
        BuiltUpAreasFunction()
    }
}

function CheckSpeedOutsideBuildUpAreas() {
    if (AllowedSpeed.value > 135) {
        FineText.innerHTML = "Allowed speed can't be bigger than 135"
    }
    else {
        OutsideBuiltUpAreasFunction()
    }
}

function CheckSpeedMotorway() {
    if (AllowedSpeed.value > 195 && WetWeather.checked == false) {
        FineText.innerHTML = "Allowed speed can't be bigger than  195"
    }

    else if (AllowedSpeed.value > 165 && WetWeather.checked == true) {
        FineText.innerHTML = "Allowed speed can't be bigger than  165"
    }

    else {
        CheckWeatherType()
    }
}

function CheckWeatherType() {
    if (WetWeather.checked == false) {
        MotorwayValueFunction()
    }
    else {
        MotorwayValueFunctionWetWeather()
    }
}

function CheckForTolerance() {
    if (DrivingSpeed.value > 25 && DrivingSpeed.value < 100) {
        DrivingSpeedTolerance.value = DrivingSpeed.value - 3
        StoreDrivingSpeedToleranceValue = DrivingSpeedTolerance.value
        Difference = StoreDrivingSpeedToleranceValue - AllowedSpeed.value
    }
    else if (DrivingSpeed.value <= 25) {
        DrivingSpeedTolerance.value = "There is no tolerance with this speed"
        Difference = DrivingSpeed.value - AllowedSpeed.value
        StoreDrivingSpeedToleranceValue = DrivingSpeed.value
    }
    else if (DrivingSpeed.value >= 100) {
        DrivingSpeedTolerance.value = DrivingSpeed.value - (DrivingSpeed.value * 3) / 100
        StoreDrivingSpeedToleranceValue = DrivingSpeedTolerance.value
        Difference = StoreDrivingSpeedToleranceValue - AllowedSpeed.value
    }
}

// This part of JavaScript is for audio

DrivingSpeed.addEventListener("mouseover", MenuPlay);
DrivingSpeed.addEventListener("mouseleave", MenuPause)
DrivingSpeedTolerance.addEventListener("mouseover", MenuPlay);
DrivingSpeedTolerance.addEventListener("mouseleave", MenuPause)
AllowedSpeed.addEventListener("mouseover", MenuPlay);
AllowedSpeed.addEventListener("mouseleave", MenuPause)
SubmitButton.addEventListener("mouseover", MenuPlay);
SubmitButton.addEventListener("mouseleave", MenuPause)
SubmitButton.addEventListener("click", ClickPlay)
WetWeather.addEventListener('change', BeepPlay)
Motorway.addEventListener("click", BeepPlay)
OutsideBuiltUpAreas.addEventListener("click", BeepPlay)
BuiltUpAreas.addEventListener('click', BeepPlay)

function MenuPlay() {
    menu.play();
}

function MenuPause() {
    menu.pause();
    menu.currentTime = 0;
}

function ClickPlay() {
    button.play();

    setTimeout(() => {
        button.pause();
        button.currentTime = 0;
    }
        , 300);

}

function BeepPlay() {
    beep.play();

    setTimeout(() => {
        beep.pause();
        beep.currentTime = 0;
    }
        , 300);
}


