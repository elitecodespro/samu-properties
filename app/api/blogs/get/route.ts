import Blogs from '../../../../lib/models/blogs.model';
import { connect } from '../../../../lib/mongodb/mongoose';

export const POST = async (req: any) => {
    await connect();
    const data = await req.json();

    try {
        const startIndex = parseInt(data.startIndex) || 0;
        const limit = parseInt(data.limit) || 9;
        const sortDirection = data.order === 'asc' ? 1 : -1;

        let featured = data.featured;

        if (featured === undefined || featured === 'false') {
          featured = { $in: [false, true] };
        }

        const blogs = await Blogs.find({
            ...(data.blogId && { _id: data.blogId }),
            featured,
        })
            .sort({ updatedAt: sortDirection })
            .skip(startIndex)
            .limit(limit);

        return new Response(JSON.stringify(blogs), {
            status: 200,
        });

    } catch (error) {
        console.log('Error getting posts:', error);
    }
}