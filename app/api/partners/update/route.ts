import Partners from '../../../../lib/models/partners.model';
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

        const newPartner = await Partners.findByIdAndUpdate(
            data.partnerId,
            {
              $set: {
                name: data.name,
                description: data.description,
                logo: data.logo,
              },
            },
            { new: true }
        );

        await newPartner.save();

        return new Response(JSON.stringify(newPartner), {
            status: 200,
        });

    } catch (error) {
        console.log('Error creating listing:', error);
        return new Response('Error creating listing', {
          status: 500,
        });
    }
}