function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function setLight(){
    document.getElementById("timetxt").style.color = "#212121";
    document.getElementById("greettxt").style.color = "#212121";
    document.body.style.backgroundColor = "#f5f5f5";
}

function setDark(){
    document.getElementById("timetxt").style.color = "white";
    document.getElementById("greettxt").style.color = "white";
    document.body.style.backgroundColor = "#212121";
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

    if(h >= 6 && h < 17){
        setLight();
    } else {
        setDark();
    }

    if(h >= 5 && h < 12){
        document.getElementById("greettxt").innerHTML = "Pagiii, semoga harimu menyenangkan :)";
    } else if(h >= 12 && h < 17){
        document.getElementById("greettxt").innerHTML = "Siangg, sudah makan belomm ??";
    } else if (h >=17 && h < 19){
        document.getElementById("greettxt").innerHTML = "Soreee, inget mandi yaaaa wkwkwk";
    } else {
        document.getElementById("greettxt").innerHTML = "Selamat malam, tidur yang nyenyakk";
    }

    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();