const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const authRoutes = require('./routes/auth');
const accountManagementRoutes = require('./routes/accountManagement');

const keys = require('./config/keys');
const app = express();

mongoose.connect(keys.mongoURI)
  .then(() => console.log('MongoDB connected.'))
  .catch(error => console.log(error));

app.use(require('morgan')('dev'));
app.use('/uploads', express.static('./_uploads'));
app.use('/assets', express.static('./assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server has been started on ${port}`))

app.use('/api/auth', authRoutes);
app.use('/api/accountManagement', accountManagementRoutes);

// C L I E N T
app.use(express.static('./client/dist/client'));

app.get('/*', function(request, response) {
    response.sendFile(path.join(__dirname,'/client/dist/client/index.html'));
});

module.exports = app;