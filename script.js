
console.log('this is running');
var url = 'https://cdn.optimizely.com/json/12345.json';
var rp = require('request-promise');
var options = {uri: url, json: true};
var optimizely = require('./');
var optly;
rp(options).then(function(datafile) { optly = optimizely.createInstance({datafile: datafile}) });
