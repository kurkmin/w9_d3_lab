use bookings;
db.dropDatabase();

db.guests.insertMany([
    {
        name: "Jason Wig",
        email: "jasonwig1@gmail.com",
        checkedIn: false
    },
    {
        name: "Marcy Smith",
        email: "marcy.smith@yahoo.com",
        checkedIn: true
    },
    {
        name: "Darren Jensen",
        email: "dar.jens123@gmail.com",
        checkedIn: false
    }
]);

// db.guests.insertOne(
//     {
//         name: "hello",
//         email: "hello@gmail.com",
//         checkedIn: false
//     }
// )