const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: {
            'method': 'GET',
            'url': 'https://play.dhis2.org/2.34.6/api/dataElements',
            'headers': {
                'Authorization': 'Basic YWRtaW46ZGlzdHJpY3Q=',
                'Cookie': 'JSESSIONID=BFBF45D4B6A8BAC4CF8525175396BDBA'
            }
        }}); //Line 10
});
