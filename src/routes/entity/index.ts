import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

import Entity from '../../models/entity/index.model';

/**
 *
 */
router.get('/entities', async (req: Request, res: Response) => {
  await Entity.find({}).sort([['updatedAt', -1]]).exec(function(err: Error, data: {}) {
    if (err) {
      res.json(err);
    } else {
      res.status(200).json(data);
    }
  });
});

/**
 *
 */
router.post('/entities', async (req: Request, res: Response) => {
  const entity = new Entity(req.body);

  await entity.save(function(err: Error, data: {}) {
    if (err) {
      res.json(err);
    } else {
      res.status(200).json({ message: 'successfully saved' });
    }
  });
});

/**
 *
 */
router.put('/entities/:id', async (req: Request, res: Response) => {
  await Entity.update({ _id: req.params.id }, req.body, function(err: Error, data: {}) {
    if (err) {
      res.json(err);
    } else {
      res.status(200).json({ message: 'successfully edited' });
    }
  });
});

/**
 *
 */
router.delete('/entities/:id', (req: Request, res: Response) => {
  Entity.find({ _id: req.params.id }).remove().exec(function(err: Error, data: {}) {
    if (err) {
      res.json(err);
    } else {
      res.status(200).json({ message: 'successfully removed' });
    }
  });
});

module.exports = router;
