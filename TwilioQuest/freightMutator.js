function mutate(freightItems){
    let mutatedItems = [];

    mutatedItems = freightItems.map(item => item.toUpperCase());

    return mutatedItems;
}

const mutated = mutate(['dog', 'ray gun', 'cat']);
console.log('Mutated Items');
console.log(mutated);