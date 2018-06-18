import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

import Complex from '../../models/complex/index.model';

/**
 *
 */
router.get('/complexes', async (req: Request, res: Response) => {
  await Complex.find({}).sort([['updatedAt', -1]]).exec(function(err: Error, data: {}) {
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
router.post('/complexes', async (req: Request, res: Response) => {
  const complex = new Complex(req.body);

  await complex.save(function(err: Error, data: {}) {
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
router.put('/complexes/:id', async (req: Request, res: Response) => {
  await Complex.update({ _id: req.params.id }, req.body, function(err: Error, data: {}) {
    if (err) {
      res.json(err);
    } else {
      console.log(data);
      if (data) {
        res.status(200).json({ message: 'successfully edited' });
      } else {
        res.status(400).json({ message: 'Something went wrong' });
      }
    }
  });
});

/**
 *
 */
router.delete('/complexes/:id', (req: Request, res: Response) => {
  Complex.find({ _id: req.params.id }).remove().exec(function(err: Error, data: {}) {
    if (err) {
      res.json(err);
    } else {
      res.status(200).json({ message: 'successfully removed' });
    }
  });
});

module.exports = router;
