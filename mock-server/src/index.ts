import express from 'express';
import { port, staticPath } from '@/config';
import { ApiRouter } from '@/routes/api/route';
import { rewrites } from '@/routes/rewrites/route';

const app = express();

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
app.use(rewrites);

app.listen(port, () => console.log(`start listen on ${port}`));
