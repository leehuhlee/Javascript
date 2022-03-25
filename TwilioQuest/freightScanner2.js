function scan(freightItems){
    let contrabandIndexes = [];

    for(let i = 0; i < freightItems.length; i++){
        if(freightItems[i] == "contraband")
            contrabandIndexes.push(i);
    }

    return contrabandIndexes;
}

const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes);