const express = require('express');
const path = require('path');
const next = require('next');
const { parse } = require('url');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Router
const routes = require('./routes/index')();

// Remove Soon
const policeClearanceCertification = require('./routes/model/policeClearanceCertifications');

app.prepare()
.then(() => {
  const server = express();
  const PORT = process.env.PORT || 3000;
  server.use(express.json({ limit: '10mb' }));
  server.use(express.urlencoded({ extended: true, limit: '10mb' }));
  server.use(cookieParser());
  server.use(express.static(path.join(__dirname, 'public')));

  // Remove Soon
  server.use('/police-clearance-certification', policeClearanceCertification);

  server.get('*', (req, res) => {
    const parseUrl = parse(req.url, true);
    const {pathname, query = {}} = parseUrl;
    const route = routes[pathname];

    if (route) {
      return app.render(req, res, route.page, {
        ...query,
        env: process.env.NODE_ENV,
      });
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