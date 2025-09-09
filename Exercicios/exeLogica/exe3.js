const divisao = (x) => {
    if(typeof x != 'number'){
        return;
    }

    if(x % 3 === 0 && x % 5 === 0){
        return 'FizzBuzz'
    } 
    if(x % 3 === 0){
        return 'Fizz'
    } 
    if(x % 5 === 0){
        return 'Buzz'
    }
    return x
}

for(let i = 0; i <= 100; i++){
    console.log(i, divisao(i))
}

// const divisao1 = (x) => {
//     if(typeof x != 'number') return NaN
//     if(x % 3 === 0 && x % 5 === 0) return 'FizzBuzz'
//     if(x % 3 === 0) return 'Fizz'
//     if(x % 5 === 0) return 'Buzz'
//     return x
// }
