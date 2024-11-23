import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    message: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    job: {type: String, required: true},
    address: {type: String, required: true},
    ageRange: {type: String, required: true},
    campaign: {type: mongoose.Schema.Types.ObjectId, ref: "Campaign", required: true},
    score: {type: Number, default: 0}
}, {timestamps: true});

// leadSchema.pre("find", function () {
//     this.populate("campaign");
// });
//
// leadSchema.pre("findOne", function () {
//     this.populate("campaign");
// });

const LeadModel = mongoose.model("Lead", leadSchema);
export {
    LeadModel
}
