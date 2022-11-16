const daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let current;
let currentDate;
let currentMonth;
let currentYear;
let dateProvided;
let birth;
let years;
let months;
let days;

function getAge() {
    current = new Date();
    currentDate = current.getDate();
    currentMonth = current.getMonth() + 1;
    currentYear = current.getFullYear();

    dateProvided = new Date(document.getElementById("dob").value);
    birth = {
        date: dateProvided.getDate(),
        month: dateProvided.getMonth() + 1,
        year: dateProvided.getFullYear()
    }

    //leap year
    if (currentYear % 4 == 0 || (currentYear % 100 == 0 && currentYear % 400 == 0)) {
        daysOfMonths[1] = 28;
    }
    else {
        daysOfMonths[1] = 29;
    }

}


function calcAge() {

    getAge();

    if (birth.year > currentYear || (birth.month > currentMonth && birth.year == currentYear) ||
        (birth.date > currentDate && birth.month == currentMonth && birth.year == currentYear)) {
        document.querySelector(".error").style.display = "block";
    }
    else {
        document.querySelector(".error").style.display = "none";
    }

    years = currentYear - birth.year;

    if (currentMonth >= birth.month) {
        months = currentMonth - birth.month;
    }
    else {
        years--;
        months = 12 + currentMonth - birth.month;
    }

    if (currentDate >= birth.date) {
        days = currentDate - birth.date;
    }
    else {
        months--;
        let dys = daysOfMonths[currentMonth - 2];
        days = dys + currentDate - birth.date;
    }

    displayAge(years, months, days);

}

document.getElementById("dob").addEventListener("change", calcAge);

function displayAge(years, months, days) {
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
}
