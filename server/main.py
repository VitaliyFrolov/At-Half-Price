import psycopg2
import json
from aiohttp import web


connection = psycopg2.connect('dbname=izrael user=garmoc password=danilbog host=localhost port=5432')
connection_cursor = connection.cursor()


async def stores_handler(request: web.Request):
  connection_cursor.execute(f'SELECT * FROM stores')
  result = connection_cursor.fetchall()
  return web.json_response(result)


if __name__ == '__main__':
  app = web.Application()
  app.add_routes([
    web.get('/stores', stores_handler),
    web.get('/stores/{store_id}', stores_handler)
  ])
  web.run_app(app, port=5050)
  