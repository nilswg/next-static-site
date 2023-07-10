import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ hero: { name: 'Nilson' } });
});

export const HeroRouter = router;