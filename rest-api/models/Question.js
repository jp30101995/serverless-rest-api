const mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({  
  question: String,
  questiontype: String,
  difficulty: Number,
  options: [String],
  subject: String,
  answer: [String]

});
module.exports = mongoose.model('Question', QuestionSchema);