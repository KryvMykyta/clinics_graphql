import { ClinicsRepository } from "./repository/ClinicsRepository";
import Database from "better-sqlite3";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { ClinicsController } from "./controllers/ClinicsController";
dotenv.config();

const clinicsDB = new Database(process.env.DB_FILENAME as string);

const clinicsRepository = new ClinicsRepository(clinicsDB);

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

const clinics = new ClinicsController("/graphql", clinicsRepository);

const controllers = [clinics];

controllers.forEach((controller) => {
  app.use(controller.path, controller.handler);
});

app.listen(PORT, () => {
  console.log("started");
});
