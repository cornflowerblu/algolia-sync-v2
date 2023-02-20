import express, { Request, Response } from "express";
const indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/", function (req: Request, res: Response, next) {
  res.json({ title: "Welcome to Express" });
});

export default indexRouter;
