import Teams from '../../../../lib/models/teams.model';
import { connect } from '../../../../lib/mongodb/mongoose';

export const POST = async (req: any) => {
    await connect();
    const data = await req.json();

    try {
        const startIndex = parseInt(data.startIndex) || 0;
        const limit = parseInt(data.limit) || 9;
        const sortDirection = data.order === 'asc' ? 1 : -1;

        const teams = await Teams.find({
            ...(data.teamId && { _id: data.teamId }),
        })
            .sort({ updatedAt: sortDirection })
            .skip(startIndex)
            .limit(limit);

        return new Response(JSON.stringify(teams), {
            status: 200,
        });

    } catch (error) {
        console.log('Error getting posts:', error);
    }
}