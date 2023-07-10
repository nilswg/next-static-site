import { Router } from 'express';
import { AnnounceRouter } from './announce/route';
import { HeroRouter } from './hero/route';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({msg:'api ok'})
})
router.use('/hero', HeroRouter);
router.use('/announce', AnnounceRouter);

export const ApiRouter = router;
