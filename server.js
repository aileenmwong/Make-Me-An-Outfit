const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors())
// app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.use(express.static('public'));
// app.use(express.static(__dirname + "/public"));

app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/public/index.html');
// });

// app.get('/*', function (req, res) {
//    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//  });

/* outfit API route */
const outfitRoutes = require('./routes/outfitroutes');
app.use('/api/outfits', outfitRoutes);

const loginRoutes = require('./routes/loginroutes');
app.use('/login', loginRoutes);


//const userRoutes = require('./routes/userroutes');
//app.use('/api/users',userRoutes);


/* handling 404 */
// app.get('*', function(req, res) {
//   res.status(404).send({message: 'Oops! Not found.'});
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});


