const newPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(10)    
        console.log('Promise resolved');
        
    },1000)
})

console.log(newPromise);
