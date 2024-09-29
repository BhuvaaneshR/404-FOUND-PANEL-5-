const express = require('express');
const app = express();
const mongoose = require('mongoose');
const eventsRouter = require('./routes/events');

mongoose.connect('mongodb://localhost/event-management-system', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/events', eventsRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});