const Joi = require("joi");
const review = require("./models/review");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().min(0).required(),
    image: Joi.object({
      url: Joi.string().allow('', null),
      filename: Joi.string().allow('', null),
    }).allow(null),
  }).required()
});
