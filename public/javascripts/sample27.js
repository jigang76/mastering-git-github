function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject('error!');
        }, sec*1000);
    });
}

wait(3).then(()=>{
    console.log('Success');
}, e=>{
    console.log('Catch in Then', e);
})_