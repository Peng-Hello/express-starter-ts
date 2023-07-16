import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<div style='color:red'>HI</div>");
});

export default router;
