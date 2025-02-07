import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema(
  {
    heroTitle: {
      type: String,
      required: true,
    },
    heroSubTitle: {
        type: String,
        required: true,
    },
    heroButtonTitle: {
        type: String,
        required: true,
    },
    heroBackgroundImage: {
        type: String,
        required: true,
    },
    aboutTitle: {
        type: String,
        required: true,
    },
    aboutBackgroundImage: {
        type: String,
        required: true,
    },
    aboutDescription: {
        type: String,
        required: true,
    },
    missionTitle: {
        type: String,
        required: true,
    },
    missionDescription: {
        type: String,
        required: true,
    },
    vissionTitle: {
        type: String,
        required: true,
    },
    vissionDescription: {
        type: String,
        required: true,
    },
    mainPartnerSectionLogo: {
        type: String,
        required: true,
    },
    mainPartnerSectionTitle: {
        type: String,
        required: true,
    },
    mainPartnerSectionDescription: {
        type: String,
        required: true,
    },
    mainPartnerSectionBackgroundImage: {
        type: String,
        required: true,
    },
    recentOffersSectionTitle: {
        type: String,
        required: true,
    },
    recentOffersSectionButton: {
        type: String,
        required: true,
    },
    recentRentSectionTitle: {
        type: String,
        required: true,
    },
    recentRentSectionButton: {
        type: String,
        required: true,
    },
    recentSaleSectionTitle: {
        type: String,
        required: true,
    },
    recentSaleSectionButton: {
        type: String,
        required: true,
    },
    teamSectionTitle: {
        type: String,
        required: true,
    },
    teamBackgroundImage: {
        type: String,
        required: true,
    },
    blogsSectionTitle: {
        type: String,
        required: true,
    },
    blogsSectionSubTitle: {
        type: String,
        required: true,
    },
    blogsSectionBackgroundImage: {
        type: String,
        required: true,
    },
    contactSectionTitle: {
        type: String,
        required: true,
    },
    contactSectionSubTitle: {
        type: String,
        required: true,
    },
    contactSectionBackgroundImage: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);
const Settings = mongoose.models.Settings || mongoose.model('Settings', settingsSchema);
export default Settings;