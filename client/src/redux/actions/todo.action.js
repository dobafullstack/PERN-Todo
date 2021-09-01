import * as actionTypes from "../constants/todo.constant";
import axios from "axios";

export const getAllTodo = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/todo");

        dispatch({
            type: actionTypes.GET_TODO_REQUIRED,
        });

        setTimeout(() => {
            dispatch({
                type: actionTypes.GET_ALL_TODO,
                payload: {
                    todoList: data,
                },
            });
        }, 1500);
    } catch (error) {
        if (error.response) {
            dispatch({
                type: actionTypes.GET_TODO_FAILURE,
                payload: {
                    messages: error.response.message,
                },
            });
        }
    }
};

export const addTodo = (description) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/todo/create", {
            description: description,
        });

        dispatch({
            type: actionTypes.ADD_TODO,
            payload: {
                todo: data,
            },
        });
    } catch (error) {
        if (error.response) {
            dispatch({
                type: actionTypes.ADD_TODO_FAILURE,
                payload: {
                    message: error.response.message,
                },
            });
        } else {
            dispatch({
                type: actionTypes.ADD_TODO_FAILURE,
                payload: {
                    message: error.message,
                },
            });
        }
    }
};

export const searchTodo = (description) => async (dispatch, getState) => {
    if (!description) {
        console.log("ABC");
        dispatch(getAllTodo());
        return;
    }

    try {
        const { data } = await axios.post("/todo/search", {
            description: description,
        });

        dispatch({
            type: actionTypes.GET_TODO_REQUIRED,
        });

        setTimeout(() => {
            dispatch({
                type: actionTypes.GET_TODO_BY_DESCRIPTION,
                payload: {
                    todoList: data,
                },
            });
        }, 1500);
    } catch (error) {
        console.log(error.response);
        if (error.response) {
            dispatch({
                type: actionTypes.GET_TODO_FAILURE,
                payload: {
                    message: error.response.data.message,
                },
            });
        } else {
            dispatch({
                type: actionTypes.GET_TODO_FAILURE,
                payload: {
                    message: error.message,
                },
            });
        }
    }
};

export const updateTodo =
    (id, description, isCompleted) => async (dispatch, getState) => {
        const todoList = [...getState().todo.todoList];
        try {
            const { data } = await axios.put(`/todo/update/${id}`, {
                description,
                isCompleted,
            });

            const index = todoList.findIndex(item => item.id === id);

            todoList[index] = data;

            dispatch({
                type: actionTypes.UPDATE_TODO,
                payload: {
                    todoList: todoList,
                }
            })
            
        } catch (error) {
            if (error.response) {
                dispatch({
                    type: actionTypes.UPDATE_TODO_FAILURE,
                    payload: {
                        message: error.response.data.message,
                    },
                });
            } else {
                dispatch({
                    type: actionTypes.UPDATE_TODO_FAILURE,
                    payload: {
                        message: error.message,
                    },
                });
            }
        }
    };

export const deleteTodo = (id) => async (dispatch, getState) => {
    let todoList = [...getState().todo.todoList];
    try {
        await axios.delete(`/todo/delete/${id}`);

        todoList = todoList.filter(item => item.id !== id);

        dispatch({
            type: actionTypes.REMOVE_TODO,
            payload: {
                todoList: todoList,
            }
        })
    } catch (error) {
        if (error.response) {
            dispatch({
                type: actionTypes.REMOVE_TODO_FAILURE,
                payload: {
                    message: error.response.data.message,
                },
            });
        } else {
            dispatch({
                type: actionTypes.REMOVE_TODO_FAILURE,
                payload: {
                    message: error.message,
                },
            });
        }
    }
}
