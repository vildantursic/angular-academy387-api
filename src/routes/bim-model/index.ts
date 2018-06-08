import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

import BimModel from '../../models/bim-model/index.model';

/**
 *
 */
router.get('/bimmodel', async (req: Request, res: Response) => {
  await BimModel.find({}).sort([['updatedAt', -1]]).exec(function(err: Error, data: {}) {
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
router.post('/bimmodel', async (req: Request, res: Response) => {
  const bimModel = new BimModel(req.body);

  await bimModel.save(function(err: Error, data: {}) {
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
router.put('/bimmodel/:id', async (req: Request, res: Response) => {
  await BimModel.update({ _id: req.params.id }, req.body, function(err: Error, data: {}) {
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
router.delete('/bimmodel/:id', (req: Request, res: Response) => {
  BimModel.find({ _id: req.params.id }).remove().exec(function(err: Error, data: {}) {
    if (err) {
      res.json(err);
    } else {
      res.status(200).json({ message: 'successfully removed' });
    }
  });
});

module.exports = router;
