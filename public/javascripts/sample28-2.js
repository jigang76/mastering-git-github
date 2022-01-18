async function myAyncFunc() {
    throw 'myAysncFunc Error!';
}

function myPromiseFunc() {
    return new Promise((resolve, reject)=> {
        reject('myPromiseFunc Error!');
    });
}

const result = myAyncFunc().catch(e=>{console.log(e)});
const result2 = myPromiseFunc().catch(e=> {console.log(e)});
