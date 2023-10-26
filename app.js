var getcurmonth = document.getElementById('curmonth');
var getcuryear = document.getElementById('curyear');
var getcaldays = document.getElementById('caldays');
var getuimonths = document.getElementById('months');
var getuiyears = document.getElementById('years');

var getyearbtn = document.querySelector('.year-btn');

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var startyear = 2020;
var endyear = 2030;

var month, year;

window.addEventListener('load', function () {
    var svday = new Date();
    month = svday.getMonth();
    year = svday.getFullYear();
    // console.log(month, year);

    getcurmonth.textContent = months[month];
    getcuryear.innerText = year;

    initmonths();
    inityears();
    initdays();
});



function initmonths() {

    getuimonths.innerHTML = '';
    for (var x = 0; x < months.length; x++){
        var newdiv = document.createElement('div');
        newdiv.textContent = months[x];
        newdiv.classList.add('dropdown-item');

        // console.log(newdiv);

        newdiv.onclick = selectmonth(x);

        getuimonths.appendChild(newdiv);
    }
}

function selectmonth(num) {
    // console.log(num);
    var allidx = num;
    return function () {
        // console.log(num);
        month = allidx;
        getcurmonth.innerText = months[month];
        initdays();
    }
}

function inityears() {

    getuiyears.innerText = '';

    for (var x = startyear; x <= endyear; x++){
        var newdiv = document.createElement('div');
        newdiv.innerText = x;
        newdiv.className = 'dropdown-item';

        newdiv.onclick = (function () {
            var allidx = x;
            return function () {
                year = allidx;
                getcuryear.innerText = year;
                initdays();
            }
        })();

        getuiyears.appendChild(newdiv);
    }

    
}

function initdays() {
    getcaldays.innerHTML = '';

    var tmpdays = new Date(year, month, 0);
    // console.log(tmpdays);
    var tmpendday = getalldays(month, year);
    var getweedday = tmpdays.getDay();
    

    for (var i = 0; i <= getweedday; i++){
        var newdiv = document.createElement('div');
        newdiv.className = "day blank";

        getcaldays.appendChild(newdiv);
        
    }

    for (var x = 1; x <= tmpendday; x++){


        var newdiv = document.createElement('div');
        newdiv.textContent = x;
        newdiv.classList.add('day');

        getcaldays.appendChild(newdiv);
    }
}


function getalldays(month, year) {
    var curalldays = new Date(year, month + 1, 0);
    curalldays = curalldays.getDate();
    return curalldays;
}

getyearbtn.addEventListener('click', function () {
    if (this.lastElementChild.classList.contains('show')) {
        this.lastElementChild.classList.remove('show');
    } else {
        this.lastElementChild.classList.add('show');
    }
})