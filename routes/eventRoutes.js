const express = require("express");
const {
  getEventById,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventControllers");

const router = express.Router();

router.get("/events", getEventById);
router.get("/events", getEvents);
router.post("/events", createEvent);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

module.exports = router;
