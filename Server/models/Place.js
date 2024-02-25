const mongoose = require("mongoose");
const { schema } = require("./User");

const PlaceSchema = new mongoose.Schema({
  title: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  checkIn: Number,
  checkOut: Number,
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  maxGuests: Number,
});

const PlaceModel = mongoose.model("Place", PlaceSchema);
module.exports = PlaceModel;
