const User = require('../models/user');
const cloudinary = require('cloudinary');


//use for heroku
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});



exports.addImage = async (req, res) => {

}