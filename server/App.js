const express = require('express');
const cors = require('cors')
const app = express();
const port = 3005
const database = require(__dirname + '/database.json');

app.use(cors({origin: 'http://localhost:3000'}));

app.listen(port, () => console.log('connection success'));

app.get('/stores', (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit) || 10;
  const cursor = page * limit - limit;
  const stores = database.stores.slice(cursor, page * limit);
  res.json(stores)
});
