var config = require('./config');

var Dist = require('congressional-districts');
var Congress = require('propublica-congress-node');
var client = new Congress(config.congressAPIKey);

console.log(Dist.getDistricts(08861));

/*
client.membersCurrentByStateOrDistrict({
	version: 'v1',
    chamber: 'senate',
	congressNumber: '115',
	state: 'nj',
	//district: '12',
  }).then(function(res) {
    console.log(res);
  });
*/
