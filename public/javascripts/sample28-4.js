async function myAysncFunc() {
    consolejljalk.log(new Date());
    const result = await wait(2).catch(e=>{
        console.error(e)
    });
    console.log(new Date());
}

//try {myAyncFunc();} catch(e) {}
myAyncFunc.catch(e);