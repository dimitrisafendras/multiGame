import fs from 'fs';

const sapRoutes = [
  '/User',
  '/Careers',
  '/Organizations',
  '/About',
  '/Contact',
  '/User',
];

export default (app) => {
  sapRoutes.forEach(route => app.use((ctx, next) => {
    if (ctx.url !== route) return next();
    ctx.path = route;
    ctx.redirect('/', route);
    // ctx.respond = false;

    // const rs = fs.createReadStream(`${process.cwd()}/dist/index.html`);
    // const body = [];
    // rs
    // .on('error', (err) => console.error(err))
    // .on('data', (chunk) => body.push(chunk))
    // .on('end', () => {
    //   ctx.res.writeHead(200, {
    //     'Content-Type': 'text/html',
    //     Location: route,
    //   });
    //   ctx.res.end(Buffer.concat(body).toString());
    // });
  }));
};
