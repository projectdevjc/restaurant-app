// import { Container } from "inversify";
// import TYPES from "./types";
// import { UserController } from "./controllers/user.controller";
// import { UserService } from "./services/user.service";
//
// let container = new Container();
//
// container.bind<UserController>(TYPES.UserController).to(UserController);
// container.bind<UserService>(TYPES.UserService).to(UserService);
//
// export { container };
//
// export const TYPES = {
//   UserController: Symbol("UserController"),
//   UserService: Symbol("UserService"),
// };
//
// import { container } from "./inversify.config";
// import { UserController } from "./controllers/user.controller";
// import { UserService } from "./services/user.service";
//
// let userController = container.get<UserController>(TYPES.UserController);
// let userService = container.get<UserService>(TYPES.UserService);
//
// import { injectable } from "inversify";
//
// @injectable()
// export class UserService {
//   public async getUsers(): Promise<any> {
//     // Return some sample data for now
//     return [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }];
//   }
// }
//
// import { inject, injectable } from "inversify";
// import { Request, Response } from "express";
// import { UserService } from "../services/user.service";
//
// @injectable()
// export class UserController {
//   constructor(@inject(TYPES.UserService) private userService: UserService) {}
//
//   public async getUsers(req: Request, res: Response) {
//     try {
//       const users = await this.userService.getUsers();
//       res.json(users);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   }
// // }
// import express from "express";
// import { container } from "./inversify.config";
// import { UserController } from "./controllers/user.controller";
//
// const app = express();
// const userController = container.get<UserController>(TYPES.UserController);
//
// app.get("/users", userController.getUsers);
// import "reflect-metadata";
