function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('timetxt').innerHTML = h + ":" + m + ":" + s;
    if(h < 11){
        document.getElementById("greettxt").innerHTML = "Good Morning dayy :) <br> Have a good day";
    }
    if(h > 18 || h < 5){
        document.getElementById("greettxt").innerHTML = "Goodnight dayy :) Have a nice sleep";
    }

    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();