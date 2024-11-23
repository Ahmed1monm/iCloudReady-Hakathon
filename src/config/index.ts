import dotenv from "dotenv";
dotenv.config()

export const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/myapp';
export const PORT= Number(process.env.PORT) || 8000;


export default {
    mongoURI,
    PORT
}
