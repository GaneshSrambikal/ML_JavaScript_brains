const brain = require('brain.js');
const data = require('./data/data.json');

const network = new brain.recurrent.LSTM();

const trainData = data.map(item =>({
    input:item.text,
    output:item.category
}));

network.train(trainData,{
    iterations:2000
});

const output= network.run('this doggy barked at me !.');

console.log(`Animal: ${output}`);