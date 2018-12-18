
var socket = io();
var side = 30;
var g = 20;
var weather = "Dzmer";


function setup() {
    frameRate(5);
    createCanvas(g * side, g * side);
    background('#acacac');
}

socket.on("weather", function(data){
    weather = data
});
function drawMatrix(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1 && weather !== "Dzmer") {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#FF8C00");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#000");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1 && weather == "Dzmer") {
                fill("D4FFFC");
                rect(x * side, y * side, side, side);
              }
        }
    }
    
}
socket.on("draw matrix", drawMatrix);
