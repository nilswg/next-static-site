import { Router } from 'express';
import { getAnnounce, getAnnounceList } from '../../controllers/announces.control';

const router = Router();

router.get('/list', (req, res) => {
  const data = getAnnounceList();
  res.status(200).json(data);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const data = getAnnounce(id);
  res.status(200).json(data);
});

export const AnnounceRouter = router;
