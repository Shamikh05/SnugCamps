const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    //useNewUrlParser: true,
    //useCreateIndex: true,
    //useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const sample = array => array[Math.floor(Math.random() * array.length)];



const seedDB = async() => {

    await Campground.deleteMany({});

    for (let i = 0; i < 50; i++) {

        const random1000 = Math.floor(Math.random() * 1000);

        const price = Math.floor(Math.random() * 20) + 10;

        const camp = new Campground({
            author: '61e47e78bed4db788956993d',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'The description is here',
            price,
            images: [{
                    url: 'https://res.cloudinary.com/camps/image/upload/v1648930188/CampImages/ed2dljktvo8dbq4irqab.jpg',
                    filename: 'CampImages/ed2dljktvo8dbq4irqab'
                },
                {
                    url: 'https://res.cloudinary.com/camps/image/upload/v1648930189/CampImages/x7qqt9nievthqa6imgbr.jpg',
                    filename: 'CampImages/x7qqt9nievthqa6imgbr'
                },
                {
                    url: 'https://res.cloudinary.com/camps/image/upload/v1648930188/CampImages/ircwmrl6u2qqareccd0e.jpg',
                    filename: 'CampImages/ircwmrl6u2qqareccd0e'
                }
            ]
        })

        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})