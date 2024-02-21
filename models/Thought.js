const mongoose = require('mongoose');
const reactionSchema = require('./reactionSchema');

// Function to format the date in a specific format
function formatDate(date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(date).toLocaleDateString('en-US', options);
}

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAt) => formatDate(createdAt) // Using the formatDate function to format the timestamp
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
});

// Create a virtual called reactionCount
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;