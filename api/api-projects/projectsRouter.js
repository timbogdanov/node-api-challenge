const express = require('express');

const router = express.Router();

const Projects = require('../../data/helpers/projectModel');

// create a new project
router.post('/', (req, res) => {
  if (req.body.name && req.body.description) {
    Projects.insert(req.body)
      .then((project) => {
        res.status(200).json(project);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    res.status(400).json({ message: 'missing name or description' });
  }
});

// read all projects
router.get('/', (req, res) => {
  Projects.get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: 'unable to fetch projects', error });
    });
});

// read one project
router.get('/:id', (req, res) => {
  Projects.get(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: 'unable to fetch project', error });
    });
});

// delete one project
router.delete('/:id', (req, res) => {
  Projects.remove(req.params.id)
    .then((project) => {
      res
        .status(201)
        .json({ message: `records removed: ${project}` });
    })
    .catch((error) => {
      res.status(404).json({ message: `record not found` });
    });
});

// put one project
router.put('/:id', (req, res) => {
  if (req.body.name && req.body.description) {
    Projects.update(req.params.id, req.body)
      .then((project) => {
        res.status(200).json(project);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    res.status(401).json({ message: `missing name or description` });
  }
});

module.exports = router;
