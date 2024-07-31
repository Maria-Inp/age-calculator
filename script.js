let calculate = document.querySelector(".calculate");
var input = document.querySelector(".input-value");
var years = document.querySelector(".years");
var months = document.querySelector(".months");
var days = document.querySelector(".days");

var today = new Date();

const numberOfMonthDays = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
}

const isLeapYear = today.getFullYear() % 4 === 0 ? true : false;

calculate.onclick = function () {
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1; //+1 because month start from 1
    let currentDay = today.getDate();
    console.log("currentYear = " + currentYear + " currentMonth = " + currentMonth + " currentDay = " + currentDay);

    let data = new Date(input.value);
    let birthDay = data.getDate();
    let birthMonth = data.getMonth() + 1;
    let birthYear = data.getFullYear();
    console.log("birthYear = "+ birthYear + " birthMonth = " + birthMonth + " birthDay = " + birthDay);

    let yearDiff = currentYear - birthYear;
    let monthDiff = currentMonth - birthMonth;
    let dayDiff = currentDay - birthDay;
    console.log("yearDiff = " + yearDiff + " monthDiff = " + monthDiff + " dayDiff = "+ dayDiff);

    if (monthDiff < 0) { // currentMounth < birthMounth
        yearDiff = yearDiff - 1;
        monthDiff = (12 + currentMonth) - birthMonth;
    }

    if (dayDiff < 0) { // currentDay < birthDay
        monthDiff = monthDiff - 1;
    } 

    if (isLeapYear) {
        if (currentMonth - 1 == 2) {
            dayDiff = ((numberOfMonthDays[currentMonth - 1] + 1)  - birthDay) + currentDay; // in leap years Fab has 29 days
        } else {
            dayDiff = (numberOfMonthDays[currentMonth - 1] - birthDay) + currentDay;
        }
    } else {
        dayDiff = (numberOfMonthDays[currentMonth - 1] - birthDay) + currentDay; 
    }

    console.log("year = " + yearDiff + " month = " + monthDiff + " day = " + dayDiff);

    years.innerHTML = yearDiff + " years"
    months.innerHTML = monthDiff + " months";
    days.innerHTML = dayDiff + " days";
}