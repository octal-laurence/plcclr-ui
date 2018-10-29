const express = require('express');
const path = require('path');
const next = require('next');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Router
const routes = require('./routes/index')();

app.prepare()
.then(() => {
  const server = express();
  const PORT = process.env.PORT || 3000;
  server.use(express.static(path.join(__dirname, 'public')));

  server.get('*', (req, res) => {
    const parseUrl = parse(req.url, true);
    const {pathname, query = {}} = parseUrl;
    const route = routes[pathname];

    console.log('im being triggered');

    if (route) {
      return app.render(req, res, route.page, query);
    }

    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}'`)
  });
})
.catch(ex => {
  console.error(ex.stack);
  process.exit(1);
});