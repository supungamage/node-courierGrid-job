const {ObjectID} = require('mongodb');
const _ = require('lodash');
const express = require('express');

var mongoose = require('./db/mongoose');
var {Job} = require('./models/job');

app.post('/jobs', (req, res) => {
  debugger;
  var size = _.pick(req.body, ['weight', 'length', 'width', 'heigth']);
  var body = _.pick(req.body, ['jobType', 'subject', 'description']);
  body.size = size;
  body.createdAt = new Date().getTime();
  var job = new Job(body);

  job.save().then((doc) => {
    res.send(doc);
  }).catch((err) => res.status(400).send(err));
});

app.get('/jobs', (req, res) => {
  Job.find().then((jobs) => {
    res.send({jobs});
  }, (error) => {
    res.status(400).send(error);
  });
});

app.get('/jobs/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Job.findById(id).then((job) => {
    if(!job) {
        return res.status(404).send();
    }

    res.send({job});
  }, (error) => {
    return res.status(400).send();
  });
});

app.delete('/jobs/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Job.findByIdAndRemove(id).then((job) => {
    if(!job) {
      return res.status(404).send();
    }

    res.send({job});
  }).catch((err) => res.status(400).send());
});

app.patch('/jobs/:id', (req, res) => {
  var id = req.params.id;
  var size = _.pick(req.body, ['weight', 'length', 'width', 'heigth']);
  var job = _.pick(req.body, ['jobType', 'subject', 'description']);
  job.size = size;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Job.findByIdAndUpdate(id, {$set: job}, {new: true}).then((job) => {
    if(!job) {
      return res.status(404).send();
    }

    res.send({job});
  }).catch((err) => res.status(400).send());
});