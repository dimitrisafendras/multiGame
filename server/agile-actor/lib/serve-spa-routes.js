// import fs from 'fs';

const sapRoutes = [
  '/Careers',
  '/Organizations',
  '/About',
  '/Contact',
  '/User',
];

export default (app) => {
  sapRoutes.forEach(route => app.use((ctx, next) => {
    if (ctx.url !== route) return next();
    ctx.redirect('/', route);

    // const { req, res } = ctx;
    // const protocol = req.socket.encrypted ? 'https' : 'http';
    // const Location = `${protocol}//${req.headers.host}${route}`;
    // res.writeHead(200, {
    //   'Content-Type': 'text/html',
    //   Location,
    // });
    // ctx.type = 'html';
    // ctx.body = fs.createReadStream(`${process.cwd()}/dist/index.html`);

    // ctx.respond = false;
    // const { req, res } = ctx;
    // const protocol = req.socket.encrypted ? 'https' : 'http';
    // const Location = `${protocol}//${req.headers.host}${route}`;
    // const rs = fs.createReadStream(`${process.cwd()}/dist/index.html`);
    // const body = [];
    // rs
    // .on('error', (err) => console.error(err))
    // .on('data', (chunk) => body.push(chunk))
    // .on('end', () => {
    //   res.writeHead(200, {
    //     'Content-Type': 'text/html',
    //     Location,
    //   });
    //   res.end(Buffer.concat(body).toString());
    // });
    return null;
  }));
};
