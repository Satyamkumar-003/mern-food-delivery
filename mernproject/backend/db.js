const mongoose = require('mongoose');
require('dotenv').config();
// MongoDB URI with database name 'Aaharamern'
// problem : it can be faced during the future as it may not go with the version so change the version and copy the link in connect
const mongoURI = process.env.MONGO_URI;
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB connected");
  //  getting both datas at a time
    const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
    const foodCategory =await mongoose.connection.db.collection("foodCategory").find({}).toArray();



    global.food_items = fetched_data;
    global.foodCategory=foodCategory;
    // console.log("📦 Food items fetched:", global.food_items);

  } catch (err) {
    console.error("❌ Error in MongoDB connection or fetch:", err.message);
  }
};



module.exports = mongoDB;


//   console.log("✅ MongoDB connected successfully");

    
  //   const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
    
  //   // console.log("📦 Data from 'food_items' collection:");
  //   global.food_items=fetched_data;
  //   console.log(global.food_items);

  // } catch (err) {
  //   console.error("❌ MongoDB connection failed or fetch error:", err);
  //   process.exit(1);
  // }