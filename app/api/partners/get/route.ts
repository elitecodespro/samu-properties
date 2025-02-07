import Partners from '../../../../lib/models/partners.model';
import { connect } from '../../../../lib/mongodb/mongoose';

export const POST = async (req: any) => {
    await connect();
    const data = await req.json();

    try {
        const startIndex = parseInt(data.startIndex) || 0;
        const limit = parseInt(data.limit) || 9;
        const sortDirection = data.order === 'asc' ? 1 : -1;

        const partners = await Partners.find({
            ...(data.partnerId && { _id: data.partnerId }),
        })
            .sort({ updatedAt: sortDirection })
            .skip(startIndex)
            .limit(limit);

        return new Response(JSON.stringify(partners), {
            status: 200,
        });

    } catch (error) {
        console.log('Error getting posts:', error);
    }
}