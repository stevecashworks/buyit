import mongoose from "mongoose";

const connect_db = async (mongo_uri) => {

try {
    
    return mongoose.connect(mongo_uri);
} catch (error) {
    console. log(error.message)
}

};

export default connect_db;
