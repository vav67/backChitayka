import mongoose from "mongoose";

const SlovoSchema = new mongoose.Schema(
  {
    // username: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    name: {
      type: String,
       required: true,
    },
    img: {
      type: String,
    },
     isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Slovo", SlovoSchema);