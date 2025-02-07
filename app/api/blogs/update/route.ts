import Blogs from '../../../../lib/models/blogs.model';
import { connect } from '../../../../lib/mongodb/mongoose';
import { currentUser } from '@clerk/nextjs/server';

export const POST = async (req: any) => {
    const user = await currentUser();

    try {
        await connect();

        const data = await req.json();

        if (!user) {
            return new Response('Unauthorized', {
                status: 401,
            });
        }

        const newBlog = await Blogs.findByIdAndUpdate(
            data.blogId,
            {
              $set: {
                title: data.title,
                featured: data.featured,
                content: data.content,
                photo: data.photo,
              },
            },
            { new: true }
        );

        await newBlog.save();

        return new Response(JSON.stringify(newBlog), {
            status: 200,
        });

    } catch (error) {
        console.log('Error updating blog:', error);
        return new Response('Error updating blog', {
          status: 500,
        });
    }
}