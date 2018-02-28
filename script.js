// script.js
'use strict';
// Custom function 
function calculateTip() {
    // Store the data of the inputs
    var billAmount, serviceQuality, numPeople, total;
    billAmount = document.getElementById('billAmount').value;
    serviceQuality = document.getElementById('serviceQuality').value;
    numPeople = document.getElementById('totalPeople').value;
    
  // Quick validation
    if (billAmount === "" || serviceQuality === 0) {
        return window.alert("Please add values to calcuate");
    }
    if (numPeople === "" || numPeople === 1) {
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
    total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    // Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    document.getElementById("tip").innerHTML = total;
    
}


//Hide the Tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clickng the button calls our custom function
document.getElementById("calculate").onclick = function () { calculateTip(); };