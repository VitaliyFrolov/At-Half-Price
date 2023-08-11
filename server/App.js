const express = require('express');
const cors = require('cors')
const app = express();
const port = 3005
const database = require(__dirname + '/database.json');
const locales = require(__dirname + '/locales.json');

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

// en lang //

app.get('/locales-en-footer', (req, res) => {
  res.json(locales.en.footer);
});

app.get('/locales-en-header', (req, res) => {
  res.json(locales.en.header);
});

app.get('/locales-en-homePage', (req, res) => {
  res.json(locales.en.homePage);
});

app.get('/locales-en-storePage', (req, res) => {
  res.json(locales.en.storePage);
});

app.get('/locales-en-storesPage', (req, res) => {
  res.json(locales.en.storesPage);
});

// he lang // 

app.get('/locales-he-footer', (req, res) => {
  res.json(locales.he.footer);
});

app.get('/locales-he-header', (req, res) => {
  res.json(locales.he.header);
});

app.get('/locales-he-homePage', (req, res) => {
  res.json(locales.he.homePage);
});

app.get('/locales-he-storePage', (req, res) => {
  res.json(locales.he.storePage);
});

app.get('/locales-he-storesPage', (req, res) => {
  res.json(locales.he.storesPage);
});

// ru lang // 

app.get('/locales-ru-footer', (req, res) => {
  res.json(locales.ru.footer);
});

app.get('/locales-ru-header', (req, res) => {
  res.json(locales.ru.header);
});

app.get('/locales-ru-homePage', (req, res) => {
  res.json(locales.ru.homePage);
});

app.get('/locales-ru-storePage', (req, res) => {
  res.json(locales.ru.storePage);
});

app.get('/locales-ru-storesPage', (req, res) => {
  res.json(locales.ru.storesPage);
});