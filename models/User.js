const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Invalid Email.'],
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user',
    }],
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thought',
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })


const User = model('user', userSchema);

module.exports = User;

//match: [/.+@.+\..+/, 'Must match an email address!'],