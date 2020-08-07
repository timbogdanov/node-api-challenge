const express = require('express');

const router = express.Router({ mergeParams: true });

const Actions = require('../../data/helpers/actionModel');

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
  Actions.get()
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

module.exports = router;
