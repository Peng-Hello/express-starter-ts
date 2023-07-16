import { RouterConfig } from "../type/router.type";
import test from "./Test/index";

export const router: RouterConfig = [
  {
    prefix: "/test",
    route: test,
  },
];

// export const config = [
//   {
//     path: "/role",
//     desc: "",
//     children: [
//       {
//         method: "get",
//         path: "/test",
//         desc: "",
//         component: Role,
//       },
//     ],
//   },
// ];
