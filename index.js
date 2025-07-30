const { createBareServer } = require('@tomphttp/bare-server-node');
   const { createServer } = require('http');
   const Fastify = require('fastify');
   const fastifyStatic = require('@fastify/static');
   const { join } = require('path');
   const httpProxy = require('http-proxy');
   const wisp = require("wisp-server-node");
   const bare = createBareServer('/bare/');
   const fastify = Fastify();

   const proxyServer = httpProxy.createProxyServer();
   
   console.log("Fetching proxies...");
   
   fastify.register(fastifyStatic, {
       root: join(__dirname, 'public'),
       prefix: '/',
       decorateReply: false,
       setHeaders: (res, path) => {
           if (path.endsWith('.js')) {
               res.setHeader('Content-Type', 'application/javascript');
           }
       }
   });
 
   fastify.setNotFoundHandler((req, reply) => {
       reply.status(404).sendFile('404.html', { root: join(__dirname, 'public') });
   });
   
   const server = createServer();
   
   server.on('request', (req, res) => {
       if (bare.shouldRoute(req)) {
           bare.routeRequest(req, res);
           return;
       }
   
       fastify.ready(err => {
           if (err) throw err;
           fastify.server.emit('request', req, res);
       });
   });
   

   
   server.on('upgrade', (req, socket, head) => {
       if (bare.shouldRoute(req, socket, head)) {
           bare.routeUpgrade(req, socket, head);
       } else {
           socket.end();
       }
   });
   
   server.listen(process.env.PORT || 8080, () => {
       console.log(`Server listening on port ${process.env.PORT || 8080}`);
   });