document.getElementById(".button").addEventListener("click", nightLight);

function nightLight() {
    var bodyElement = document.querySelector("body");
    bodyElement.classList.toggle("night-mode");

    var candleElement = document.querySelector(".candle");
    candleElement.classList.toggle("night-mode");

    var flameElement = document.querySelector(".flame");
    flameElement.classList.toggle("night-mode");

    var eyeContainerElement = document.querySelector(".eyeContainer");
    eyeContainerElement.classList.toggle("night-mode");

    var eyeElements = document.querySelectorAll(".eyeContainer .eye");
    eyeElements.forEach(function(eyeElement) {
        eyeElement.classList.toggle("night-mode");
    });

    var rightEyeElement = document.querySelector(".eyeContainer .eye:last-child .eye");
    rightEyeElement.classList.toggle("night-mode");

    var containerElement = document.querySelector(".container");
    containerElement.classList.toggle("night-mode");
}
