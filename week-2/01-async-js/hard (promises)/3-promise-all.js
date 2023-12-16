/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("t1 resoved")
            resolve(t)
        }, t)
    })

}

function wait2(t) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("t2 resoved")
            resolve(t)
        }, t)
    })

}

function wait3(t) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("t3 resoved")
            resolve(t)
        }, t)
    })

}

function calculateTime(t1, t2, t3) {

    return Promise.all([wait1(t1), wait2(t2), wait3(t3)])

}


module.exports = calculateTime;
