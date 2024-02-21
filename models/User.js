const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String, 
        required: true,
        unique: true, 
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    thoughts: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'
        }
    ]
});

// This creates a virtual called friendCount 
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User; 