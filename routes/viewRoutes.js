<<<<<<< HEAD
const express = require("express");
const viewsController = require("../controllers/viewsController");
const authController = require("../controllers/authController");
=======
const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438

const router = express.Router();

router.use(viewsController.alerts);

<<<<<<< HEAD
router.route("/").get(authController.isLoggedIn, viewsController.getOverview);
router
  .route("/tour/:slug")
  .get(authController.isLoggedIn, viewsController.getTour);
router
  .route("/login")
  .get(authController.isLoggedIn, viewsController.getLoginForm);
router
  .route("/signup")
  .get(authController.isLoggedIn, viewsController.getSignupForm);
router.route("/me").get(authController.protect, viewsController.getAccount);
router
  .route("/my-bookings") // booked tours of current user
  .get(authController.protect, viewsController.getMyBookings);

=======
router.route('/').get(authController.isLoggedIn, viewsController.getOverview);
router
  .route('/tour/:slug')
  .get(authController.isLoggedIn, viewsController.getTour);
router
  .route('/login')
  .get(authController.isLoggedIn, viewsController.getLoginForm);
router
  .route('/signup')
  .get(authController.isLoggedIn, viewsController.getSignupForm);
router.route('/me').get(authController.protect, viewsController.getAccount);
router
  .route('/my-bookings') // booked tours of current user
  .get(authController.protect, viewsController.getMyBookings);

// router
//   .route('/submit-user-data')
//   .post(authController.protect, viewsController.updateUserData);

>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
module.exports = router;
