const express = require('express');

const router = express.Router({ mergeParams: true });

const Actions = require('../../data/helpers/actionModel');
const Projects = require('../../data/helpers/projectModel');

// create action to a specified user
router.post('/', (req, res) => {
  const newPost = { ...req.body, project_id: req.params.id };

  Actions.insert(newPost)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((error) => {
      console.log(error);
    });
});

// get all actions belonging to specified user
router.get('/', (req, res) => {
  Projects.getProjectActions(req.params.id)
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((error) => {
      console.log(error);
    });
});

// get one action belonging to specified user
router.get('/:id', (req, res) => {
  Actions.get(req.params.id)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((error) => {
      console.log(error);
    });
});

// put one action belonging to specified user
router.put('/:id', (req, res) => {
  Actions.update(req.params.id, req.body)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((error) => {
      console.log(error);
    });
});

// delete one action belonging to specified user
router.delete('/:id', (req, res) => {
  Actions.remove(req.params.id)
    .then((action) => {
      res.status(200).json({ message: `records removed ${action}` });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
