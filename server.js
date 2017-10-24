const express         = require('express');
const app             = express();
const mongoose        = require('mongoose');
const csv             = require('ya-csv');
const bodyParser      = require('body-parser');
const foodController  = require('./controllers/foods.js');
const Foods           = require('./models/foods.js');

app.use(bodyParser.json());
app.use('/foods', foodController);

app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/Script'));
//Below is used to find seed the data

// First I needed to convert the data from the csv file.
var arr = [];
var reader = csv.createCsvFileReader('Full\ Stack\ MEAN\ Developer\ -\ MOCK_DATA.csv', {columnsFromHeader: true});
reader.addListener('data', function(data) {
  data.updatedTime = Date.now();
  data.showDetails = false;
  // console.log(data.updatedTime);
  arr.push(data);
  // console.log(arr);
});

// main page
app.get('/', (req, res)=>{
  res.sendFile('index.html');
});

// seeding data url
app.get('/seed', (req, res)=> {
  console.log('seeded');
  Foods.create(arr, (err, createdFood)=> {
    res.send('Database has been seeded');
  });
});

mongoose.connect('mongodb://localhost:27017/food',{
  useMongoClient: true
});

app.listen(3000, () => {
  console.log('listening on localhost:3000');
});
