<<<<<<< HEAD
const mongoose = require("mongoose");
const Tour = require("./tourModel");
=======
const mongoose = require('mongoose');
const Tour = require('./tourModel');
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438

// Defining schema
const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
<<<<<<< HEAD
      required: [true, "Review can not be empty!"],
=======
      required: [true, 'Review can not be empty!'],
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    tour: {
      type: mongoose.Schema.ObjectId,
<<<<<<< HEAD
      ref: "Tour",
      required: [true, "Review must belong to a tour."],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a user"],
=======
      ref: 'Tour',
      required: [true, 'Review must belong to a tour.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user'],
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Preventing duplicate reviews
reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

// QUERY MIDDLEWARE
reviewSchema.pre(/^find/, function (next) {
  this.populate({
<<<<<<< HEAD
    path: "user",
    select: "name photo",
=======
    path: 'user',
    select: 'name photo',
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
  });

  next();
});

<<<<<<< HEAD
/*
=======
/**
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
 * Schema static - calculates the average ratings and ratings quantity for a given tour
 * Update the current tour document
 *
 * @param {ObjectId} tourId - given tour id
 */
reviewSchema.statics.calcAverageRatings = async function (tourId) {
  const reviewStats = await this.aggregate([
    {
      $match: { tour: { $eq: tourId } }, // check given tour id is equal to current tour id
    },
    {
      $group: {
<<<<<<< HEAD
        _id: "$tour",
        ratingsQuantity: { $sum: 1 },
        ratingsAverage: { $avg: "$rating" },
=======
        _id: '$tour',
        ratingsQuantity: { $sum: 1 },
        ratingsAverage: { $avg: '$rating' },
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
      },
    },
  ]);

  if (reviewStats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: reviewStats[0].ratingsQuantity,
      ratingsAverage: reviewStats[0].ratingsAverage,
    });
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: 0,
      ratingsAverage: 4.5,
    });
  }
};

// First time user create review
<<<<<<< HEAD
reviewSchema.post("save", function () {
=======
reviewSchema.post('save', function () {
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
  // this points to current review
  this.constructor.calcAverageRatings(this.tour);
});

/**
 * User wants to update review e.g. First time he gives 3 star but now wants to give 5 star
 * Here "doc" is current review which we want to update
 */
reviewSchema.post(/^findOneAnd/, async function (doc) {
  if (doc) await doc.constructor.calcAverageRatings(doc.tour);
});

<<<<<<< HEAD
const Review = mongoose.model("Review", reviewSchema);
=======
const Review = mongoose.model('Review', reviewSchema);
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438

module.exports = Review;
