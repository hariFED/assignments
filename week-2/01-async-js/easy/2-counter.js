
// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)
let count2 = 0;

function counter2() {

    count2++
    console.log(count2)
    setTimeout(counter2, 1000)

}

counter2()