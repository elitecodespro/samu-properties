import { currentUser } from '@clerk/nextjs/server';
import Partners from '../../../../lib/models/partners.model';
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

        const newPartner = await Partners.create({
            name: data.name,
            description: data.description,
            logo: data.logo,
        });

        await newPartner.save()

        return new Response(JSON.stringify(newPartner), {
            status: 200,
        });
    } catch (error) {
        console.log('Error creating post:', error);
        return new Response('Error creating post', {
          status: 500,
        });
    }
}