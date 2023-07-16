import { Express } from "express";
import { router } from "./router.config";
export function routerRegister(app: Express) {
  router.forEach((routerItem) => {
    const { prefix, route } = routerItem;
    app.use(prefix, route);
  });
}
