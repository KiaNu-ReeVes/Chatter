import express, { Request, Response } from "express";
import flash from "connect-flash";
import session from "express-session";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2";
const dbConfig = {
  host: process.env.MYSQL_HOST || "localhost",
  port: parseInt(process.env.MYSQL_PORT || "3306"),
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "mydb",
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Database Connected");
  }
});
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

import http from "http";
import { Server } from "socket.io";
const server = http.createServer(app);
const io = new Server(server);
export default class Application {
  constructor() {
    this.websiteConfig();
    this.folderListen();
    this.serverListen();
    this.electronApp();
  }

  private websiteConfig(): void {
    app.use(express.static(__dirname + "/public"));
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "resources/views"));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.set("trust proxy", 1);
    app.use(cookieParser("87H49CBh0E"));
    app.use(
      session({
        secret: "abcdefg",
        resave: true,
        saveUninitialized: false,
      })
    );
    app.use(flash());

    app.get("/", async (req: Request, res: Response) => {
      return res.render("index");
    });

    io.on("connection", (socket) => {
      console.log("A user connected " + socket.id);
      socket.on("new-message", (message) => {
        socket.broadcast.emit("new-message", message);
      });
      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });
  }
  private folderListen(): void {
    // app.use("/dashboard", require("./router/auth/index"));
  }
  private serverListen(): void {
    // app.use((req: Request, res: Response) => {
    //   res.status(404).render("404");
    // });
    server.listen(process.env.WEBSITE_PORT, () => {
      console.log(
        `WebSite Loaded\nAddress : http://localhost:${process.env.WEBSITE_PORT}`
      );
    });
    // app.listen(process.env.WEBSITE_PORT, (err) => {
    //   if (err) console.log(err);
    //   console.log(
    //     `WebSite Loaded\nAddress : http://localhost:${process.env.WEBSITE_PORT}`
    //   );
    // });
  }
  private electronApp(): void {}
}
