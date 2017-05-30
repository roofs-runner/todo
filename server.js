var express = require('express');

//create app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, response, next) {
    if(req.headers['x-forwarded-proto'] === 'https') {
        response.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});