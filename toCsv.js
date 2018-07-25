var fs  = require('fs');
var converter = require('json-2-csv');
var constants = require('./data');

var json2csvCallback = function (err, csv) {
    if (err) throw err;
    
    fs.writeFileSync('sg.csv', csv, 'binary');
};

converter.json2csv(constants.items, json2csvCallback);


// app.get('/', function(req, res){
//     res.send(constants.items);
// })
  
  
// app.listen(5000, function(){
//     console.log('server started at: 5000');
// })
