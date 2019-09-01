$(document).ready(function () {
    var blueVal = Math.floor(Math.random() * 10) + 1;
    var greenVal = Math.floor(Math.random() * 10) + 1;
    var redVal = Math.floor(Math.random() * 10) + 1;
    var yellowVal = Math.floor(Math.random() * 10) + 1;
    var total = 0


    $("#blue").on("click", function () {
        console.log('blueVal is: ' + blueVal);
        total += blueVal
        console.log('Total is: ' + total);
    })
    $("#green").on("click", function () {
        console.log('greenVal is: ' + greenVal);
        total += greenVal
        console.log('Total is: ' + total);
    })
    $("#red").on("click", function () {
        console.log('redVal is: ' + redVal);
        total += redVal
        console.log('Total is: ' + total);
    })
    $("#yellow").on("click", function () {
        console.log('yellowVal is: ' + yellowVal);
        total += yellowVal
        console.log('Total is: ' + total);
    })
})