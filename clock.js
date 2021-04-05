function setTime () {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    if(hour<10){
        hour = '0' +hour;
    }
    if(minute<10){
        minute = '0' +minute;
    }
    document.getElementById('clock-box-info-time').innerHTML = hour+' : '+minute;
}

setTime();
setInterval(setTime, 60000);