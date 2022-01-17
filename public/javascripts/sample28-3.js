function wait(sec) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            reject('throw Error!');
        }, sec*1000);
    });
}

async function myAyncFunc() {
    console.log(new Date());
    try {
        await wait(2);
    } catch(e) {
        console.error(e);
    }

    console.log(new Date());
}

const result = myAyncFunc();