const { Schema, model } = require('mongoose');

// Schema to create Thought model
const reactionSchema = new Schema(

);
// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    thoughtText: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  })


const Thought = model('thought', thoughtSchema);

module.exports = Thought;