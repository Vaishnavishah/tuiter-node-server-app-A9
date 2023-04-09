import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  topic: String,
  userName: String,
  handle: String,
  time: String,
  userImage: String,
   title: String,
   replies: Number,
   retuits: Number,
   disliked: Boolean,
   dislikes: Number
}, {collection: 'tuits'});
export default schema;