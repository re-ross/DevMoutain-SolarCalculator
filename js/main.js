/*jslint browser:true */
"use strict";
function addMonths(elem) {
var annualUsekw = 0, dailyUseKw = 0, i = 0, x = 0;

const months = document.getElementById('mpc').getElementsByTagName('input');

for (i = 0; i < months.length;i++) {
    x = Number(months[i].value)
    annualUsekw += x;
} dailyUseKw = annualUsekw/365
return dailyUseKw
}

function sunHrs() {
var hrs;
var theZone = document.forms.solarForm.zone.selectedIndex;
theZone +=1
switch(theZone) {
    case 1:
        hrs = 6;
        break;
    case 2:
        hrs = 5.5;
        break;
    case 3:
        hrs = 5;
        break;
    case 4:
        hrs = 4.5;
        break;
    case 5:
        hrs = 4.2;
        break;
    case 6:
        hrs = 3.5
        break;
    default:
        hrs = 0;
}
return hrs
}

function calculatePanel() {
var userChoice = document.forms.solarForm.panel.selectedIndex
var panelOptions = document.forms.solarForm.panel.options;
var power = panelOptions[userChoice].value;
var name = panelOptions[userChoice].text;
var x = [power, name]
return x
}





function calculateSolar() {
let dailyUseKw = addMonths('mpc');
var sunHoursPerDay = sunHrs();
var minKwNeeds = dailyUseKw / sunHoursPerDay
var realKwNeeds = minKwNeeds * 1.25
var realWattNeeds = realKwNeeds * 1000;
var panelInfo = calculatePanel();
var panelOutput = panelInfo[0];
var panelName = panelInfo[1];
console.log(panelName);
var panelsNeed = Math.ceil(realWattNeeds / panelOutput)
console.log(panelsNeed);
}

let feedback = "";
  feedback +=
    "<p> Based on your average daily use of " +
    Math.round(dailyUseKw) +
    " kWh, you will need to purchase " +
    panelsNeeded +
    " " +
    panelName +
    " solar panels to offset 100% of your electricity bill.</p>";
  feedback += "<h2>Additional Details</h2>";
  feedback +=
    "<p> Your average daily elecricity consumption: " +
    Math.round(dailyUseKw) +
    " Kwh per day. </p>";
  feedback +=
    "<p>Average sunshine hours per day: " + sunHoursPerDay + " hours</p>";
  feedback +=
    "<p>Realistic watts needed per hour: " +
    Math.round(realWattNeeds) +
    " watts/hour.</p>";
  feedback +=
    "<p>the " +
    panelName +
    " panel you selected generates about " +
    panelOutput +
    " watts per hour. </p>";

  document.getElementById("feedback").innerHTML = feedback;