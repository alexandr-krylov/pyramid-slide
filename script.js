const selectBrickSymbol = document.getElementById("brick-symbol");
const setPyramidHeight = document.getElementById("pyramid-height");
const container = document.getElementById("pyramid");
const heightShow = document.getElementById("pyramid-height-show");
const padding = "\xa0";

eventHandler();

function drawPyramid(container, symbol, height) {
    for (let current = 1; current <= height; current++) {
        const layer = document.createElement("p")
        layer.appendChild(document.createTextNode(
            symbol.repeat(current + 1).padStart(parseInt(height, 10) + 1, padding)
        ));
        container.appendChild(layer);
    }
}

function eventHandler() {
    container.innerText = "";
    drawPyramid(container, selectBrickSymbol.value, setPyramidHeight.value);
}

function eventHandlerSlider() {
    heightShow.innerText = setPyramidHeight.value;
    eventHandler();
}

selectBrickSymbol.addEventListener("change", eventHandler);

setPyramidHeight.addEventListener("input", eventHandlerSlider);
