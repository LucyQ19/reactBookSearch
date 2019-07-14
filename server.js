const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', { useNewUrlParser: true });

require('./routes/apiRoutes')(app);

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
});