var express = require('express');
var axios  = require('axios');
var app = express();


app.get('/', function(req, res){

  //create array of object of all your API calls
  const promises = [
    new Promise( ((resolve,reject) => {
      axios.get('http://servicesTT.groupkt.com/state/get/IND/UP')
      .then(function(response){
        resolve(response.data);
      })
      .catch(error => {
        //if API-endpoint call fails (server down or something), then resilved to cusomized error message 
        resolve({msg: 'error'});
      });
    })),
    new Promise( ((resolve) => {
      axios.get('http://services.groupkt.com/state/get/IND/MP').then(function(response){
        resolve(response.data);
      });
    })),
    new Promise( ((resolve) => {
      axios.get('http://services.groupkt.com/state/get/IND/BR').then(function(response){
        resolve(response.data);
      });
    })),
    new Promise( ((resolve) => {
      axios.get('http://services.groupkt.com/state/get/IND/AP').then(function(response){
        resolve(response.data);
      });
    }))
  ];

   
  Promise.all(promises)
    // .then(data => {  
    //   //map resultData and retuen each item
    //   return data.map(item => item);
    // })
    .then(data => {
      res.json(data);
    });
})


app.listen(3000, function(){
  console.log('server started at: 3000');
})
