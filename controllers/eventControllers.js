const { ObjectId } = require("mongodb");
const { connectToDb } = require("../models/db");

// Get event by ID
const getEventById = async (req, res) => {
  const eventId = req.query.id;
  const db = await connectToDb();
  const event = await db
    .collection("events")
    .findOne({ _id: new ObjectId(eventId) });
  res.json(event);
};

// Get events with pagination and recency sorting
const getEvents = async (req, res) => {
  const limit = parseInt(req.query.limit) || 5;
  const page = parseInt(req.query.page) || 1;
  const db = await connectToDb();
  const events = await db
    .collection("events")
    .find({})
    .sort({ schedule: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .toArray();
  res.json(events);
};

// Create an event
const createEvent = async (req, res) => {
  const event = req.body;
  const db = await connectToDb();

  const existingEvent = await db
    .collection("events")
    .findOne({ name: event.name });
  if (existingEvent) {
    return res
      .status(409)
      .json({ error: "Event with the same name already exists" });
  }

  const result = await db.collection("events").insertOne(event);
  res.json({ id: result.insertedId });
};

// Update an event by ID
const updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const updatedEvent = req.body;
  const db = await connectToDb();
  const result = await db
    .collection("events")
    .updateOne({ _id: new ObjectId(eventId) }, { $set: updatedEvent });
  res.json({ modifiedCount: result.modifiedCount });
};

// Delete an event by ID
const deleteEvent = async (req, res) => {
  const eventId = req.params.id;
  const db = await connectToDb();
  const result = await db
    .collection("events")
    .deleteOne({ _id: new ObjectId(eventId) });
  res.json({ deletedCount: result.deletedCount });
};

module.exports = {
  getEventById,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
