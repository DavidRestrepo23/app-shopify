const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.json({ extended: true }));

/**
 * Enable cors
 */
app.use(cors());

/**
 * API Covid information
 */
app.use("/api/v1/covid/totals", require("./routes/covid"));

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
  console.log(`Server is runing in port: ${PORT}`);
});
