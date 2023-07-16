import express from "express";
import { routerRegister } from "./router/router_register";
const app = express();
routerRegister(app);
app.listen(3000, () => {
  console.log("server is running");
});
