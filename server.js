var request = require('request');
var options = {
    'method': 'GET',
    'url': 'https://play.dhis2.org/2.34.6/api/dataElements',
    'headers': {
        'Authorization': 'Basic YWRtaW46ZGlzdHJpY3Q=',
        'Cookie': 'JSESSIONID=BFBF45D4B6A8BAC4CF8525175396BDBA'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
