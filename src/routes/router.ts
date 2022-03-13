import express from "express";
const mW = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  let url = req.url;
  console.log(`You've visited ${url} `);
  next();
};
export default mW;
