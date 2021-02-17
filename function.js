// // nums = [5, 12, 89, 45, 18, 8];

// // for (let i = 0; i < nums.length; i++){
// //     const num = nums[i] * 2;
    
// //     if (num % 2 == 0){
// //         console.log(num, 'is even');
// //     }
// //     else{
// //         console.log(num, 'is odd');
// //     }
// // }

// function evenify(age){
//     if( age % 2 == 0){
//         console.log(age, ': is even number');

//     }
//     else{
//         console.log(age,' is odd number');
//     }
// }
// function evenify_all(age){
//     for (let i = 0; i < friends_age.length; i++){
//         const age = friends_age[i];
//         evenify(age);
//     }
// }
// friends_age = [13, 17,19, 20,18];
// // evenify_all(friends_age)

// num = [3,4,5,6,7,9];
// // evenify_all(num);

// function evenify(num){
//     if(num % 2 == 0){
//         console.log(num, "is even number");
//     }
//     else{
//         console.log(num*2," is odd number");
//     }
// }
// function evenify_all(nums){
//     for(let i = 0; i <nums.length; i++){
//         const num = nums[i];
//         evenify(num);
//     }
// }
// let nums = [12,13,14,15,16,17,18];
// evenify(nums);

function evenify(num){
    if(num % 2 == 0){
        result = num;
    }
    else{
        result = num*2;
    }
    return result;
}
// let results = evenify(12);
// let squre = results * results;
// console.log(squre);
function function_all(nums){
    let even_array = [];
    for(let i =0; i< nums.length; i++){
        let num = nums[i];
        let result = evenify(num);
        even_array.push(result);
    }
    return even_array;
}
nums