function getFullName(firstName, lastName){
    // console.log(arguments);
    let fullName = '';
    const result = [...arguments].join(' ');
    for(let i = 0; i < arguments.length; i++){
        const namePart = arguments[i];
        fullName = fullName + ' ' + namePart;
    }
    return fullName;
}

const name = getFullName('Omok', 'Songkat', 'Bin', 'Hanif', 'Songkat', 'Poribohon', 'Jonodorodi', 'Neta', 'Shubokta');

// console.log(name);

// getFullName(name);
console.log(name);

