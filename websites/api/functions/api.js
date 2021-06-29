const fetch = require("sync-fetch");
const jsonGraphQlServer = require("json-graphql-server");

const data = fetch(
  "https://github.com/cncf/cloudnativetv/releases/download/blox/data.json"
).json();

const app = require("express")();

app.use("/", jsonGraphQlServer.default(data));

const port = process.env.PORT || 4000;

exports.handler = app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
