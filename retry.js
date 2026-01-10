// async function fetchReq(url, count) {
    
//     async function fetchWrapper(url, count) {
//         try {
//             const res = await fetch(url)
//             if(!res.ok) {
//                 throw new Error(`HTTP error ${res.status}`);
//             }
//             return await res.json()
//         } catch (error) {
//             if(count < 1) {
//                 console.log(error.message, error.name);
//                 return
//             }
//             console.log('Some error has occured!');
//             console.log('Retrying...');
//             return fetchWrapper(url, --count)
//         }
//     }

//     const data = await fetchWrapper(url, count)
//     return data
// }

// fetchReq('https://jsonplaceholder.typicode.com/uses', 3).then(console.log)

function x(){
    for(var i=1; i<=5; i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }

    console.log("Hello world")
}
x()