/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {

    return new Promise(resolve => {
        setTimeout(() => {
            console.log("The t1 is resolved")
            resolve(t)
        }, t)
    })

}

function wait2(t) {

    return new Promise(resolve => {
        setTimeout(() => {
            console.log("The t1 is resolved")
            resolve(t)
        }, t)
    })

}

function wait3(t) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("The t1 is resolved")
            resolve(t)
        }, t)
    })

}

function calculateTime(t1, t2, t3) {
    const datenow = new Date();
    const startTime = datenow.getMilliseconds()
    console.log(startTime)
    return wait1(t1)
        .then((result) => {
            const date = new Date();
            let endTime = date.getMilliseconds();
            let totalTime = endTime - startTime;
            console.log(totalTime);
            return wait2(t2);
        })
        .then((result) => {
            const date = new Date();
            let endTime = date.getMilliseconds();
            let totalTime = endTime - startTime;
            console.log(totalTime);
            return wait3(t3);
        })
        .then((result) => {
            const date = new Date();
            let endTime = date.getMilliseconds();
            let totalTime = endTime - startTime;
            console.log(totalTime);
            return totalTime;
        });

}

calculateTime(1000, 3000, 2000)

//module.exports = calculateTime;
