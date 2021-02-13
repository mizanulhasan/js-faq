// nums = [5, 12, 89, 45, 18, 8];

// for (let i = 0; i < nums.length; i++){
//     const num = nums[i] * 2;
    
//     if (num % 2 == 0){
//         console.log(num, 'is even');
//     }
//     else{
//         console.log(num, 'is odd');
//     }
// }

function evenify(age){
    if( age % 2 == 0){
        console.log(age, ': is even number');

    }
    else{
        console.log(age,' is odd number');
    }
}
function evenify_all(age){
    for (let i = 0; i < friends_age.length; i++){
        const age = friends_age[i];
        evenify(age);
    }
}
friends_age = [13, 17,19, 20,18];
evenify_all(friends_age)

num = [3,4,5,6,7,9];
evenify_all(num);