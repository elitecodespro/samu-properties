import { currentUser } from '@clerk/nextjs/server';
import Blogs from '../../../../lib/models/blogs.model';
import { connect } from '../../../../lib/mongodb/mongoose';

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

        const newBlog = await Blogs.create({
            userRef: user.publicMetadata.userMogoId,
            title: data.title,
            content: data.content,
            featured: data.featured,
            photo: data.photo,
        });

        await newBlog.save()

        return new Response(JSON.stringify(newBlog), {
            status: 200,
        });
    } catch (error) {
        console.log('Error creating post:', error);
        return new Response('Error creating post', {
          status: 500,
        });
    }
}