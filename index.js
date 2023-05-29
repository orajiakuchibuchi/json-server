// Doc : https://www.npmjs.com/package/json-server
const DB = __dirname + '/db/records.json';
const JsonServer = require('json-server');
const authMiddleware = require('./middleware/auth');
const JSONPORT = process.env.PORT || 3000;
const router = JsonServer.router(DB);
const server = JsonServer.create();
const middlewares = [authMiddleware, JsonServer.defaults()];
server.set('port', JSONPORT);
server.use(middlewares);
server.use(JsonServer.bodyParser);
server.use(router)

server.listen(server.get('port'), () => {
  console.log(`JSON Server is running on ${server.get('port')}`)
});





