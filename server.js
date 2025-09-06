const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))

app.get('/greeting/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Welcome, ${username}`);
});

app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number);

    if (isNaN(number)) {
        return res.send('You must specify a number.');
    }

    const roll = Math.floor(Math.random() * (number + 1));
res.send(`You rolled a ${roll}.`);
});

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if (isNaN(index) || index <0 || index >= collectibles.length){
        return res.send('This item is not yet in stock. check back soon!');
    }
    const item = collectibles[index];
    res.send(`So, you want the ${item.name}? For $${item.price}, it can be yours!`);    
});

app.get('/hi', (req, res) => {
    const {name, age} = req.query;

    if (!name || !age ){
        return res.send('Please provide both a name and an age, e.g. /hello?name=Christy&age=32');
    }

    res.send(`Hi there, ${name}! I hear you are ${age} years old!`);
});

/* i messed up in the last question -_- */
  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

app.get('/shoes', (req, res) => {
const minPrice=parseFloat(req.query['min-price']);
const maxPrice=parseFloat(req.query['max-price']);
const type = req.query.type;

let results = shoes;


    if (minPrice && !isNaN(minPrice)){
        results = results.filter(shoe => shoe.price >= minPrice);
    } 
        
    if (!isNaN(maxPrice)&& maxPrice){
        results = results.filter(shoe => shoe.price <= maxPrice);
    }


    if (type){
        results = results.filter(shoe => shoe.type.toLowerCase() === type.toLowerCase());
    }

    res.send(results);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port 3000`);

});