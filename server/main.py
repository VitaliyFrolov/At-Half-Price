import psycopg
from aiohttp import web
import aiohttp_cors
import os


# todo: change private data usage to ENV
connection = psycopg.connect(f'dbname={os.getenv("DB_NAME")} user={os.getenv("DB_USER")} password={os.getenv("DB_PASSWORD")} host={os.getenv("DB_HOST")} port={os.getenv("DB_PORT")}', row_factory=psycopg.rows.dict_row)
connection_cursor = connection.cursor()
routes = web.RouteTableDef()


@routes.get('/stores')
async def stores_handler(request: web.Request):
  connection_cursor.execute('''
    SELECT COUNT(1) AS discounts_count, S.name, S.pk, S.picture_name
    FROM products
    LEFT JOIN stores S ON products.pk = S.pk
    GROUP BY S.name, S.pk, S.picture_name;
  ''')
  response = connection_cursor.fetchall()
  result = {
    'data': response
  }
  return web.json_response(result)

@routes.get('/products')
async def products_handler(request: web.Request):
  store_ID = request.query.get('storeID')
  if store_ID is not None:
    connection_cursor.execute(f'''
      SELECT pk, name, price, discount_percent, picture_name
      FROM products WHERE store_pk = {store_ID}
    ''')
  else:
    connection_cursor.execute('''
      SELECT P.pk, P.name, price, S.name as store_name, discount_percent, S.pk as store_pk, P.picture_name
      FROM stores S JOIN products P ON P.store_pk = S.pk
    ''')
  response = connection_cursor.fetchall()
  result = {
    'data': response
  }
  return web.json_response(result)


if __name__ == '__main__':
  app = web.Application()
  app.add_routes(routes)

  # todo: change allow origins before deploy
  cors = aiohttp_cors.setup(app, defaults={
    '*': aiohttp_cors.ResourceOptions(
      expose_headers='*',
      allow_headers='*',
    )
  })
  
  for route in list(app.router.routes()):
    cors.add(route)
  
  web.run_app(app, port=5050)
  