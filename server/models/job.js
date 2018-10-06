const mongoose = require('mongoose');
const validator = require('validator');

var SenderSchema = new mongoose.Schema({
  contact: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  address: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var ReceiverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  address: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  contact: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  additionalInfo: {
    type: String,
    trim: true
  }
});

var JobSchema = new mongoose.Schema({
  jobType: {
    type: Number,
    required: true
  },
  size: [{
    weight: {
      type: Number
    },
    length:{
      type: Number
    },
    width:{
      type: Number
    },
    heigth:{
      type: Number
    }
  }],
  subject: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Number,
    default: null
  },
  sender: SenderSchema,
  receiver: ReceiverSchema
});

var Job = mongoose.model('Job', JobSchema);

module.exports = {Job};
