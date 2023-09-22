CREATE TABLE stores (
  pk INT,
  name VARCHAR(100),
  picture_name VARCHAR(50)
);
INSERT INTO stores VALUES
(1, 'Магнит', '11.png'),
(2, 'Пятерочка', '10.jpg');
CREATE TABLE products (
  pk INT,
  name VARCHAR(200),
  price FLOAT,
  store_pk INT,
  discount_percent INT,
  picture_name VARCHAR(50)
);
INSERT INTO products VALUES
(1, 'Сосиски Папа может 12шт.', 20.75, 1, 10, '1.webp'),
(2, 'Шампунь Жумайсынба', 30, 2, 30, '12.webp');

