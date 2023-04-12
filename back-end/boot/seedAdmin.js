const { Admin } = require('../models/admin');
require('dotenv').config(); // to use file .env

/// ////////////////////////////// create admin ///////////////////////////////////////////

const createAdmin = async () => {
  const admin = await Admin.findOne({ email: process.env.emailAdmin });
  if (admin) {
    // console.log(admin)
    console.log('Admin already exists.');
    // throw { status: 406, message: 'Admin already exists.' }
  } else {
    const admin = new Admin({
      email: process.env.emailAdmin,
      password: process.env.password,
    });
    await admin.save().then(
      () => {
        console.log('Admin created.');
      },
    ).catch(
      (err) => {
        console.log(err);
        throw { status: 500, message: 'Internal server error.' };
      },
    );
  }
};

createAdmin();
