function addNumbers(num1, num2){
    
    let sum = 0;
    for(let i =0; i < arguments.length; i++){
        const element = arguments[i];
        sum = sum + element;
    }
    
    function logInfo(message){
        console.log(message);

    }
    logInfo('Good Morning');
    
    return sum;
}

let result = addNumbers(3, 5, 8, 15);
console.log(result);