import psycopg
from aiohttp import web
import aiohttp_cors

class DictRowFactory:
    def __init__(self, cursor):
        self.fields = [c.name for c in cursor.description]

    def __call__(self, values):
        return dict(zip(self.fields, values))


# todo: change private data usage to ENV
connection = psycopg.connect('dbname=izrael user=user password=password123 host=localhost port=5432', row_factory=DictRowFactory)
connection_cursor = connection.cursor()
routes = web.RouteTableDef();


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
  