const app = require("./config/express.config");
require("dotenv").config();

const Port = process.env.PORT;

app.listen(Port, () => {
  console.log(`server running on http://localhost:${Port} `);
});
