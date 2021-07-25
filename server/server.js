const express = require('express');
const cors = require('cors')
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});