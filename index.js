const events = require("events");
events.EventEmitter.defaultMaxListeners = 100;

const express = require("express");
const eventRoutes = require("./routes/eventRoutes.js");

const app = express();
const port = 8000;

app.use(express.json());
app.use("/api/v3/app", eventRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
