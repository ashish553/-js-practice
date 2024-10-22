let aPromsie = (chekVar)=>{
    return new Promise((res,rej)=>{
        if(chekVar){
            res('GREAT!')
        }else{
            rej('SAD :(')
        }
    })
}

let pr1 = new Promise((resolve, reject) => {
    setTimeout(resolve,2000,'Promisea1')
})
let pr2 = new Promise((resolve, reject) => {
    setTimeout(resolve,4000,'Promise2')
})

let pr3_0 = () =>{
    
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res('Promise3_0')
        }, 4000);
    })
}
let pr3_1 = () =>{
    
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res('Promise3_1')
        }, 3000);
    })
}

let pr4 = new Promise((res,rej) => {
        setTimeout(()=>{
            res('done')
        },1000)
    });
// let pr5 = new Promise((res,rej) => {
//         setTimeout(rej,0,'Rejected Promise4')
// })

(async()=>{

    // await Promise.all([pr1,pr2,pr3()]).then(console.log)
    // await Promise.race([pr1,pr2,pr3(),pr4()]).then(console.log)
    // await Promise.any([pr1,pr2,pr3(),pr4()]).then(console.log)
    console.log(await pr3_0())
    console.log(await pr3_1())
    console.log(await pr3_1())
    // await pr2
    // await Promise.allSettled([pr1,pr2,pr3(),pr4()]).then(console.log)
})();


// Promise.all([pr1,aPromsie(true),pr2]).then(result=>{
//     console.log(result);
// })

// async function trying() {
//     console.log('122');
    
//     // let a = await Promise.all([pr1,pr2,aPromsie(true)])
//     // setTimeout(() => {
//     //     console.log('SetTimeOut...');
//     // }, 3000);
//     // Promise.all([pr1,pr2,aPromsie(true)]).then(res=>console.log(res))
//     // let a = await pr1
//     pr1.then(r=>console.log(r))
//     // console.log(12);
//     // console.log(a);
//     console.log(12);

// }
// trying()

// aPromsie(false).then(result=>{
//     console.log(result);
// }).catch(result=>{
//     console.log(result);
// })