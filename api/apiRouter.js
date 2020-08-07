const express = require('express');

const router = express.Router();

const projectsRouter = require('./api-projects/projectsRouter');

router.use(express.json());
router.use('/projects', projectsRouter);

router.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'nothing to display at GET: /api' });
});

module.exports = router;
