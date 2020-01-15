const brain = require('brain.js');
const data = require('./data/data.json');

const network = new brain.recurrent.LSTM();

//training
const trainData = data.map(item =>({
    input:item.text,
    output:item.category
}));

network.train(trainData,{
    iterations:2000
});
//output
const output= network.run('the dog was running i the park.');

console.log(`Animal: ${output}`);
