import express from "express";
import controller from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", controller.getAllTodo);
router.post("/search", controller.getTodoByDescription);
router.get("/:id", controller.getTodoById);
router.post("/create", controller.createTodo);
router.delete("/delete/:id", controller.deleteTodo);
router.put("/update/:id", controller.updateTodo);

export default router;
