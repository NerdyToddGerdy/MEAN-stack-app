var csv = require('ya-csv');
var sys = require('sys');

// var reader = csv.createCsvFileReader('Full\ Stack\ MEAN\ Developer\ -\ MOCK_DATA.csv', {
//   'seperator': ',',
//   'quote': '"',
//   'escape': '"',
//   'comment': ''
// });

var arr = [];
var reader = csv.createCsvFileReader('Full\ Stack\ MEAN\ Developer\ -\ MOCK_DATA.csv', {columnsFromHeader: true});
reader.addListener('data', function(data) {
  console.log(data.id, '%%%%%');
  arr.push(data.id);
});

// var writer = new csv.CsvWriter(process.stdout);
// reader.addListener('data', function(data) {
//   writer.writeRecord([ data.name ]);
// });
