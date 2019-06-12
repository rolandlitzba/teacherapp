const mongoose = require('mongoose');

const classesSchema = new mongoose.Schema({
  classname: {
    type: String,
    required: true
  },
  students: [
    {
      name: String,
      id: { String, unique: true },
      img: String,
      absence: Number,
      comments: String
    }
  ]
});

module.exports = mongoose.model('Classes', classesSchema);
