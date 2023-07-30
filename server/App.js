const express = require('express');
const cors = require('cors')
const app = express();
const port = 3005
const database = require(__dirname + '/database.json');

app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(port, () => console.log('connection success'));

function pagedEndpoint(req, res, database) {
  const data = [...database];
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const cursor = page * limit - limit;
  const items = data.slice(cursor, page * limit);

  res.json({
    data: items,
    totalPages: data.length / limit
  });
};

app.get('/stores', (req, res) => pagedEndpoint(req, res, database.stores));

app.get('/discounts', (req, res) => pagedEndpoint(req, res, database.discounts));

app.get('/stores-categories', (req, res) => {
  res.json(database['stores_categories']);
});
