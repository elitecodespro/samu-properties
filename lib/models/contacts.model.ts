import mongoose from 'mongoose';

const contactsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    enquiry: {
        type: String,
        required: true,
    },
    budget: {
        type: String,
        required: false,
    },
  },
  { timestamps: true }
);
const Contacts = mongoose.models.Contacts || mongoose.model('Contacts', contactsSchema);
export default Contacts;