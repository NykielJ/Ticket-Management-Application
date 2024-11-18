const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/tisketController");

router.get("/", ticketController.getAllTickets);
router.post("/", ticketController.createTicket);
router.patch("/:id/status", ticketController.updateTicketStatus);
router.delete("/:id", ticketController.deleteTicket);

module.exports = router;
