const mongoose = require('mongoose');

const classesSchema = new mongoose.Schema({
  classname: {
    type: String,
    required: true
  },
  classId: {
    type: String,
    required: true
  },
  students: [
    {
      name: String,
      id: String,
      img: String,
      absence: Number,
      comments: String
    }
  ]
});

module.exports = mongoose.model('Classes', classesSchema);
