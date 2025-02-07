import mongoose from 'mongoose';

const partnersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);
const Partners = mongoose.models.Partners || mongoose.model('Partners', partnersSchema);
export default Partners;