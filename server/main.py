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
  connection_cursor.execute('SELECT * FROM stores')
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
  