import mongoose, { Document, Schema } from "mongoose";

// Define the Session interface
interface Subscribe extends Document {
  email: string;
}

// Define the Session schema
const SubscribeSchema: Schema<Subscribe> = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create or retrieve the Session model
const SubscribeModel =
  (mongoose.models.Subscribe as mongoose.Model<Subscribe>) ||
  mongoose.model<Subscribe>("Subscribe", SubscribeSchema);

export default SubscribeModel;
