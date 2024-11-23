import mongoose, {Document, Schema} from 'mongoose';

interface IToken {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
}

interface IAccount extends Document {
    token: IToken,
    isDefault: boolean
}

interface IChannel extends Document {
    name: string;
    account: [IAccount];
}

interface ITargetAudience extends Document {
    name: string;
    description: string;
    ageRange: string;
    address: string;
    job: string;
}

interface ICampaign extends Document {
    name: string;
    startDate: Date;
    endDate: Date;
    budget: number;
    channels: [IChannel];
    targetAudience: [ITargetAudience];
}

const tokenSchema: Schema = new Schema({
    access_token: {type: String},
    token_type: {type: String},
    refresh_token: {type: String},
    expires_in: {type: Number}
});

const accountSchema: Schema = new Schema({
    token: {type: tokenSchema},
    name: {type: String},
    id: {type: String},
    isDefault: {type: Boolean, required: true}
});

const channelSchema: Schema = new Schema({
    name: {type: String, required: true},
    account: {type: [accountSchema], required: true}
});

const targetAudienceSchema: Schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    ageRange: {type: String, required: true},
    address: {type: String, required: true},
    job: {type: String, required: true}
});

const CampaignSchema: Schema = new Schema({
    name: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    budget: {type: Number, required: true},
    channels: {type: [channelSchema], required: true},
    targetAudience: {type: [targetAudienceSchema], required: true}
}, {timestamps: true});

const CampaignModel =  mongoose.model<ICampaign>('Campaign', CampaignSchema);
export {
    CampaignModel
}
