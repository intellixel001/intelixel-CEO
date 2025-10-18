import mongoose, { Document, Schema } from "mongoose";

// Define the Session interface
interface Session extends Document {
  expiresIn: string;
  userId: mongoose.Types.ObjectId; 
}

// Define the Session schema
const SessionSchema: Schema<Session> = new Schema({
  expiresIn: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref: "User", 
  },
});

// Create or retrieve the Session model
const SessionModel =
  (mongoose.models.Session as mongoose.Model<Session>) ||
  mongoose.model<Session>("Session", SessionSchema);

export default SessionModel;