// Changing an HTML element
//var likes = document.querySelector("#likes");

var counterVal = 0;

function incrementClick() {
    updateLikes(++counterVal);
}

function updateLikes(val) {
    document.getElementById("likes").innerHTML = val;
}


var counterVal2 = 0;

function incrementClick2() {
    updateLikes2(++counterVal2);
}

function updateLikes2(val2) {
    document.getElementById("likes2").innerHTML = val2;
}


var counterVal3 = 0;

function incrementClick3() {
    updateLikes3(++counterVal3);
}

function updateLikes3(val3) {
    document.getElementById("likes3").innerHTML = val3;
}