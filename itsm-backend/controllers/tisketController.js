const Ticket = require("../models/ticketModel");

const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(201).json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createTicket = async (req, res) => {
  const ticket = new Ticket({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newTicket = await ticket.save();
    res.status(201).json(newTicket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateTicketStatus = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    ticket.status = req.body.status || ticket.status;
    const updatedTicket = await ticket.save();
    res.status(200).json(updatedTicket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json({ message: "Ticket deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllTickets,
  createTicket,
  updateTicketStatus,
  deleteTicket,
};
