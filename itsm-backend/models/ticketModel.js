const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ["open", "in-progress", "closed"],
    default: "open",
  },
  createdAt: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("Ticket", TicketSchema);
