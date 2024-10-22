// Proxy

const country = {
    name: 'India',
    capital: 'Delhi'
}

const names = ['ashi','ashish']

const nameProxy = new Proxy(names, {
    get: (target, key) => {
        console.log(target,key);
        return target[key]
    }
})
console.log(nameProxy[0]);

// nameProxy['0:1']
// const country1 = {
//     name: 'Brazil',
//     capital: 'Rio de J'
// }


// const countryProxy = new Proxy(country, {
//     get: (target, key) => {
//         console.log(target, key);
//         return target[key]
//     }
// })

// const countryProxy1 = new Proxy(country1, {
//     get: (target, key) => {
//         console.log(target, key);
//         return target[key]
//     }
// })

// console.log(countryProxy.capital);
// console.log(countryProxy1.capital);
// console.log(countryProxy.capital);
