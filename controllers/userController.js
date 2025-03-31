<<<<<<< HEAD
const multer = require("multer");
const sharp = require("sharp");

const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");
=======
const multer = require('multer');
const sharp = require('sharp');

const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

// Multer configuration
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/img/users');
//   },
//   filename: (req, file, cb) => {
//     // user-8736482fgdf783-348763448734.jpeg
//     const ext = file.mimetype.split('/')[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   },
// });
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
<<<<<<< HEAD
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Please upload only image.", 400), false);
=======
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Please upload only image.', 400), false);
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

// Upload user photo using multer
<<<<<<< HEAD
exports.uploadUserPhoto = upload.single("photo");
=======
exports.uploadUserPhoto = upload.single('photo');
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438

// Resizing Images
exports.resizeUserPhoto = async (req, res, next) => {
  // If there is no file uploaded
  if (!req.file) return next();

  // user-8736482fgdf783-348763448734.jpeg
  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
<<<<<<< HEAD
    .toFormat("jpeg")
=======
    .toFormat('jpeg')
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
};

/**
 * Filter req.body object for "name" and "email" and store it to newObj
 *
 * @param {Object} obj - req.body is an object
 * @param  {Array} allowedFields - Array ["name", "email"]
 * @returns Object
 */
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

// Middleware function for the route "/me"
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

/**
 * @description - Update current user
 * @route - PATCH /api/v1/users/updateMe
 */
exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
<<<<<<< HEAD
        "This route is not for password updates. Please use /updateMyPassword.",
=======
        'This route is not for password updates. Please use /updateMyPassword.',
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
<<<<<<< HEAD
  const filterBody = filterObj(req.body, "name", "email");
=======
  const filterBody = filterObj(req.body, 'name', 'email');
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438

  // (Optional) If user uploads new photo then add it to filterbody object
  if (req.file) filterBody.photo = req.file.filename;

  // 3) Update user document (only name and email)
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filterBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
<<<<<<< HEAD
    status: "success",
=======
    status: 'success',
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
    data: {
      user: updatedUser,
    },
  });
});

/**
 * @description - Delete current user
 * @route - DELETE /api/v1/users/deleteMe
 */
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
<<<<<<< HEAD
    status: "success",
=======
    status: 'success',
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
    data: null,
  });
});

/**
 * @description - Create New User
 * @route - POST /api/v1/users
 */
exports.createUser = (req, res) => {
  res.status(500).json({
<<<<<<< HEAD
    status: "error",
=======
    status: 'error',
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
    message: 'This route is not defined! Please use "/signup" instead.',
  });
};

/**
 * @description - Get All Users
 * @route - GET /api/v1/users
 */
exports.getAllUsers = factory.getAll(User);

/**
 * @description - Get User (Single)
 * @route - GET /api/v1/users/:id
 */
exports.getUser = factory.getOne(User);

/**
 * @description - Update User
 * @route - PATCH /api/v1/users/:id
 */
exports.updateUser = factory.updateOne(User);

/**
 * @description - Delete User
 * @route - DELETE /api/v1/users/:id
 */
exports.deleteUser = factory.deleteOne(User);
<<<<<<< HEAD

//For testing
// const stripe = require('stripe')('sk_test_51QV6bXAudVCX5mOfW6GWb7AQ8i7lBlIhwc069cHZreIggEEQe1w6nPZRvj7qVzfNKdyFKI2dNCI3MBtJH0zAMKDJ00WCxh8RKY');

// const testStripeKey = async () => {
//   try {
//     const account = await stripe.accounts.retrieve();
//     console.log('Stripe API Key is valid. Account details:', account);
//   } catch (error) {
//     console.error('Invalid Stripe API Key:', error.message);
//   }
// };

// testStripeKey();
=======
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
