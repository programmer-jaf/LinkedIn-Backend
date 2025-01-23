import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    headline: {
      type: String,
      default: "Linkedin User",
    },
    about: {
      type: String,
      default: "",
    },
    skills: [String],
    education: {
      school: String,
      startYear: Number,
      endYear: Number,
      fieldOfStudy: String,
    },
    experience: [
      {
        title: String,
        description: String,
        company: String,
        startDate: Date,
        endDate: Date,
      },
    ],
    location: {
      type: String,
      default: "",
    },
    connection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default userSchema;
