function explain_callback(name, age, task){
    task();
    console.log('Hello ', name);
    console.log('Age ', age);
    
}

function washHand(){
    console.log('Wash hand with soap');
}
function takeShower(){
    console.log('Take Shower');
}
function scrollFacebook(){
    console.log('Scroll Facebook but dont like any posts');
}
explain_callback('Sogir Uddin', 17, washHand);
explain_callback('Kogir Uddin', 13, takeShower);
explain_callback('Mugir Uddin', 21,scrollFacebook);
