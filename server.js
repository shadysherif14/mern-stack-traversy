const express = require('express');

require('./config/database');
const keys = require('./config/keys');
const routes = require('./routes/routes');

const app = express();

app.get('/', (_, response) => {
    response.send('Home');
});


// Set up routes
app.use('/api/users', routes.api.users);
app.use('/api/profile', routes.api.profile);
app.use('/api/posts', routes.api.posts);

const port = process.env.PORT || keys.port;

app.listen(port);