import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONN);
        console.log('Success connecting to the database');
    } catch (error) {
        console.error(error);
        throw new Error('Error trying to connect to the database');
    }
};


export default dbConnection;
