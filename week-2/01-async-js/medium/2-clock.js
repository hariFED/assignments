/*
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

*/

function addZero(num) {
    return num < 10 ? `0${num}` : `${num}`
}

function clockTwevel() {

    const theDay = new Date;
    const hour = addZero(theDay.getHours())
    const mintue = addZero(theDay.getMinutes())
    const seconds = addZero(theDay.getSeconds())

    //console.log(typeof (hour))
    console.log(`${hour}:${mintue}::${seconds} `)

}

setInterval(clockTwevel, 1000)

function clockTwentyFour() {
    const theDay = new Date;
    let hour = addZero(theDay.getHours())
    const mintue = addZero(theDay.getMinutes())
    const seconds = addZero(theDay.getSeconds())

    let ampm = 'AM';
    if (hour >= 12) {
        ampm = 'PM';
        hour = hour % 12 || 12;
    }


    console.log(`${hour}:${mintue}::${seconds}:${ampm}`)
}


setInterval(clockTwentyFour, 1000)


clockTwevel()
clockTwentyFour()