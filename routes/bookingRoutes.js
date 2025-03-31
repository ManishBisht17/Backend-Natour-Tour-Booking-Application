const express = require('express');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

<<<<<<< HEAD

=======
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
const router = express.Router();

router.use(authController.protect);

router
  .route('/checkout-session/:tourId')
  .get(bookingController.getCheckoutSession);

router.use(authController.restrictTo('admin', 'lead-guide'));

router
  .route('/')
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

router
  .route('/:id')
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;
