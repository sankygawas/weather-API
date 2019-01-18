// first we import our dependencies…
let express = require('express');
let router =require('./routes');

let app = express();

// Use our router configuration when we call /api
app.use(router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});