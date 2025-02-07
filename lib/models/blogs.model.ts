import mongoose from 'mongoose';

const blogsSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    userRef: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

const Blogs = mongoose.models.Blogs || mongoose.model('Blogs', blogsSchema);
export default Blogs;