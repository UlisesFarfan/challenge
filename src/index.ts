import express from "express";

import "dotenv-flow/config";

import router from "./routes/index";

import cors from "cors";

import morgan from "morgan";

const app = express();

const corsOptions = {
  origin: ["*"],
  preflightContinue: false,
};

app.use(express.json());

app.use(morgan("dev"));

app.use(cors(corsOptions));

// index of my routes
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});