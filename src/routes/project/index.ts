import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

import Project from '../../models/project/index.model';

/**
 *
 */
router.get('/projects', async (req: Request, res: Response) => {
  await Project.find({}).sort([['updatedAt', -1]]).exec(function(err: Error, data: {}) {
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
router.post('/projects', async (req: Request, res: Response) => {
  const project = new Project(req.body);

  await project.save(function(err: Error, data: {}) {
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
router.put('/projects/:id', async (req: Request, res: Response) => {
  await Project.update({ _id: req.params.id }, req.body, function(err: Error, data: {}) {
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
router.delete('/projects/:id', (req: Request, res: Response) => {
  Project.find({ _id: req.params.id }).remove().exec(function(err: Error, data: {}) {
    if (err) {
      res.json(err);
    } else {
      res.status(200).json({ message: 'successfully removed' });
    }
  });
});

module.exports = router;
