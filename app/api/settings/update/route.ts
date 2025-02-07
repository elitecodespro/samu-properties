import Settings from '../../../../lib/models/settings.model';
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

        const newSetting = await Settings.findByIdAndUpdate(
            data.settingId,
            {
              $set: {
                heroTitle: data.heroTitle,
                heroSubTitle: data.heroSubTitle,
                heroButtonTitle: data.heroButtonTitle,
                heroBackgroundImage: data.heroBackgroundImage,
                aboutTitle: data.aboutTitle,
                aboutBackgroundImage: data.aboutBackgroundImage,
                aboutDescription: data.aboutDescription,
                missionTitle: data.missionTitle,
                missionDescription: data.missionDescription,
                vissionTitle: data.vissionTitle,
                vissionDescription: data.vissionDescription,
                mainPartnerSectionLogo: data.mainPartnerSectionLogo,
                mainPartnerSectionTitle: data.mainPartnerSectionTitle,
                mainPartnerSectionDescription: data.mainPartnerSectionDescription,
                mainPartnerSectionBackgroundImage: data.mainPartnerSectionBackgroundImage,
                recentOffersSectionTitle: data.recentOffersSectionTitle,
                recentOffersSectionButton: data.recentOffersSectionButton,
                recentRentSectionTitle: data.recentRentSectionTitle,
                recentRentSectionButton: data.recentRentSectionButton,
                recentSaleSectionTitle: data.recentSaleSectionTitle,
                recentSaleSectionButton: data.recentSaleSectionButton,
                teamSectionTitle: data.teamSectionTitle,
                teamBackgroundImage: data.teamBackgroundImage,
                blogsSectionTitle: data.blogsSectionTitle,
                blogsSectionSubTitle: data.blogsSectionSubTitle,
                blogsSectionBackgroundImage: data.blogsSectionBackgroundImage,
                contactSectionTitle: data.contactSectionTitle,
                contactSectionSubTitle: data.contactSectionSubTitle,
                contactSectionBackgroundImage: data.contactSectionBackgroundImage,
              },
            },
            { new: true }
        );

        await newSetting.save();

        return new Response(JSON.stringify(newSetting), {
            status: 200,
        });

    } catch (error) {
        console.log('Error updating setting:', error);
        return new Response('Error updating setting', {
          status: 500,
        });
    }
}