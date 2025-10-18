import mongoose, { Document, Schema } from "mongoose";

interface IRegister extends Document {
  firstName: string;
  lastName: string;
  email: string;
  social: string;
  phone: string;
  paymentMethod: string;
  isChecked: string;
}

const RegisterAffiliateSchema: Schema<IRegister> = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  social: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  isChecked: {
    type: String,
    required: true,
  },
});

const RegisterAffiliateModel =
  (mongoose.models.RegisterAffiliate as mongoose.Model<IRegister>) ||
  mongoose.model<IRegister>("RegisterAffiliate", RegisterAffiliateSchema);

export default RegisterAffiliateModel;
