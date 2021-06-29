import fetch from "sync-fetch";
import express from "express";
import jsonGraphQlServer from "json-graphql-server";
import serverless from "serverless-http";

const data = fetch(
  "https://github.com/cncf/cloudnativetv/releases/download/blox/data.json"
).json();

const app = express();

app.use("/", jsonGraphQlServer(data));

const port = process.env.PORT || 4000;

exports.handler = serverless(app);
