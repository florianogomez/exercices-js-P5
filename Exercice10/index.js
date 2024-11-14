//votre code ici

function printNumbers(n) {
    let counts = [];

    for(let i = 0; i < Number(n); i++){
        counts.push(i+1);
    }

    return counts.join(' ');
}

export default printNumbers
