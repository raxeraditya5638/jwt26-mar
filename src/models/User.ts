import mongoose from "mongoose";

// Define the schema for the user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

// Check if the model already exists
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
