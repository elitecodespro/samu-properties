import mongoose from 'mongoose';

const teamsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);
const Teams = mongoose.models.Teams || mongoose.model('Teams', teamsSchema);
export default Teams;