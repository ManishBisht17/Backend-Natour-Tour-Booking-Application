const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Tour = require('../models/tourModel');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
<<<<<<< HEAD
const AppError = require('../utils/appError'); // Assuming you have a custom error handling utility


=======

// Stripe checkout - https://stripe.com/docs/payments/checkout
// Stripe JS reference - https://stripe.com/docs/js
// Stripe API reference - https://stripe.com/docs/api
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438

/**
 * @description - Create checkout session and send as response
 * @route - GET /checkout-session/:tourId
 */
exports.getCheckoutSession = catchAsync(async (req, res, next) => {
<<<<<<< HEAD
  console.log("tour is here")
  // 1) Get the currently booked tour
  const tour = await Tour.findById(req.params.tourId);


  if (!tour) {
    return next(new AppError('No tour found with that ID', 404));
  }

=======
  // 1) Get the currently booked tour
  const tour = await Tour.findById(req.params.tourId);

>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
  // 2) Create checkout session
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Product information
        quantity: 1,
        price_data: {
          currency: 'usd',
          unit_amount: tour.price * 100,
          product_data: {
            name: `${tour.name} Tour`,
            description: tour.summary,
            images: [
<<<<<<< HEAD
              `${req.protocol}://${req.get('host')}/img/tours/${tour.imageCover}`,
=======
              `${req.protocol}://${req.get('host')}/img/tours/${
                tour.imageCover
              }`,
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
            ],
          },
        },
      },
    ],
    mode: 'payment', // Accept one-time payments
    payment_method_types: ['card'],
<<<<<<< HEAD
    success_url: `${req.protocol}://${req.get('host')}/my-bookings?alert=booking`,
=======
    success_url: `${req.protocol}://${req.get(
      'host'
    )}/my-bookings?alert=booking`,
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
    cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourId,
  });

  // 3) Send session as response
  res.status(200).json({
    status: 'success',
    session,
  });
});

<<<<<<< HEAD
/**
 * @description - Create booking after successful Stripe payment
 * @param session - The checkout session from Stripe
 */
=======
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
const createBookingCheckout = async (session) => {
  const tour = session.client_reference_id;
  const user = (await User.findOne({ email: session.customer_email })).id;
  const price = session.amount_total / 100;

  await Booking.create({ tour, user, price });
};

/**
<<<<<<< HEAD
 * @description - Webhook endpoint for Stripe's successful payment event
=======
 * Source - https://stripe.com/docs/payments/handling-payment-events
 * @description - (app.js) webhook endpoint after successful payment event
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
 * @route - POST /webhook-checkout
 */
exports.webhookCheckout = (req, res, next) => {
  // Check webhook signature
  const signature = req.headers['stripe-signature'];
<<<<<<< HEAD
=======

>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  // Handle the event
<<<<<<< HEAD
  if (event.type === 'checkout.session.completed') {
    createBookingCheckout(event.data.object);
  }
=======
  if (event.type === 'checkout.session.completed')
    createBookingCheckout(event.data.object);
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438

  res.status(200).json({ received: true });
};

exports.createBooking = factory.createOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.getBooking = factory.getOne(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
