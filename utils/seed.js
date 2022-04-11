const connection = require('../config/connection');
const { getUsers } = require('../controllers/userController');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
//   await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < 20; i++) {
    const user = getRandomUser();

    users.push({
      username: `${user.uName}`,
      email: `${user.email}`,
    });
  }

  await User.collection.insertMany(users);
//   const listUsers = User.collection.find();
//   const thoughts = [];
//   listUsers.forEach(el => {
//       const randThoughts = getRandomThoughts(el);
//       for(let i = 0; i<randThoughts.length; i++){
//           thoughts.push(randThoughts.pop());
//       }
//   });

//   await Thought.collection.insertMany(thoughts);

  console.table(users);
//   console.table(thoughts);
  console.info('Seeding stage 1 complete! 🌱');
  process.exit(0);
});