import express from 'express';
import { existsSync } from 'fs';
import path from 'path';
import { staticPath } from '@/config';
import { blue } from '@/lib/colors';

const route = express.Router();

route.use((req, res, next) => {
  const uri = req.url;
  const method = req.method.toUpperCase();
  const { ext } = path.parse(uri);
  if (!ext && existsSync(`${staticPath}/${uri}.html`)) {
    const pathname = `${uri}.html`;
    console.log(`-  ┌ ${blue(method)} ${uri} \n   │\n   └──── $${staticPath}${pathname}\n`);
    res.sendFile(`${staticPath}${pathname}`);
  } else {
    const notfound = '/404.html';
    console.log(`-  ┌ ${blue(method)} ${uri} \n   │\n   └──── $${staticPath}${notfound}\n`);
    res.sendFile(`${staticPath}${notfound}`);
  }
});

export const rewrites = route;
