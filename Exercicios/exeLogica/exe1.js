function max(x, y){
    return x > y ? x : y
}

const max2 = (x, y) => {
    return x > y ? x : y 
}

// const max3 = (x, y) => x > y ? x : y 


function max4(x, y){
    if(x > y){
        return x 
    } else{
        return y
    }
}

function max5(x, y){
    if(x > y){ 
        return x
    } else if(x = y){
        console.log('Iguais')
    } 
    return y
}

console.log(max(10, 2))
console.log(max2(10, 20))