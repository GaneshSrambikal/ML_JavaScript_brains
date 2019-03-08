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

const output= network.run('the dog was running i the park.');

console.log(`Animal: ${output}`);