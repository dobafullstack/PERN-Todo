import pool from "../db.js";
import * as queries from "../constant/todo.constant.js";

class TodoController {
    static createTodo = async (req, res) => {
        try {
            const { description } = req.body;

            if (!description || description === "") {
                res.status(403).json({
                    message: "Content is not allowed null",
                });
                return;
            }
            const todo = await pool.query(queries.CREATE_TODO, [description]);

            res.status(200).json(todo.rows[0]);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    };

    static getAllTodo = async (req, res) => {
        try {
            const todos = await pool.query(queries.GET_ALL_TODO);

            res.status(200).json(todos.rows);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static getTodoById = async (req, res) => {
        try {
            const { id } = req.params;

            const todo = await pool.query(queries.GET_TODO_BY_ID, [id]);

            res.status(200).json(todo.rows[0]);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static getTodoByDescription = async (req, res) => {
        try {
            const { description } = req.body;

            if (!description){
                res.status(401).json({ message: "Description is not allowed null"})
                return
            }

            const todo = await pool.query(queries.GET_TODO_BY_DESCRIPTION, [
                description,
            ]);

            res.status(200).json(todo.rows);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static deleteTodo = async (req, res) => {
        try {
            const { id } = req.params;

            await pool.query(queries.DELETE_TODO, [id]);

            res.status(200).json("Delete successful!");
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static updateTodo = async (req, res) => {
        try {
            const { id } = req.params;
            const { description, isCompleted } = req.body;

            if (description === undefined || isCompleted === undefined) {
                res.status(401).json({ message: "body null" });
                return;
            }

            const todo = await pool.query(queries.UPDATE_TODO, [
                description,
                isCompleted,
                id,
            ]);

            res.status(200).json(todo.rows[0]);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

export default TodoController;
