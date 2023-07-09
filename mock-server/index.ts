import express from 'express';
import path from 'path';
import fs from 'fs';
import { ApiRouter } from './api/route';

const baseUrl = process.env.BASE_URL;
const port = !!baseUrl ? new URL(baseUrl).port : '5000';
const app = express();
const staticPath = path.join(__dirname, '../out');

/**
 * static file
 */
app.use(express.static(staticPath));

/**
 * api router
 */
app.use('/api', ApiRouter);

/**
 * rewrite
 */
app.use((req, res, next) => {
  const uri = req.url;
  const method = req.method.toUpperCase();

  if (!uri.includes('.') && fs.existsSync(`${staticPath}/${uri}.html`)) {
    const pathname = `${uri}.html`;
    console.log(`-  ┌ ${blue(method)} ${uri} \n   │\n   └──── $${staticPath}${pathname}\n`);
    res.sendFile(`${staticPath}${pathname}`);
  } else {
    const notfound = '/404.html';
    console.log(`-  ┌ ${blue(method)} ${uri} \n   │\n   └──── $${staticPath}${notfound}\n`);
    res.sendFile(`${staticPath}${notfound}`);
  }
});

app.listen(port, () => {
  console.log(`start listen on ${port}`);
});

const blue = (text: string) => `\x1B[36m${text}\x1B[0m`;
