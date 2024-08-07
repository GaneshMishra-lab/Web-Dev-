function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();
        }, 2000);
    });
}

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve();
        }, 2000);
    });
}

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve();
        }, 2000);
    });
}

async function runTasks() {
    try {
        await task1();
        await Promise.all([task2(), task3()]);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

runTasks();


   
