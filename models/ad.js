const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/users", { useNewUrlParser: true });   
const { Schema } = mongoose;

const adSchema = new Schema({
    owner_id: int,
    title:  String,
    category_id: int, 
    description: String,
    photo_1: String,
    photo_2: String,
    photo_3: String,
    photo_4: String,
    photo_5: String,
    phone:   int,
});
let ad = mongoose.model("Ad", adSchema);
ad.createCollection();
module.exports = ad;