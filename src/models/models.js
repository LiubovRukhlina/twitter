import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    max_length: [60, "Tweet cannot be more than 60 characters"],
  },
  likes: {
    type: Number,
    default: 0,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const UserSchema = new mongoose.Schema({});

// we have to define it this way because of hot reloading
export const Tweet =
  mongoose.models.Tweet ?? mongoose.model("Tweet", TweetSchema);
export const User = mongoose.models.User ?? mongoose.model("User", UserSchema);
