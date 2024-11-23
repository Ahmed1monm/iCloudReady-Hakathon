import mongoose from "mongoose";

async function CreateConnection(url: string) {
    try {
        await mongoose.connect(url, {
            autoIndex: true,
        });
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database: ", error);
    }
}

export * from "./campaign";
export * from "./lead";

export default CreateConnection;
