var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current time stamp', now.unix());

var timestamp = 1501750171;
var currentMoment = moment.unix(timestamp);

console.log(currentMoment.format('MMMM Do, YYYY H:mm'));