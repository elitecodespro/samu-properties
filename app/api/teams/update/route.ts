import Teams from '../../../../lib/models/teams.model';
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

        const newTeam = await Teams.findByIdAndUpdate(
            data.teamId,
            {
              $set: {
                name: data.name,
                title: data.title,
                photo: data.photo,
              },
            },
            { new: true }
        );

        await newTeam.save();

        return new Response(JSON.stringify(newTeam), {
            status: 200,
        });

    } catch (error) {
        console.log('Error creating listing:', error);
        return new Response('Error creating listing', {
          status: 500,
        });
    }
}